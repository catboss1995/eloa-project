import React from 'react';

/**
 * 文章分隔線組件 - 完全重新設計以匹配參考圖片
 * 顯示一個帶有標題的垂直分隔線
 */
const ArticleDivider = ({ text }) => {
  return (
    <div className="articleDivider">
      {text && <h3 className="dividerText">{text}</h3>}
      <div className="dividerLine"></div>
    </div>
  );
};

export default ArticleDivider;