import React from 'react';

/**
 * ArticleIntro 組件
 * 用於顯示文章的簡介部分，通常位於文章開頭
 * 設計風格接近附圖中的簡介文字區域
 * 
 * @param {Object} props 組件屬性
 * @param {React.ReactNode} props.children 簡介內容，通常是文字段落
 * @returns {JSX.Element} 文章簡介組件
 */
const ArticleIntro = ({ children }) => {
  return (
    // 簡介容器，應用特定的樣式
    <div className="articleIntro">
      {/* 簡介文字內容，由外部傳入 */}
      <p>{children}</p>
    </div>
  );
};

export default ArticleIntro;