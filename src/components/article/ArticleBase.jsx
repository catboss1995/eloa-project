import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/articles/_base.scss";
import "../../scss/articles/_enhanced.scss";
import { CSS_CLASSES, ArticleUtils } from '../../config/articleConfig';
import { useArticleNavigation, useArticleShare, useImageLoader } from '../../hooks/useArticle';

/**
 * ArticleBase 組件 - 重構版本
 * 文章頁面的基礎模板，提供統一的佈局和結構
 * 使用統一的配置和 Hook 來減少重複程式碼
 * 
 * @param {Object} props 組件屬性
 * @param {React.ReactNode} props.children 文章內容
 * @param {string} props.title 文章標題
 * @param {string} props.category 文章分類
 * @param {string} props.publishDate 發布日期
 * @param {Object} props.author 作者信息
 * @param {string} props.author.name 作者姓名
 * @param {string} props.author.image 作者頭像URL
 * @param {string} [props.heroImage] 主視覺圖片URL（可選）
 * @param {Array} [props.relatedArticles=[]] 相關文章列表
 * @returns {JSX.Element} 文章頁面基礎模板
 */
const ArticleBase = ({ 
  children, 
  title, 
  category, 
  publishDate, 
  author, 
  heroImage, 
  relatedArticles = [] 
}) => {
  // 使用自定義 Hook 處理導航
  const { goBack, goToCategory } = useArticleNavigation();
  
  // 使用自定義 Hook 處理分享功能
  const { shareArticle, saveArticle } = useArticleShare({ title, category });
  
  // 使用圖片載入 Hook
  const { imageSrc: authorImageSrc } = useImageLoader(author?.image);
  const { imageSrc: heroImageSrc } = useImageLoader(heroImage);
  
  // 格式化發布日期
  const formattedDate = ArticleUtils.formatDate(publishDate);

  return (
    <div className={CSS_CLASSES.ARTICLE_PAGE}>
      {/* 頂部導航 */}
      <div className={CSS_CLASSES.BREADCRUMB}>
        <Link to="/article" className={CSS_CLASSES.BREADCRUMB_LINK}>肌膚知識學苑</Link>
        <span className={CSS_CLASSES.SEPARATOR}>/</span>
        <button 
          type="button"
          onClick={() => goToCategory(category)} 
          className={CSS_CLASSES.BREADCRUMB_LINK}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          {category}
        </button>
        <span className={CSS_CLASSES.SEPARATOR}>/</span>
        <span className={CSS_CLASSES.CURRENT_PAGE}>{title}</span>
      </div>

      {/* 文章標題區 */}
      <div className={CSS_CLASSES.ARTICLE_HEADER}>
        <h1 className={CSS_CLASSES.ARTICLE_TITLE}>{title}</h1>
        <div className={CSS_CLASSES.ARTICLE_META}>
          <div className={CSS_CLASSES.AUTHOR_INFO}>
            <img 
              src={authorImageSrc} 
              alt={`作者照片 - ${author?.name}`} 
              className={CSS_CLASSES.AUTHOR_IMAGE} 
            />
            <div className={CSS_CLASSES.AUTHOR_DETAILS}>
              <span className={CSS_CLASSES.AUTHOR_NAME}>{author?.name}</span>
              <span className={CSS_CLASSES.PUBLISH_DATE}>發布於 {formattedDate}</span>
            </div>
          </div>
          <div className={CSS_CLASSES.SHARE_BUTTONS}>
            <button 
              className={CSS_CLASSES.SHARE_BTN}
              onClick={() => shareArticle('copy')}
              type="button"
            >
              分享
            </button>
            <button 
              className={CSS_CLASSES.SAVE_BTN}
              onClick={saveArticle}
              type="button"
            >
              收藏
            </button>
          </div>
        </div>
      </div>

      {/* 主視覺圖片 */}
      {heroImage && (
        <div className={CSS_CLASSES.HERO_IMAGE_CONTAINER}>
          <img 
            src={heroImageSrc} 
            alt={title} 
            className={CSS_CLASSES.HERO_IMAGE} 
          />
        </div>
      )}

      {/* 文章內容 - 由子組件提供 */}
      <div className={CSS_CLASSES.ARTICLE_CONTENT}>
        {children}
      </div>

      {/* 相關文章 */}
      {relatedArticles.length > 0 && (
        <div className={CSS_CLASSES.RELATED_ARTICLES}>
          <h2 className={CSS_CLASSES.RELATED_TITLE}>相關文章推薦</h2>
          <div className={CSS_CLASSES.RELATED_LIST}>
            {relatedArticles.map(article => (
              <Link 
                key={article.id} 
                to={`/article/${article.slug}`} 
                className={CSS_CLASSES.RELATED_ITEM}
              >
                <span className={CSS_CLASSES.RELATED_DOT}></span>
                <span className={CSS_CLASSES.RELATED_TEXT}>{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 返回按鈕 */}
      <div className={CSS_CLASSES.BACK_BUTTON_CONTAINER}>
        <button 
          onClick={goBack} 
          className={CSS_CLASSES.BACK_BUTTON}
          type="button"
        >
          <span className={CSS_CLASSES.BACK_ARROW}>←</span>
          <span className={CSS_CLASSES.BACK_TEXT}>返回文章列表</span>
        </button>
      </div>

      {/* 底部裝飾 */}
      <div className={CSS_CLASSES.BOTTOM_DECORATION}></div>
    </div>
  );
};

export default ArticleBase;