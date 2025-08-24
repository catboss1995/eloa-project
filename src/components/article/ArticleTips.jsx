import React from 'react';

/**
 * 文章提示卡片組件 - 完全重新設計以匹配參考圖片
 * 顯示一組提示信息，每個提示包含標題和描述
 */
const ArticleTips = ({ title, tips }) => {
  return (
    <div className="tipsContainer">
      {title && <h3 className="tipsTitle">{title}</h3>}
      
      <div className="tipsContent">
        {tips.map((tip, index) => (
          <div key={index} className="tipItem">
            <div className="tipNumber">{index + 1}</div>
            <div className="tipTitle">{tip.title}</div>
            <div className="tipDescription">{tip.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleTips;