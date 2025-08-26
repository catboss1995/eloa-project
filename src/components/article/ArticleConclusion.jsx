import React from 'react';

/**
 * ArticleConclusion 組件
 * 用於顯示文章的結論或總結部分，通常位於文章末尾
 * 設計風格接近附圖中的結論區域
 * 
 * @param {Object} props 組件屬性
 * @param {string} props.title 結論部分的標題
 * @param {Array<string>} props.paragraphs 結論段落內容的數組，每個元素為一個段落
 * @returns {JSX.Element} 文章結論組件
 */
const ArticleConclusion = ({ title, paragraphs }) => {
  return (
    // 結論部分的容器
    <section className="conclusionSection">
      {/* 結論標題 */}
      <h2 className="conclusionTitle">{title}</h2>
      
      {/* 遍歷渲染每個結論段落 */}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="conclusionText">{paragraph}</p>
      ))}
    </section>
  );
};

export default ArticleConclusion;