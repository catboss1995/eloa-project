import React from 'react';

/**
 * 文章步驟流程組件 - 完全重新設計以匹配參考圖片
 * 顯示一系列步驟，每個步驟包含編號、標題、描述和圖片
 */
const ArticleStepFlow = ({ steps }) => {
  return (
    <div className="stepFlow">
      {steps.map((step, index) => (
        <div key={index} className="stepItem">
          <div className="stepImage">
            <img src={step.image} alt={step.title} />
          </div>
          <div className="stepContent">
            <div className="stepNumber">{step.number}</div>
            <h3 className="stepTitle">{step.title}</h3>
            <p className="stepDescription">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleStepFlow;