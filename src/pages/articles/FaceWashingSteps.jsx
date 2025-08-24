import React from 'react';
import ArticleBase from './ArticleBase';
import ArticleIntro from '../../components/article/ArticleIntro';
import ArticleSection from '../../components/article/ArticleSection';
import ArticleDivider from '../../components/article/ArticleDivider';
import ArticleStep from '../../components/article/ArticleStep';
import ArticleTips from '../../components/article/ArticleTips';
import ArticleConclusion from '../../components/article/ArticleConclusion';
import articlesData from '../../data/articlesData';

// 使用確定可用的圖片URL
const heroImage = "https://ik.imagekit.io/8sle6rwoo/articlesPic02.png"; // 使用確定可用的圖片
const step1Image = "https://placekitten.com/800/500"; // 
const step2Image = "https://placekitten.com/801/500";
const step3Image = "https://placekitten.com/802/500";
const step4Image = "https://placekitten.com/803/500";
const step5Image = "https://placekitten.com/804/500";

const FaceWashingSteps = () => {
  // 獲取文章數據
  const articleData = articlesData.find(article => article.slug === "face-washing-steps");

  // 相關文章
  const relatedArticles = articlesData
    .filter(article =>
      article.slug !== "face-washing-steps" &&
      (article.category === "教學影片" ||
        article.keywords.some(keyword => ["保養", "敏感"].includes(keyword)))
    )
    .slice(0, 3);

  // 洗臉常見錯誤
  const washingTips = [
    {
      title: "水溫過高",
      description: "熱水會破壞肌膚表面的保護層，導致水分流失，加重乾燥和敏感問題。"
    },
    {
      title: "洗臉時間過長",
      description: "洗臉時間不宜超過2分鐘，過長的清潔時間會帶走肌膚必要的油脂。"
    },
    {
      title: "清潔產品選擇不當",
      description: "應根據自己的膚質選擇適合的潔面產品，乾性肌膚應選擇溫和保濕型，油性肌膚可選控油型。"
    },
    {
      title: "洗臉次數過多",
      description: "一般膚質每天洗臉2次即可，過度清潔反而會刺激肌膚，導致出油或乾燥加劇。"
    }
  ];

  // 結語段落
  const conclusionParagraphs = [
    "正確的洗臉方式是健康肌膚的第一步。透過遵循上述五個步驟，避免常見錯誤，你的肌膚將會越來越健康透亮。記住，洗臉不是越用力越好，而是要溫和且徹底，讓肌膚在清潔的同時也能保持水潤平衡。",
    "如果你有特殊膚質問題，建議諮詢專業皮膚科醫生，獲取更適合你的個人化建議。"
  ];

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
        洗臉是日常保養中最基礎的一步，但你真的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！
      </ArticleIntro>

      {/* 文章內容區塊 */}
      <ArticleSection
        title="洗臉是日常保養最基礎的一步"
        questionBox={{
          title: "你真的洗對了嗎？",
          content: "許多人認為洗臉只是簡單的用水沖一沖就好，但其實洗臉有正確的步驟和方法。錯誤的洗臉習慣可能會讓肌膚受損，導致乾燥、敏感或出油等問題。"
        }}
      >
        洗臉對於肌膚健康至關重要，它能清除臉部累積的污垢、多餘油脂和死皮細胞，讓肌膚保持清爽透亮。正確的洗臉方式不僅能有效清潔，還能為後續保養品的吸收打下良好基礎。
      </ArticleSection>

      {/* 分隔線 */}
      <ArticleDivider text="今天我們帶您了解正確洗臉的五大步驟" />

      {/* 洗臉步驟 */}
      <div className="stepsSection">
        <ArticleStep
          number={1}
          title="洗手並取適量潔面產品"
          description="洗臉前一定要先洗手！取約一元硬幣大小的潔面產品，不要過多以免清洗不乾淨。"
          image={step1Image}
        />

        <ArticleStep
          number={2}
          title="輕柔按摩臉部"
          description="用指腹輕輕打圈按摩全臉30-60秒，特別注意T字部位和容易出油的區域，但不要用力搓揉。"
          image={step2Image}
          reverse={true}
        />

        <ArticleStep
          number={3}
          title="加強按摩重點區域"
          description="鼻翼兩側、下巴等容易堆積角質的區域可以多按摩幾秒，但記得動作要輕柔，避免刺激肌膚。"
          image={step3Image}
        />

        <ArticleStep
          number={4}
          title="用溫水徹底沖洗"
          description="水溫保持在30-35度左右，過熱或過冷的水都會刺激肌膚。沖洗至少20次，確保沒有殘留物。"
          image={step4Image}
          reverse={true}
        />

        <ArticleStep
          number={5}
          title="用毛巾輕拍吸乾"
          description="選用柔軟的毛巾，輕輕按壓臉部吸乾水分，不要用力擦拭。洗臉後應立即進行後續保養。"
          image={step5Image}
        />
      </div>

      {/* 洗臉常見錯誤 */}
      <ArticleTips
        title="洗臉常見錯誤"
        tips={washingTips}
      />

      {/* 結語 */}
      <ArticleConclusion
        title="結語"
        paragraphs={conclusionParagraphs}
      />
    </ArticleBase>
  );
};

export default FaceWashingSteps;