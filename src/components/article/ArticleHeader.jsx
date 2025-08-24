import React from 'react';

/**
 * ArticleHeader 組件
 * 文章頁面的頂部區域，包含麵包屑導航、文章標題、作者信息和分享按鈕等
 * 
 * @param {Object} props 組件屬性
 * @param {string} props.title 文章標題
 * @param {Object} props.author 作者信息
 * @param {string} props.author.name 作者姓名
 * @param {string} props.author.image 作者頭像圖片URL
 * @param {string} props.publishDate 發布日期
 * @param {string} props.category 文章分類
 * @returns {JSX.Element} 文章頭部組件
 */
const ArticleHeader = ({ title, author, publishDate, category }) => {
  return (
    <>
      {/* 麵包屑導航 - 顯示當前頁面在網站結構中的位置 */}
      <div className="breadcrumb">
        {/* 返回肌膚知識學苑首頁的連結 */}
        <a href="/academy" className="breadcrumbLink">肌膚知識學苑</a>
        <span className="separator">/</span>
        {/* 返回特定分類頁面的連結 */}
        <a href={`/academy?category=${category}`} className="breadcrumbLink">{category}</a>
        <span className="separator">/</span>
        {/* 當前文章標題（非連結） */}
        <span className="currentPage">{title}</span>
      </div>

      {/* 文章標題區 - 包含標題、作者信息和分享按鈕 */}
      <div className="articleHeader">
        {/* 文章主標題 */}
        <h1 className="articleTitle">{title}</h1>
        
        {/* 文章元數據區域 - 作者信息和分享按鈕 */}
        <div className="articleMeta">
          {/* 作者信息區塊 - 頭像、姓名和發布日期 */}
          <div className="authorInfo">
            {/* 作者頭像 */}
            <img src={author.image} alt={`${author.name}照片`} className="authorImage" />
            
            {/* 作者詳細信息 */}
            <div className="authorDetails">
              {/* 作者姓名 */}
              <span className="authorName">{author.name}</span>
              {/* 文章發布日期 */}
              <span className="publishDate">發布於 {publishDate}</span>
            </div>
          </div>
          
          {/* 分享和收藏按鈕區域 */}
          <div className="shareButtons">
            {/* 分享按鈕 */}
            <button className="shareBtn">分享</button>
            {/* 收藏按鈕 */}
            <button className="saveBtn">收藏</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleHeader;