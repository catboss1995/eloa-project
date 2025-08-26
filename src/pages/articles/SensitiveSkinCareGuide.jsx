import React from 'react';
import articlesData from '../../data/articlesData';

// 導入文章基礎模板和內容組件
import ArticleBase from '../../components/article/ArticleBase';
import ArticleIntro from '../../components/article/ArticleIntro';
import ArticleSection from '../../components/article/ArticleSection';
import ArticleImageSection from '../../components/article/ArticleImageSection';
import ArticleStepFlow from '../../components/article/ArticleStepFlow';
import ArticleDivider from '../../components/article/ArticleDivider';
import ArticleTips from '../../components/article/ArticleTips';
import ArticleImageGrid from '../../components/article/ArticleImageGrid';
import ArticleConclusion from '../../components/article/ArticleConclusion';

/**
 * 敏感肌膚護理指南文章
 * 使用更新後的組件和樣式，創建一個接近新設計圖的文章頁面
 */
const SensitiveSkinCareGuide = () => {
  // 從articlesData中獲取當前文章數據
  const articleData = articlesData.find(article => article.slug === "sensitive-skin-care-guide");
  
  // 獲取相關文章
  const relatedArticles = articlesData
    .filter(article => article.slug !== "sensitive-skin-care-guide") // 排除當前文章
    .slice(0, 3) // 只取3篇相關文章
    .map(article => ({
      id: article.id,
      slug: article.slug,
      title: article.title
    }));

  // 敏感肌膚特徵
  const sensitiveTraits = [
    {
      title: '容易發紅',
      description: '接觸熱水、摩擦或某些產品後，皮膚會迅速發紅並持續較長時間。'
    },
    {
      title: '刺痛感',
      description: '使用護膚品時經常感到刺痛或灼熱，特別是含有酒精、香料的產品。'
    },
    {
      title: '乾燥緊繃',
      description: '皮膚容易感到乾燥、緊繃，甚至出現細小的皮屑。'
    },
    {
      title: '對環境敏感',
      description: '溫度變化、空氣污染或紫外線暴露後容易出現不適反應。'
    }
  ];

  // 日常護理步驟 - 更新以匹配新的設計風格
  const careSteps = [
    {
      number: 1,
      title: '溫和清潔',
      description: '選擇無皂、低pH值的溫和潔面產品，用溫水（不要熱水）輕柔清洗，避免過度摩擦。清潔後輕輕拍乾，不要用力擦拭。',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 2,
      title: '保濕鎖水',
      description: '清潔後立即使用保濕產品，趁皮膚還有些濕潤時塗抹，能更好地鎖住水分。選擇含有神經醯胺、透明質酸等成分的產品。',
      image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 3,
      title: '防曬保護',
      description: '無論季節和天氣，每天都需要使用SPF30以上的物理防曬霜（含氧化鋅、二氧化鈦）。選擇專為敏感肌設計的無香料配方。',
      image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 4,
      title: '修復屏障',
      description: '定期使用含有神經醯胺、菸鹼醯胺、蘆薈等成分的修復產品，幫助強化皮膚屏障功能，提高抵抗外界刺激的能力。',
      image: 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  // 避免的成分
  const avoidIngredients = [
    {
      title: '酒精',
      description: '特別是變性酒精(SD Alcohol, Alcohol Denat)，會帶走皮膚表面的水分，破壞皮膚屏障。'
    },
    {
      title: '香料',
      description: '人工香料是敏感肌常見的刺激源，即使是標榜「天然香料」的產品也可能引起不適。'
    },
    {
      title: '高濃度果酸',
      description: 'AHA、BHA等酸類成分對敏感肌來說可能過於刺激，特別是高濃度或pH值過低的產品。'
    },
    {
      title: '精油',
      description: '許多精油雖有舒緩功效，但對敏感肌可能造成刺激，尤其是薄荷、肉桂、檸檬等。'
    }
  ];

  // 推薦成分
  const recommendedIngredients = [
    {
      src: 'https://images.pexels.com/photos/3621195/pexels-photo-3621195.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: '神經醯胺',
      caption: '神經醯胺：修復皮膚屏障',
      rounded: true
    },
    {
      src: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: '積雪草',
      caption: '積雪草：舒緩發炎',
      square: true
    },
    {
      src: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: '透明質酸',
      caption: '透明質酸：深層保濕',
      rounded: true
    },
    {
      src: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: '菸鹼醯胺',
      caption: '菸鹼醯胺：強化屏障',
      square: true
    }
  ];

  // 結論段落
  const conclusionParagraphs = [
    '敏感肌膚的護理需要耐心和細心。了解自己的肌膚需求，選擇合適的產品，堅持溫和護理原則，是敏感肌護理的關鍵。',
    '記住，簡單有時候是最好的。護膚步驟和產品不必複雜，找到適合自己的基礎產品並堅持使用，比頻繁嘗試新產品更有效。',
    '如果皮膚持續出現嚴重的敏感反應，建議諮詢皮膚科醫生，可能需要專業的診斷和治療方案。'
  ];

  // 主視覺圖片
  const heroImage = 'https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg';

  if (!articleData) {
    return <div>文章不存在</div>;
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
      
      {/* 什麼是敏感肌膚 - 使用圖文並茂的內容區塊 */}
      <ArticleImageSection 
        title="什麼是敏感肌膚？"
        image="https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg"
        imageAlt="敏感肌膚特徵"
        imageOnRight={true}
      >
        <p>
          敏感肌膚是指皮膚對外界刺激反應過度的一種狀態。這種肌膚類型的特點是皮膚屏障功能較弱，
          容易受到環境因素、化學物質、溫度變化等外界刺激的影響，從而產生發紅、刺痛、乾燥、脫皮等不適症狀。
        </p>
        <p>
          敏感肌膚可能是先天性的，也可能是後天因素如過度使用刺激性產品、環境污染、壓力等導致的。
          了解自己的肌膚狀況，採取適當的護理措施，可以有效改善敏感症狀。
        </p>
      </ArticleImageSection>
      
      {/* 敏感肌膚的常見特徵 */}
      <ArticleDivider text="敏感肌膚的常見特徵" />
      
      {/* 提示集合 - 使用更新後的提示卡片樣式 */}
      <ArticleTips title="如何識別敏感肌膚" tips={sensitiveTraits} />
      
      {/* 敏感肌膚的成因 - 使用帶問題框的內容區塊 */}
      <ArticleSection 
        title="敏感肌膚的成因"
        questionBox={{
          title: "你知道嗎？",
          content: "研究表明，約有50%的人認為自己有敏感肌膚，但實際上只有約15-20%的人真正符合敏感肌膚的臨床特徵。"
        }}
      >
        敏感肌膚的成因複雜多樣，可能包括基因因素、環境刺激、生活習慣等多方面。皮膚屏障功能受損是敏感肌膚的核心問題，
        當皮膚的角質層無法有效阻擋外界刺激物和鎖住水分時，敏感症狀就會出現。此外，皮膚微生物組失衡、免疫系統反應過度、
        神經末梢敏感度增高等因素也可能導致敏感肌膚。
      </ArticleSection>
      
      {/* 敏感肌膚日常護理步驟 */}
      <ArticleDivider text="敏感肌膚日常護理步驟" />
      
      {/* 步驟流程 - 使用新設計的步驟流程組件 */}
      <ArticleStepFlow steps={careSteps} />
      
      {/* 選擇合適的產品 - 使用圓形圖片的內容區塊 */}
      <ArticleImageSection 
        title="選擇合適的產品"
        image="https://images.pexels.com/photos/3737605/pexels-photo-3737605.jpeg"
        imageAlt="敏感肌膚護理產品"
        imageOnRight={false}
        roundImage={true}
      >
        <p>
          敏感肌膚應選擇專為敏感肌設計的護膚產品，這些產品通常標有「溫和」、「低敏感」、「無香料」等字樣。
          成分越簡單越好，避免含有過多的活性成分和潛在刺激物。
        </p>
        <p>
          在嘗試新產品時，建議先在手腕內側或耳後等不明顯的部位進行斑貼測試，觀察24-48小時，確認沒有不適反應後再用於面部。
          同時，避免同時使用多種新產品，以便在出現不適時能快速找出原因。
        </p>
      </ArticleImageSection>
      
      {/* 敏感肌膚的護理注意事項 */}
      <ArticleDivider text="敏感肌膚的護理注意事項" />
      
      {/* 提示集合 - 使用更新後的提示卡片樣式 */}
      <ArticleTips title="敏感肌應避免的成分" tips={avoidIngredients} />
      
      {/* 推薦成分 - 使用圖片網格 */}
      <ArticleImageGrid images={recommendedIngredients} />
      
      {/* 結論 - 使用更新後的結論組件 */}
      <ArticleConclusion 
        title="敏感肌護理的關鍵在於溫和與堅持"
        paragraphs={conclusionParagraphs}
      />
    </ArticleBase>
  );
};

export default SensitiveSkinCareGuide;