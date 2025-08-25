import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ArticleFooter 組件
 * 文章頁面的底部區域，包含相關文章推薦列表、返回按鈕和裝飾元素
 * 
 * @param {Object} props 組件屬性
 * @param {Array} [props.relatedArticles=[]] 相關文章列表，默認為空數組
 * @param {string} props.relatedArticles[].id 文章ID
 * @param {string} props.relatedArticles[].slug 文章的URL標識符
 * @param {string} props.relatedArticles[].title 文章標題
 * @returns {JSX.Element} 文章底部組件
 */
const ArticleFooter = ({ relatedArticles = [] }) => {
  return (
    <>
      {/* 相關文章區塊 - 只有當有相關文章時才會顯示 */}
      {relatedArticles.length > 0 && (
        <div className="relatedArticles">
          {/* 相關文章區塊標題 */}
          <h2 className="relatedTitle">相關文章推薦</h2>
          
          {/* 相關文章列表容器 */}
          <div className="relatedList">
            {/* 遍歷渲染每篇相關文章的連結 */}
            {relatedArticles.map(article => (
              <Link 
                key={article.id} 
                to={`/article/${article.slug}`} 
                className="relatedItem"
              >
                {/* 文章前的裝飾點 */}
                <span className="relatedDot"></span>
                {/* 文章標題 */}
                <span className="relatedText">{article.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 返回按鈕區塊 - 提供返回文章列表頁的導航 */}
      <div className="backButtonContainer">
        <Link to="/academy" className="backButton">
          {/* 返回箭頭符號 */}
          <span className="backArrow">←</span>
          {/* 返回按鈕文字 */}
          <span className="backText">返回文章列表</span>
        </Link>
      </div>

      {/* 底部裝飾元素 - 用於視覺美化 */}
      <div className="bottomDecoration"></div>
    </>
  );
};

export default ArticleFooter;