/**
 * 文章系統配置檔案
 * 統一管理文章相關的配置、常數和通用工具函數
 */

// 文章分類配置
export const ARTICLE_CATEGORIES = {
    EXPERT_COLUMN: '專家專欄',
    SKIN_TYPE: '膚質類型介紹',
    BEAUTY_DEVICE: '美容儀使用知識',
    TEACHING_VIDEO: '教學影片'
};

// 文章預設圖片
export const DEFAULT_IMAGES = {
    AUTHOR_PLACEHOLDER: 'https://placekitten.com/100/100',
    ARTICLE_PLACEHOLDER: 'https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg',
    HERO_PLACEHOLDER: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg'
};

// CSS 類名映射 - 保持現有的 class 和 id 不變
export const CSS_CLASSES = {
    // 主要容器
    ARTICLE_PAGE: 'articleContentPage',
    ARTICLE_CONTENT: 'articleContent',

    // 導航
    BREADCRUMB: 'breadcrumb',
    BREADCRUMB_LINK: 'breadcrumbLink',
    SEPARATOR: 'separator',
    CURRENT_PAGE: 'currentPage',

    // 標題區
    ARTICLE_HEADER: 'articleHeader',
    ARTICLE_TITLE: 'articleTitle',
    ARTICLE_META: 'articleMeta',
    AUTHOR_INFO: 'authorInfo',
    AUTHOR_IMAGE: 'authorImage',
    AUTHOR_DETAILS: 'authorDetails',
    AUTHOR_NAME: 'authorName',
    PUBLISH_DATE: 'publishDate',
    SHARE_BUTTONS: 'shareButtons',
    SHARE_BTN: 'shareBtn',
    SAVE_BTN: 'saveBtn',

    // 主視覺
    HERO_IMAGE_CONTAINER: 'heroImageContainer',
    HERO_IMAGE: 'heroImage',

    // 內容區塊
    ARTICLE_INTRO: 'articleIntro',
    CONTENT_SECTION: 'contentSection',
    SECTION_TEXT: 'sectionText',
    SECTION_TITLE: 'sectionTitle',
    SECTION_DESC: 'sectionDesc',
    QUESTION_BOX: 'questionBox',
    QUESTION_TITLE: 'questionTitle',
    QUESTION_DESC: 'questionDesc',

    // 分隔線
    DIVIDER: 'divider',
    DIVIDER_TEXT: 'dividerText',

    // 步驟
    STEPS_SECTION: 'stepsSection',
    STEP_CARD: 'stepCard',
    STEP_NUMBER: 'stepNumber',
    STEP_IMAGE_CONTAINER: 'stepImageContainer',
    STEP_IMAGE: 'stepImage',
    STEP_CONTENT: 'stepContent',
    STEP_TITLE: 'stepTitle',
    STEP_DESC: 'stepDesc',

    // 提示
    TIPS_SECTION: 'tipsSection',
    TIP_ITEM: 'tipItem',
    TIP_NUMBER: 'tipNumber',
    TIP_CONTENT: 'tipContent',
    TIP_TITLE: 'tipTitle',
    TIP_DESC: 'tipDesc',

    // 結論
    CONCLUSION_SECTION: 'conclusionSection',
    CONCLUSION_TITLE: 'conclusionTitle',
    CONCLUSION_TEXT: 'conclusionText',

    // 相關文章
    RELATED_ARTICLES: 'relatedArticles',
    RELATED_TITLE: 'relatedTitle',
    RELATED_LIST: 'relatedList',
    RELATED_ITEM: 'relatedItem',
    RELATED_DOT: 'relatedDot',
    RELATED_TEXT: 'relatedText',

    // 返回按鈕
    BACK_BUTTON_CONTAINER: 'backButtonContainer',
    BACK_BUTTON: 'backButton',
    BACK_ARROW: 'backArrow',
    BACK_TEXT: 'backText',

    // 裝飾
    BOTTOM_DECORATION: 'bottomDecoration'
};

// 文章資料處理工具函數
export const ArticleUtils = {
    /**
     * 格式化日期
     * @param {string|Date} date - 日期
     * @returns {string} 格式化後的日期字串
     */
    formatDate: (date) => {
        if (!date) return '';
        const dateObj = new Date(date);
        return `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;
    },

    /**
     * 獲取相關文章
     * @param {Array} allArticles - 所有文章列表
     * @param {string} currentSlug - 當前文章的 slug
     * @param {number} count - 需要的相關文章數量
     * @returns {Array} 相關文章列表
     */
    getRelatedArticles: (allArticles, currentSlug, count = 3) => {
        return allArticles
            .filter(article => article.slug !== currentSlug)
            .slice(0, count)
            .map(article => ({
                id: article.id,
                slug: article.slug,
                title: article.title
            }));
    },

    /**
     * 生成麵包屑導航
     * @param {string} category - 文章分類
     * @param {string} title - 文章標題
     * @returns {Array} 麵包屑項目列表
     */
    generateBreadcrumb: (category, title) => [
        { text: '肌膚知識學苑', link: '/article' },
        { text: category, link: `/article?category=${category}` },
        { text: title, isActive: true }
    ],

    /**
     * 驗證文章資料完整性
     * @param {Object} articleData - 文章資料
     * @returns {boolean} 是否有效
     */
    validateArticleData: (articleData) => {
        const required = ['title', 'category', 'publishDate', 'author'];
        return required.every(field => articleData && articleData[field]);
    },

    /**
     * 生成安全的圖片 URL
     * @param {string} imageUrl - 原始圖片 URL
     * @param {string} fallback - 備用圖片 URL
     * @returns {string} 安全的圖片 URL
     */
    getSafeImageUrl: (imageUrl, fallback = DEFAULT_IMAGES.ARTICLE_PLACEHOLDER) => {
        return imageUrl || fallback;
    },

    /**
     * 生成 SEO 友好的 slug
     * @param {string} title - 文章標題
     * @returns {string} SEO slug
     */
    generateSlug: (title) => {
        return title
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .trim();
    }
};

// 響應式斷點
export const BREAKPOINTS = {
    MOBILE: '480px',
    TABLET: '768px',
    DESKTOP: '1024px',
    LARGE: '1200px'
};

// 動畫時間
export const ANIMATION_DURATIONS = {
    FAST: '0.2s',
    NORMAL: '0.3s',
    SLOW: '0.5s'
};

// 元件預設屬性
export const DEFAULT_PROPS = {
    STEP_FLOW: {
        steps: []
    },
    IMAGE_GRID: {
        images: [],
        columns: 3
    },
    TIPS: {
        tips: [],
        title: '小提示'
    }
};
