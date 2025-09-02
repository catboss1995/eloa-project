/**
 * 文章系統通用 Hook
 * 統一處理文章相關的邏輯，減少重複程式碼
 */

import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import articlesData from '../data/articlesData';
import { ArticleUtils, DEFAULT_IMAGES } from '../config/articleConfig';

/**
 * 文章資料 改寫 Hook
 * 處理單篇文章的資料獲取和相關文章推薦
 */
export const useArticleData = (slug) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 獲取文章資料
    const articleData = useMemo(() => {
        if (!slug) return null;
        return articlesData.find(article => article.slug === slug);
    }, [slug]);

    // 獲取相關文章
    const relatedArticles = useMemo(() => {
        if (!articleData) return [];
        return ArticleUtils.getRelatedArticles(articlesData, slug, 3);
    }, [articleData, slug]);

    // 生成麵包屑
    const breadcrumbItems = useMemo(() => {
        if (!articleData) return [];
        return ArticleUtils.generateBreadcrumb(articleData.category, articleData.title);
    }, [articleData]);

    useEffect(() => {
        setIsLoading(false);
        if (slug && !articleData) {
            setError('文章不存在');
        } else {
            setError(null);
        }
    }, [slug, articleData]);

    return {
        articleData,
        relatedArticles,
        breadcrumbItems,
        isLoading,
        error,
        isValid: Boolean(articleData && ArticleUtils.validateArticleData(articleData))
    };
};

/**
 * 文章列表 Hook
 * 處理文章列表的篩選、排序和分頁
 */
export const useArticleList = (options = {}) => {
    const {
        category = null,
        pageSize = 10,
        sortBy = 'publishDate',
        sortOrder = 'desc'
    } = options;

    const [currentPage, setCurrentPage] = useState(1);

    // 篩選文章
    const filteredArticles = useMemo(() => {
        let articles = [...articlesData];

        // 按分類篩選
        if (category) {
            articles = articles.filter(article => article.category === category);
        }

        // 排序
        articles.sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            if (sortOrder === 'desc') {
                return new Date(bValue) - new Date(aValue);
            } else {
                return new Date(aValue) - new Date(bValue);
            }
        });

        return articles;
    }, [category, sortBy, sortOrder]);

    // 分頁處理
    const paginatedArticles = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredArticles.slice(startIndex, endIndex);
    }, [filteredArticles, currentPage, pageSize]);

    const totalPages = Math.ceil(filteredArticles.length / pageSize);

    return {
        articles: paginatedArticles,
        totalArticles: filteredArticles.length,
        currentPage,
        totalPages,
        setCurrentPage,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1
    };
};

/**
 * 文章導航 Hook
 * 處理文章頁面的導航邏輯
 */
export const useArticleNavigation = () => {
    const navigate = useNavigate();
    const params = useParams();

    const goBack = () => {
        navigate(-1);
    };

    const goToArticle = (slug) => {
        navigate(`/article/${slug}`);
    };

    const goToCategory = (category) => {
        navigate(`/article?category=${encodeURIComponent(category)}`);
    };

    const goToArticleList = () => {
        navigate('/article');
    };

    return {
        goBack,
        goToArticle,
        goToCategory,
        goToArticleList,
        currentSlug: params.slug
    };
};

/**
 * 文章 SEO Hook
 * 處理文章頁面的 SEO 資訊
 */
export const useArticleSEO = (articleData) => {
    useEffect(() => {
        if (!articleData) return;

        // 設定頁面標題
        document.title = `${articleData.title} | ELOA 肌膚知識學苑`;

        // 設定 meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', articleData.description || '');
        }

        // 設定 meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords && articleData.keywords) {
            metaKeywords.setAttribute('content', articleData.keywords.join(', '));
        }

        // 清理函數
        return () => {
            document.title = 'ELOA';
        };
    }, [articleData]);
};

/**
 * 文章分享 Hook
 * 處理文章的分享功能
 */
export const useArticleShare = (articleData) => {
    const shareArticle = async (platform = 'copy') => {
        if (!articleData) return;

        const url = window.location.href;
        const title = articleData.title;
        const description = articleData.description;

        try {
            switch (platform) {
                case 'copy':
                    await navigator.clipboard.writeText(url);
                    alert('連結已複製到剪貼簿');
                    break;

                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                    break;

                case 'line':
                    window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
                    break;

                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
                    break;

                case 'native':
                    if (navigator.share) {
                        await navigator.share({
                            title,
                            text: description,
                            url
                        });
                    } else {
                        throw new Error('不支援原生分享');
                    }
                    break;

                default:
                    console.warn('不支援的分享平台:', platform);
            }
        } catch (error) {
            console.error('分享失敗:', error);
            alert('分享失敗，請稍後再試');
        }
    };

    const saveArticle = () => {
        // 這裡可以實作收藏功能
        // 可能需要連接到後端 API 或使用 localStorage
        const savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');

        if (savedArticles.find(saved => saved.slug === articleData.slug)) {
            alert('文章已經在收藏清單中');
            return;
        }

        savedArticles.push({
            slug: articleData.slug,
            title: articleData.title,
            savedAt: new Date().toISOString()
        });

        localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
        alert('文章已加入收藏');
    };

    return {
        shareArticle,
        saveArticle
    };
};

/**
 * 圖片載入 Hook
 * 處理圖片的懶載入和錯誤處理
 */
export const useImageLoader = (src, fallback = DEFAULT_IMAGES.ARTICLE_PLACEHOLDER) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImageSrc(src);
        setIsLoading(true);
        setHasError(false);

        const img = new Image();
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setImageSrc(fallback);
            setIsLoading(false);
            setHasError(true);
        };
        img.src = src;
    }, [src, fallback]);

    return {
        imageSrc,
        isLoading,
        hasError
    };
};

/**
 * 文章閱讀進度 Hook
 * 追蹤使用者的閱讀進度
 */
export const useReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progressPercentage = (scrollTop / documentHeight) * 100;
            setProgress(Math.min(Math.max(progressPercentage, 0), 100));
        };

        const throttledCalculateProgress = throttle(calculateProgress, 100);

        window.addEventListener('scroll', throttledCalculateProgress);
        calculateProgress(); // 初始計算

        return () => {
            window.removeEventListener('scroll', throttledCalculateProgress);
        };
    }, []);

    return progress;
};

// 輔助函數：節流
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
