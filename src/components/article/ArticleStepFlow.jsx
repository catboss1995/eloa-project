import React from 'react';
import { CSS_CLASSES, DEFAULT_PROPS } from '../../config/articleConfig';
import { useImageLoader } from '../../hooks/useArticle';

/**
 * 文章步驟流程組件 - 重構版本
 * 顯示一系列步驟，每個步驟包含編號、標題、描述和圖片
 * 使用統一的配置和 Hook 來提高程式碼品質
 * 
 * @param {Object} props 組件屬性
 * @param {Array} props.steps 步驟陣列
 * @param {string} [props.className] 額外的 CSS 類名
 * @returns {JSX.Element} 步驟流程組件
 */
const ArticleStepFlow = ({ 
  steps = DEFAULT_PROPS.STEP_FLOW.steps, 
  className = '' 
}) => {
  // 步驟項目組件
  const StepItem = ({ step, index }) => {
    const { imageSrc, isLoading } = useImageLoader(step.image);
    
    return (
      <div key={index} className={`stepItem ${step.reverse ? 'reverse' : ''}`}>
        <div className={CSS_CLASSES.STEP_NUMBER}>{step.number}</div>
        <div className={CSS_CLASSES.STEP_IMAGE_CONTAINER}>
          {isLoading ? (
            <div className="image-loading">載入中...</div>
          ) : (
            <img 
              src={imageSrc} 
              alt={step.title} 
              className={CSS_CLASSES.STEP_IMAGE}
              loading="lazy"
            />
          )}
        </div>
        <div className={CSS_CLASSES.STEP_CONTENT}>
          <h3 className={CSS_CLASSES.STEP_TITLE}>{step.title}</h3>
          <p className={CSS_CLASSES.STEP_DESC}>{step.description}</p>
        </div>
      </div>
    );
  };

  // 如果沒有步驟，顯示空狀態
  if (!steps || steps.length === 0) {
    return (
      <div className={`stepFlow empty ${className}`}>
        <p>暫無步驟內容</p>
      </div>
    );
  }

  return (
    <div className={`stepFlow ${className}`}>
      {steps.map((step, index) => (
        <StepItem key={step.id || index} step={step} index={index} />
      ))}
    </div>
  );
};

export default ArticleStepFlow;