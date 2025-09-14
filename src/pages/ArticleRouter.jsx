import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import articlesData from '../data/articlesData';

// 導入所有文章組件
import Article1 from './articles/Article1';
import Article2 from './articles/Article2';
import Article3 from './articles/Article3';
import Article4 from './articles/Article4';
import Article5 from './articles/Article5';
import TestArticle from './articles/TestArticle';
import Article6 from './articles/Article6';

// 文章路由映射表
const articleComponents = {
  "face-washing-steps": Article2, // 使用新的洗臉文章組件
  "sensitive-skin-care-guide": Article1, // 使用重構版的敏感肌文章組件
  "test-article": TestArticle,
  "beauty-device-guide": Article3, // 添加美容儀器指南
  "seasonal-skincare": Article4, // 添加換季保養文章
  "hydration-explained": Article5, // 保濕大解析文章
  "facial-massage-techniques": Article6, // 臉部按摩技巧
  // 隨著新文章添加，這裡可以繼續擴展
};

// 文章路由器組件
const ArticleRouter = () => {
  const { slug } = useParams();
  
  // 測試文章特殊處理
  if (slug === "test-article") {
    return <TestArticle />;
  }
  
  // 檢查文章是否存在
  const articleExists = articlesData.some(article => article.slug === slug);
  
  if (!articleExists) {
    // 如果文章不存在，重定向到文章列表頁
    return <Navigate to="/article" replace />;
  }
  
  // 獲取對應的文章組件
  const ArticleComponent = articleComponents[slug];
  
  // 找到了對應的組件渲染
  if (ArticleComponent) {
    console.log(`渲染文章組件: ${slug}`); // 添加日誌以便調試
    return <ArticleComponent />;
  }
  
  // 如果文章存在但組件尚未實現，顯示開發中信息
  return (
    <div className="articleContentPage">
      <div className="articleHeader">
        <h1 className="articleTitle">404-施工中</h1>
        <p>這篇文章正在小編的手中潤稿，請稍後再訪問。</p>
      </div>
    </div>
  );
};

export default ArticleRouter;