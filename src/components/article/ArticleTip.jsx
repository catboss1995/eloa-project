import React from 'react';

/**
 * ArticleTip 組件
 * 用於顯示單個提示項目，包含編號、標題和描述
 * 設計風格接近附圖中的提示卡片
 * 
 * @param {Object} props 組件屬性
 * @param {number} props.number 提示的編號
 * @param {string} props.title 提示的標題
 * @param {string} props.description 提示的詳細描述
 * @returns {JSX.Element} 提示卡片組件
 */
const ArticleTip = ({ number, title, description }) => {
  return (
    <div className="tipItem">
      {/* 提示編號 */}
      <div className="tipNumber">{number}</div>
      
      {/* 提示內容 */}
      <div className="tipContent">
        <h3 className="tipTitle">{title}</h3>
        <p className="tipDesc">{description}</p>
      </div>
    </div>
  );
};

export default ArticleTip;