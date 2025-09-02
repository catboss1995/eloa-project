import React from 'react';
import ArticleBase from '../../components/article/ArticleBase'; // 使用重構版的 ArticleBase
import ArticleIntro from '../../components/article/ArticleIntro';
import ArticleSection from '../../components/article/ArticleSection';
import ArticleDivider from '../../components/article/ArticleDivider';
import ArticleTips from '../../components/article/ArticleTips';
import ArticleConclusion from '../../components/article/ArticleConclusion';

// 使用確定可用的圖片URL
const heroImage = "https://ik.imagekit.io/8sle6rwoo/articlesPic01.png";

const TestArticle = () => {
  // 測試數據
  const testTips = [
    {
      title: "測試標題1",
      description: "這是測試描述內容，確認組件是否正常顯示。"
    },
    {
      title: "測試標題2",
      description: "這是另一個測試描述，檢查排版是否正確。"
    }
  ];

  // 測試結語段落
  const testParagraphs = [
    "這是測試結語的第一段文字，用於確認結語組件是否正常顯示。",
    "這是測試結語的第二段文字，檢查段落間距是否適當。"
  ];

  return (
    <ArticleBase
      title="測試文章標題"
      category="測試分類"
      publishDate="2025/08/23"
      author={{
        name: "測試作者",
        image: "https://placekitten.com/100/100"
      }}
      heroImage={heroImage}
      relatedArticles={[]}
    >
      {/* 文章簡介 */}
      <ArticleIntro>
        這是一篇測試文章，用於確認文章組件是否能正確顯示。如果您能看到這段文字，說明 ArticleIntro 組件運作正常。
      </ArticleIntro>

      {/* 測試段落 */}
      <ArticleSection
        title="測試段落標題"
        questionBox={{
          title: "測試問題框",
          content: "這是一個測試問題框，用於確認問題框組件是否正常顯示。"
        }}
      >
        這是測試段落的內容，用於確認 ArticleSection 組件是否正常顯示。如果您能看到這段文字，說明組件運作正常。
      </ArticleSection>

      {/* 分隔線 */}
      <ArticleDivider text="測試分隔線" />

      {/* 測試小貼士 */}
      <ArticleTips
        title="測試小貼士標題"
        tips={testTips}
      />

      {/* 測試結語 */}
      <ArticleConclusion
        title="測試結語標題"
        paragraphs={testParagraphs}
      />
    </ArticleBase>
  );
};

export default TestArticle;