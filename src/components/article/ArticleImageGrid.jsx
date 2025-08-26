import React from 'react';

/**
 * 文章圖片網格組件 - 完全重新設計以匹配參考圖片
 * 顯示一組圖片，可以是圓形或方形，帶有說明文字
 */
const ArticleImageGrid = ({ images }) => {
  return (
    <div className="imageGrid">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`imageItem ${image.rounded ? 'rounded' : ''} ${image.square ? 'square' : ''}`}
        >
          <div className="imageWrapper">
            <img src={image.src} alt={image.alt} />
          </div>
          {image.caption && <div className="imageCaption">{image.caption}</div>}
        </div>
      ))}
    </div>
  );
};

export default ArticleImageGrid;