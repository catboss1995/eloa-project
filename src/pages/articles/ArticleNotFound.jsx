import React from 'react';
import { Link } from 'react-router-dom';

// 文章未找到頁面
const ArticleNotFound = () => {
  return (
    <div className="articleContentPage">
      <div className="breadcrumb">
        <Link to="/academy" className="breadcrumbLink">肌膚知識學苑</Link>
        <span className="separator">/</span>
        <span className="currentPage">文章未找到</span>
      </div>

      <div className="notFoundContainer">
        <div className="notFoundIcon">404</div>
        <h1 className="notFoundTitle">很抱歉，找不到您要的文章</h1>
        <p className="notFoundDesc">您嘗試訪問的文章可能已被移除或不存在。</p>
        <Link to="/academy" className="backButton">
          <span className="backArrow">←</span>
          <span className="backText">返回文章列表</span>
        </Link>
      </div>

      {/* 底部裝飾 */}
      <div className="bottomDecoration"></div>
    </div>
  );
};

export default ArticleNotFound;