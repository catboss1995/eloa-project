import React from 'react';
import '../styles/article.scss';

// 導入所有文章相關組件
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleIntro from '../components/article/ArticleIntro';
import ArticleSection from '../components/article/ArticleSection';
import ArticleImageSection from '../components/article/ArticleImageSection';
import ArticleStep from '../components/article/ArticleStep';
import ArticleStepFlow from '../components/article/ArticleStepFlow';
import ArticleDivider from '../components/article/ArticleDivider';
import ArticleTips from '../components/article/ArticleTips';
import ArticleImageGrid from '../components/article/ArticleImageGrid';
import ArticleConclusion from '../components/article/ArticleConclusion';
import ArticleFooter from '../components/article/ArticleFooter';

/**
 * 文章頁面組件
 * 展示完整的文章內容，包含頭部、簡介、內容區塊、步驟、提示、結論和底部
 */
const ArticlePage = () => {
  // 模擬文章數據
  const articleData = {
    title: '每天洗臉的正確步驟與錯誤解析',
    category: '臉部清潔',
    author: {
      name: '林美妍',
      image: '/images/author.jpg'
    },
    publishDate: '2025-08-20',
    intro: '洗臉是每天護膚的第一步，也是最重要的一步。正確的洗臉方式能幫助肌膚保持健康狀態，而錯誤的洗臉習慣則可能導致各種肌膚問題。今天我們將深入解析正確的洗臉步驟，以及常見的洗臉誤區。',
    relatedArticles: [
      { id: 1, slug: 'skincare-basics', title: '護膚基礎知識：認識你的肌膚類型' },
      { id: 2, slug: 'cleansing-products', title: '如何選擇適合自己的洗面乳' },
      { id: 3, slug: 'morning-skincare', title: '早晨護膚的正確順序與重點' }
    ]
  };

  // 洗臉步驟數據
  const washingSteps = [
    {
      number: 1,
      title: '清潔雙手',
      description: '在洗臉前，先用肥皂徹底清潔雙手，避免將手上的細菌帶到臉部肌膚。',
      image: '/images/clean-hands.jpg'
    },
    {
      number: 2,
      title: '溫水潤濕',
      description: '使用溫水（約30-35°C）潤濕臉部，水溫過高會破壞肌膚屏障，過低則無法有效清潔。',
      image: '/images/warm-water.jpg'
    },
    {
      number: 3,
      title: '適量潔面產品',
      description: '取約一元硬幣大小的潔面產品於掌心，加少量水輕揉起泡。泡沫越豐富，清潔越溫和。',
      image: '/images/cleansing-foam.jpg'
    },
    {
      number: 4,
      title: '輕柔按摩',
      description: '用指腹輕柔畫圓按摩全臉，重點在T區和U區，時間控制在60秒左右，過長會刺激肌膚。',
      image: '/images/face-massage.jpg'
    },
    {
      number: 5,
      title: '徹底沖洗',
      description: '用清水徹底沖洗乾淨，確保沒有殘留的潔面產品，殘留物會導致肌膚敏感和粗糙。',
      image: '/images/rinse-face.jpg'
    }
  ];

  // 洗臉誤區數據
  const washingMistakes = [
    {
      title: '水溫過高',
      description: '熱水會破壞肌膚表面的保護層，導致水分流失和敏感問題。'
    },
    {
      title: '過度清潔',
      description: '一天洗臉超過3次或每次洗臉時間過長，會破壞肌膚的酸鹼平衡。'
    },
    {
      title: '使用肥皂洗臉',
      description: '普通肥皂鹼性過高，會破壞肌膚的酸鹼平衡，導致乾燥和敏感。'
    },
    {
      title: '毛巾太粗糙',
      description: '粗糙的毛巾會對肌膚造成物理性傷害，應選擇柔軟的純棉毛巾。'
    }
  ];

  // 圖片網格數據
  const gridImages = [
    {
      src: '/images/cleansing-foam.jpg',
      alt: '潔面產品',
      caption: '選擇適合膚質的潔面產品',
      rounded: true
    },
    {
      src: '/images/face-washing.jpg',
      alt: '洗臉過程',
      caption: '正確的洗臉姿勢',
      square: true
    },
    {
      src: '/images/towel.jpg',
      alt: '柔軟毛巾',
      caption: '使用柔軟的純棉毛巾',
      rounded: true
    },
    {
      src: '/images/skincare.jpg',
      alt: '後續護膚',
      caption: '洗臉後立即進行保濕',
      square: true
    }
  ];

  // 結論段落
  const conclusionParagraphs = [
    '正確的洗臉方式是所有護膚步驟的基礎。溫和清潔、適當按摩、徹底沖洗，這些看似簡單的步驟實際上對肌膚健康至關重要。',
    '記住，洗臉的目的是清除髒污和多餘油脂，同時保留肌膚所需的天然保護層。過度清潔和使用不適合的產品都可能適得其反。',
    '根據自己的膚質選擇合適的潔面產品，並堅持正確的洗臉步驟，你的肌膚將會越來越健康透亮。'
  ];

  return (
    <div className="articleContainer">
      {/* 文章頭部 */}
      <ArticleHeader 
        title={articleData.title}
        author={articleData.author}
        publishDate={articleData.publishDate}
        category={articleData.category}
      />
      
      {/* 文章簡介 */}
      <ArticleIntro>
        {articleData.intro}
      </ArticleIntro>
      
      {/* 圖文並茂的內容區塊 */}
      <ArticleImageSection 
        title="洗臉的重要性"
        image="/images/face-washing-importance.jpg"
        imageAlt="女性洗臉"
        imageOnRight={true}
      >
        <p>
          洗臉是日常護膚的第一步，也是最基礎的一步。正確的洗臉能夠清除臉部的污垢、多餘油脂和老廢角質，
          讓肌膚保持清爽健康，同時為後續護膚品的吸收創造良好條件。
        </p>
        <p>
          研究表明，不正確的洗臉方式是導致多種肌膚問題的主要原因之一，包括粉刺、黑頭、敏感和乾燥等。
          因此，掌握正確的洗臉方法對於維持肌膚健康至關重要。
        </p>
      </ArticleImageSection>
      
      {/* 分隔線 */}
      <ArticleDivider text="正確的洗臉步驟" />
      
      {/* 步驟流程 */}
      <ArticleStepFlow steps={washingSteps} />
      
      {/* 內容區塊帶問題框 */}
      <ArticleSection 
        title="洗臉頻率：多少才合適？"
        questionBox={{
          title: "你知道嗎？",
          content: "過度洗臉會破壞肌膚屏障，導致敏感和乾燥問題。大多數人每天洗臉2次（早晚各一次）是最理想的。"
        }}
      >
        洗臉頻率應根據個人膚質和生活環境來決定。一般來說，正常膚質和乾性膚質的人每天洗臉1-2次即可，
        而油性膚質或生活在污染嚴重環境中的人可能需要增加到2-3次。但無論哪種膚質，都不建議頻繁洗臉，
        以免破壞肌膚的自然保護屏障。
      </ArticleSection>
      
      {/* 圓形圖片內容區塊 */}
      <ArticleImageSection 
        title="選擇合適的潔面產品"
        image="/images/cleansing-products.jpg"
        imageAlt="各種潔面產品"
        imageOnRight={false}
        roundImage={true}
      >
        <p>
          市面上的潔面產品種類繁多，如何選擇適合自己的產品至關重要。乾性和敏感肌膚應選擇溫和無刺激的氨基酸潔面產品；
          油性和混合性肌膚可選擇控油效果好的凝膠或泡沫型潔面產品；中性肌膚則可選擇溫和的泡沫型潔面產品。
        </p>
        <p>
          無論選擇哪種產品，都應避免含有酒精、香料和色素等刺激性成分，這些成分可能導致肌膚敏感和乾燥。
        </p>
      </ArticleImageSection>
      
      {/* 分隔線 */}
      <ArticleDivider text="常見洗臉誤區" />
      
      {/* 提示集合 */}
      <ArticleTips title="常見的洗臉誤區" tips={washingMistakes} />
      
      {/* 圖片網格 */}
      <ArticleImageGrid images={gridImages} />
      
      {/* 結論 */}
      <ArticleConclusion 
        title="總結：健康肌膚從正確洗臉開始"
        paragraphs={conclusionParagraphs}
      />
      
      {/* 文章底部 */}
      <ArticleFooter relatedArticles={articleData.relatedArticles} />
    </div>
  );
};

export default ArticlePage;