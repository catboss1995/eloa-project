import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FaceWashingSteps from './FaceWashingSteps';
import SensitiveSkinGuide from './SensitiveSkinGuide';
import ArticleNotFound from './ArticleNotFound';

// 文章路由管理組件
const ArticleRoutes = () => {
  return (
    <Routes>
      {/* 使用 slug 來匹配對應的文章頁面 */}
      <Route path="face-washing-steps" element={<FaceWashingSteps />} />
      <Route path="sensitive-skin-care-guide" element={<SensitiveSkinGuide />} />
      
      {/* 如果沒有匹配到任何文章，顯示文章未找到頁面 */}
      <Route path="*" element={<ArticleNotFound />} />
    </Routes>
  );
};

export default ArticleRoutes;