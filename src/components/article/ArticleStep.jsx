import React from 'react';

/**
 * ArticleStep 組件
 * 用於顯示文章中的步驟卡片，包含步驟編號、標題、描述和圖片
 * 可以通過 reverse 參數控制卡片的排列方向
 * 
 * @param {Object} props 組件屬性
 * @param {number} props.number 步驟編號
 * @param {string} props.title 步驟標題
 * @param {string} props.description 步驟詳細描述
 * @param {string} props.image 步驟相關圖片的URL
 * @param {boolean} props.reverse 是否反轉卡片佈局，默認為false
 * @returns {JSX.Element} 步驟卡片組件
 */
const ArticleStep = ({ number, title, description, image, reverse = false }) => {
  return (
    // 根據reverse參數決定是否添加reverse類名來改變佈局方向
    <div className={`stepCard ${reverse ? 'reverse' : ''}`}>
      {/* 步驟編號 */}
      <div className="stepNumber">{number}</div>
      
      {/* 步驟圖片容器 */}
      <div className="stepImageContainer">
        <img src={image} alt={`步驟${number}：${title}`} className="stepImage" />
      </div>
      
      {/* 步驟內容區域，包含標題和描述 */}
      <div className="stepContent">
        <h3 className="stepTitle">{title}</h3>
        <p className="stepDesc">{description}</p>
      </div>
    </div>
  );
};

export default ArticleStep;