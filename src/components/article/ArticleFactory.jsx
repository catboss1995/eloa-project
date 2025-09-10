/**
 * 文章組件工廠
 * 提供快速創建標準化文章組件的工具函數
 * 減少重複程式碼，提高開發效率
 */

import React from 'react';
import ArticleBase from './ArticleBase';
import ArticleIntro from './ArticleIntro';
import ArticleSection from './ArticleSection';
import ArticleImageSection from './ArticleImageSection';
import ArticleStepFlow from './ArticleStepFlow';
import ArticleDivider from './ArticleDivider';
import ArticleTips from './ArticleTips';
import ArticleImageGrid from './ArticleImageGrid';
import ArticleConclusion from './ArticleConclusion';
import { useArticleData, useArticleSEO } from '../../hooks/useArticle';

/**
 * 標準文章組件工廠
 * 根據文章資料和內容配置生成標準化的文章頁面
 * 
 * @param {Object} config 文章配置
 * @param {string} config.slug 文章 slug
 * @param {Array} [config.sections=[]] 文章段落配置
 * @param {Array} [config.steps=[]] 步驟配置
 * @param {Array} [config.tips=[]] 提示配置
 * @param {Array} [config.images=[]] 圖片網格配置
 * @param {string} [config.heroImage] 主視覺圖片
 * @param {Array} [config.conclusion=[]] 結論段落
 * @returns {Function} React 組件
 */
export const createStandardArticle = (config) => {
  const {
    slug,
    sections = [],
    steps = [],
    tips = [],
    images = [],
    heroImage,
    conclusion = []
  } = config;

  return function StandardArticle() {
    // 使用 Hook 獲取文章資料
    const { articleData, relatedArticles, isLoading, error } = useArticleData(slug);
    
    // 設定 SEO
    useArticleSEO(articleData);

    // 載入狀態
    if (isLoading) {
      return <div className="article-loading">載入中...</div>;
    }

    // 錯誤狀態
    if (error || !articleData) {
      return <div className="article-error">{error || '文章不存在'}</div>;
    }

    return (
      <ArticleBase
        title={articleData.title}
        category={articleData.category}
        publishDate={articleData.publishDate}
        author={articleData.author}
        heroImage={heroImage}
        relatedArticles={relatedArticles}
      >
        {/* 文章簡介 */}
        <ArticleIntro>
          {articleData.description}
        </ArticleIntro>
        
        {/* 動態渲染段落 */}
        {sections.map((section, index) => 
          renderSection(section, `section-${index}`)
        )}
        
        {/* 步驟流程 */}
        {steps.length > 0 && (
          <>
            <ArticleDivider text="操作步驟" />
            <ArticleStepFlow steps={steps} />
          </>
        )}
        
        {/* 提示區塊 */}
        {tips.length > 0 && (
          <ArticleTips title="重要提示" tips={tips} />
        )}
        
        {/* 圖片網格 */}
        {images.length > 0 && (
          <ArticleImageGrid images={images} />
        )}
        
        {/* 結論 */}
        {conclusion.length > 0 && (
          <ArticleConclusion 
            title="總結"
            paragraphs={conclusion}
          />
        )}
      </ArticleBase>
    );
  };
};

/**
 * 渲染段落組件
 * 根據段落類型渲染對應的組件
 * 
 * @param {Object} section 段落配置
 * @param {string} key React key
 * @returns {JSX.Element} 段落組件
 */
function renderSection(section, key) {
  const { type, ...props } = section;
  
  switch (type) {
    case 'text':
      return <ArticleSection key={key} {...props} />;
    
    case 'image':
      return <ArticleImageSection key={key} {...props} />;
    
    case 'divider':
      return <ArticleDivider key={key} {...props} />;
    
    case 'tips':
      return <ArticleTips key={key} {...props} />;
    
    case 'steps':
      return <ArticleStepFlow key={key} {...props} />;
    
    case 'images':
      return <ArticleImageGrid key={key} {...props} />;
    
    default:
      console.warn(`未知的段落類型: ${type}`);
      return null;
  }
}

/**
 * 快速創建簡單文章的工具函數
 * 適用於只有文字內容的簡單文章
 * 
 * @param {string} slug 文章 slug
 * @param {Array} paragraphs 段落陣列
 * @param {string} [heroImage] 主視覺圖片
 * @returns {Function} React 組件
 */
export const createSimpleArticle = (slug, paragraphs = [], heroImage = null) => {
  return createStandardArticle({
    slug,
    heroImage,
    sections: paragraphs.map((paragraph) => ({
      type: 'text',
      title: paragraph.title,
      children: paragraph.content,
      questionBox: paragraph.questionBox
    }))
  });
};

/**
 * 快速創建教學文章的工具函數
 * 適用於包含步驟說明的教學類文章
 * 
 * @param {string} slug 文章 slug
 * @param {Array} steps 步驟陣列
 * @param {Array} [tips=[]] 提示陣列
 * @param {string} [heroImage] 主視覺圖片
 * @returns {Function} React 組件
 */
export const createTutorialArticle = (slug, steps = [], tips = [], heroImage = null) => {
  return createStandardArticle({
    slug,
    heroImage,
    steps,
    tips
  });
};

/**
 * 快速創建產品介紹文章的工具函數
 * 適用於產品說明或評測類文章
 * 
 * @param {string} slug 文章 slug
 * @param {Array} images 產品圖片陣列
 * @param {Array} features 產品特色陣列
 * @param {string} [heroImage] 主視覺圖片
 * @returns {Function} React 組件
 */
export const createProductArticle = (slug, images = [], features = [], heroImage = null) => {
  return createStandardArticle({
    slug,
    heroImage,
    images,
    tips: features
  });
};

/**
 * 文章模板配置
 * 預定義的常用文章結構模板
 */
export const ARTICLE_TEMPLATES = {
  // 基礎文章模板
  BASIC: {
    sections: [
      { type: 'text', title: '前言' },
      { type: 'divider', text: '主要內容' },
      { type: 'text', title: '內容說明' }
    ]
  },
  
  // 教學文章模板
  TUTORIAL: {
    sections: [
      { type: 'text', title: '教學簡介' },
      { type: 'divider', text: '準備工作' },
      { type: 'tips', title: '注意事項' },
      { type: 'divider', text: '操作步驟' },
      { type: 'steps' }
    ]
  },
  
  // 評測文章模板
  REVIEW: {
    sections: [
      { type: 'text', title: '產品介紹' },
      { type: 'image', title: '產品外觀' },
      { type: 'divider', text: '使用體驗' },
      { type: 'tips', title: '優缺點分析' },
      { type: 'images' }
    ]
  }
};

/**
 * 使用模板創建文章
 * 基於預定義模板快速創建文章
 * 
 * @param {string} slug 文章 slug
 * @param {string} template 模板名稱
 * @param {Object} customConfig 自定義配置
 * @returns {Function} React 組件
 */
export const createArticleFromTemplate = (slug, template, customConfig = {}) => {
  let templateConfig = ARTICLE_TEMPLATES[template];
  
  if (!templateConfig) {
    console.warn(`模板 "${template}" 不存在，使用基礎模板`);
    templateConfig = ARTICLE_TEMPLATES.BASIC;
  }
  
  return createStandardArticle({
    slug,
    ...templateConfig,
    ...customConfig
  });
};
