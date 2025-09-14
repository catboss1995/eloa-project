import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Article1 from './Article1';
import Article3 from './Article3';
import Article4 from './Article4';
import ArticleNotFound from './ArticleNotFound';
import Article2 from './Article2';

// 文章路由管理組件
const ArticleRoutes = () => {
  return (
    <Routes>
      {/* 使用 slug 來匹配對應的文章頁面 */}
      <Route path="sensitive-skin-care-guide" element={<Article1 />} />
      <Route path="face-washing-steps" element={<Article2 />} />
      <Route path="hydration-explained" element={<Article3 />} />
      <Route path="seasonal-skincare" element={<Article4 />} />
      
      {/* 如果沒有匹配到任何文章，顯示文章未找到頁面 */}
      <Route path="*" element={<ArticleNotFound />} />
    </Routes>
  );
};

export default ArticleRoutes;