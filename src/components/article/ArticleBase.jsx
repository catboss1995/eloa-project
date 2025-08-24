import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../scss/articles/_base.scss";
import "../../scss/articles/_enhanced.scss"; // 引入增強樣式

/**
 * ArticleBase 組件
 * 文章頁面的基礎模板，提供統一的佈局和結構
 * 包含麵包屑導航、標題區、作者信息、主視覺圖片、相關文章和底部導航
 * 設計風格接近附圖中的整體佈局和視覺效果
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
  const navigate = useNavigate();

  return (
    <div className="articleContentPage">
      {/* 頂部導航 */}
      <div className="breadcrumb">
        <Link to="/article" className="breadcrumbLink">肌膚知識學苑</Link>
        <span className="separator">/</span>
        <Link to={`/article?category=${category}`} className="breadcrumbLink">{category}</Link>
        <span className="separator">/</span>
        <span className="currentPage">{title}</span>
      </div>

      {/* 文章標題區 */}
      <div className="articleHeader">
        <h1 className="articleTitle">{title}</h1>
        <div className="articleMeta">
          <div className="authorInfo">
            <img src={author.image} alt={`作者照片 - ${author.name}`} className="authorImage" />
            <div className="authorDetails">
              <span className="authorName">{author.name}</span>
              <span className="publishDate">發布於 {publishDate}</span>
            </div>
          </div>
          <div className="shareButtons">
            <button className="shareBtn">分享</button>
            <button className="saveBtn">收藏</button>
          </div>
        </div>
      </div>

      {/* 主視覺圖片 */}
      {heroImage && (
        <div className="heroImageContainer">
          <img src={heroImage} alt={title} className="heroImage" />
        </div>
      )}

      {/* 文章內容 - 由子組件提供 */}
      <div className="articleContent">
        {children}
      </div>

      {/* 相關文章 */}
      {relatedArticles.length > 0 && (
        <div className="relatedArticles">
          <h2 className="relatedTitle">相關文章推薦</h2>
          <div className="relatedList">
            {relatedArticles.map(article => (
              <Link key={article.id} to={`/article/${article.slug}`} className="relatedItem">
                <span className="relatedDot"></span>
                <span className="relatedText">{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 返回按鈕 */}
      <div className="backButtonContainer">
        <button onClick={() => navigate(-1)} className="backButton">
          <span className="backArrow">←</span>
          <span className="backText">返回文章列表</span>
        </button>
      </div>

      {/* 底部裝飾 */}
      <div className="bottomDecoration"></div>
    </div>
  );
};

export default ArticleBase;