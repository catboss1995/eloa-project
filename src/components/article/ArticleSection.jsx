import React from 'react';

/**
 * ArticleSection 組件
 * 用於顯示文章中的內容區塊，包含標題、正文內容，以及可選的問題框
 * 設計風格接近附圖中的內容區塊
 * 
 * @param {Object} props 組件屬性
 * @param {string} props.title 區塊標題
 * @param {React.ReactNode} props.children 區塊內容，通常是文字段落
 * @param {Object} [props.questionBox] 可選的問題框配置
 * @param {string} props.questionBox.title 問題框標題
 * @param {string} props.questionBox.content 問題框內容
 * @returns {JSX.Element} 文章區塊組件
 */
const ArticleSection = ({ title, children, questionBox }) => {
  return (
    // 整個區塊的容器
    <section className="contentSection">
      {/* 主要文本內容區域 */}
      <div className="sectionText">
        {/* 區塊標題 */}
        <h2 className="sectionTitle">{title}</h2>
        {/* 區塊描述/內容，由外部傳入 */}
        <div className="sectionDesc">{children}</div>
      </div>
      
      {/* 問題框區域 - 只有當提供了questionBox參數時才會渲染 */}
      {questionBox && (
        <div className="questionBox">
          {/* 問題框標題 */}
          <h3 className="questionTitle">{questionBox.title}</h3>
          {/* 問題框內容 */}
          <p className="questionDesc">{questionBox.content}</p>
        </div>
      )}
    </section>
  );
};

export default ArticleSection;