import React from 'react';

/**
 * ArticleImageSection 組件
 * 用於顯示帶有圖片的文章內容區塊，可以設置圖片位置和形狀
 * 設計風格接近附圖中的圓角圖片和文字交錯排列
 * 
 * @param {Object} props 組件屬性
 * @param {string} props.title 區塊標題
 * @param {React.ReactNode} props.children 區塊內容，通常是文字段落
 * @param {string} props.image 圖片URL
 * @param {string} props.imageAlt 圖片替代文字
 * @param {boolean} [props.imageOnRight=true] 圖片是否在右側，默認為true
 * @param {boolean} [props.roundImage=false] 是否使用圓形圖片，默認為false
 * @returns {JSX.Element} 帶圖片的文章區塊組件
 */
const ArticleImageSection = ({ 
  title, 
  children, 
  image, 
  imageAlt, 
  imageOnRight = true, 
  roundImage = false 
}) => {
  return (
    <section className={`contentSection withImage`}>
      {/* 文字內容區域 */}
      <div className="sectionText">
        <h2 className="sectionTitle">{title}</h2>
        <div className="sectionDesc">{children}</div>
      </div>
      
      {/* 圖片區域 */}
      <div className={`sectionImage ${roundImage ? 'roundImage' : ''}`}>
        <img src={image} alt={imageAlt || title} />
      </div>
    </section>
  );
};

export default ArticleImageSection;