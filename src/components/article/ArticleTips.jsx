import React from 'react';
import { CSS_CLASSES, DEFAULT_PROPS } from '../../config/articleConfig';

/**
 * 文章提示卡片組件 - 重構版本
 * 顯示一組提示信息，每個提示包含標題和描述
 * 使用統一的配置來提高程式碼一致性
 * 
 * @param {Object} props 組件屬性
 * @param {string} [props.title] 提示區塊標題
 * @param {Array} props.tips 提示陣列
 * @param {string} [props.className] 額外的 CSS 類名
 * @param {boolean} [props.showNumbers=true] 是否顯示編號
 * @returns {JSX.Element} 提示卡片組件
 */
const ArticleTips = ({ 
  title = DEFAULT_PROPS.TIPS.title,
  tips = DEFAULT_PROPS.TIPS.tips,
  className = '',
  showNumbers = true
}) => {
  // 提示項目組件
  const TipItem = ({ tip, index }) => (
    <div className={`${CSS_CLASSES.TIP_ITEM} ${tip.type || ''}`}>
      {showNumbers && (
        <span className={CSS_CLASSES.TIP_NUMBER}>
          {tip.number || index + 1}
        </span>
      )}
      <div className={CSS_CLASSES.TIP_CONTENT}>
        <h3 className={CSS_CLASSES.TIP_TITLE}>{tip.title}</h3>
        <p className={CSS_CLASSES.TIP_DESC}>{tip.description}</p>
        {tip.note && (
          <small className="tipNote">{tip.note}</small>
        )}
      </div>
    </div>
  );

  // 如果沒有提示，顯示空狀態
  if (!tips || tips.length === 0) {
    return (
      <div className={`tipsContainer empty ${className}`}>
        {title && <h3 className="tipsTitle">{title}</h3>}
        <p>暫無提示內容</p>
      </div>
    );
  }

  return (
    <div className={`tipsContainer ${className}`}>
      {title && <h3 className="tipsTitle">{title}</h3>}
      
      <div className="tipsContent">
        {tips.map((tip, index) => (
          <TipItem 
            key={tip.id || index} 
            tip={tip} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleTips;