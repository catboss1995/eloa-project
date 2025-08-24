import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../scss/articles/_base.scss";

// 文章基礎模板組件
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