import React from 'react';
// 引入 SCSS 樣式
import "../scss/styleArticleContent.scss";

// 使用 CDN URL 替代本地圖片路徑
const heroImage = "https://ik.imagekit.io/8sle6rwoo/article-hero.jpg";
const authorImage = "https://ik.imagekit.io/8sle6rwoo/author.jpg";
const step1Image = "https://ik.imagekit.io/8sle6rwoo/washing-foam.jpg";
const step2Image = "https://ik.imagekit.io/8sle6rwoo/washing-hand.jpg";
const step3Image = "https://ik.imagekit.io/8sle6rwoo/face-massage.jpg";
const step4Image = "https://ik.imagekit.io/8sle6rwoo/washing-water.jpg";
const step5Image = "https://ik.imagekit.io/8sle6rwoo/face-towel.jpg";

const ArticleContent = () => {
  // 文章發布日期
  const publishDate = "2025/07/15";
  
  // 相關文章
  const relatedArticles = [
    {
      id: 1,
      title: "敏感肌必看：日常護理與產品挑選指南",
      link: "#"
    },
    {
      id: 2,
      title: "保濕大解析：為什麼您的臉總是乾？",
      link: "#"
    },
    {
      id: 3,
      title: "換季保養：秋冬、春夏肌膚護理重點一次看懂",
      link: "#"
    }
  ];

  return (
    <div className="articleContentPage">
      {/* 頂部導航 */}
      <div className="breadcrumb">
        <a href="#" className="breadcrumbLink">肌膚知識學苑</a>
        <span className="separator">/</span>
        <a href="#" className="breadcrumbLink">教學影片</a>
        <span className="separator">/</span>
        <span className="currentPage">每天洗臉的正確步驟與常見錯誤解析</span>
      </div>

      {/* 文章標題區 */}
      <div className="articleHeader">
        <h1 className="articleTitle">每天洗臉的正確步驟與常見錯誤解析</h1>
        <div className="articleMeta">
          <div className="authorInfo">
            <img src={authorImage} alt="作者照片" className="authorImage" />
            <div className="authorDetails">
              <span className="authorName">專業美容師 林美玲</span>
              <span className="publishDate">發布於 {publishDate}</span>
            </div>
          </div>
          <div className="shareButtons">
            <button className="shareBtn">分享</button>
            <button className="saveBtn">收藏</button>
          </div>
        </div>
      </div>

      {/* 主視覺圖片 */}
      <div className="heroImageContainer">
        <img src={heroImage} alt="洗臉步驟主視覺" className="heroImage" />
      </div>

      {/* 文章簡介 */}
      <div className="articleIntro">
        <p>洗臉是日常保養中最基礎的一步，但你真的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！</p>
      </div>

      {/* 文章內容 */}
      <div className="articleContent">
        <section className="contentSection">
          <div className="sectionText">
            <h2 className="sectionTitle">洗臉是日常保養最基礎的一步</h2>
            <p className="sectionDesc">洗臉對於肌膚健康至關重要，它能清除臉部累積的污垢、多餘油脂和死皮細胞，讓肌膚保持清爽透亮。正確的洗臉方式不僅能有效清潔，還能為後續保養品的吸收打下良好基礎。</p>
          </div>
          <div className="questionBox">
            <h3 className="questionTitle">你真的洗對了嗎？</h3>
            <p className="questionDesc">許多人認為洗臉只是簡單的用水沖一沖就好，但其實洗臉有正確的步驟和方法。錯誤的洗臉習慣可能會讓肌膚受損，導致乾燥、敏感或出油等問題。</p>
          </div>
        </section>

        <div className="divider">
          <span className="dividerText">今天我們帶您了解正確洗臉的五大步驟</span>
        </div>

        <section className="stepsSection">
          <div className="stepCard">
            <div className="stepNumber">1</div>
            <div className="stepImageContainer">
              <img src={step1Image} alt="步驟一：洗手並取適量潔面產品" className="stepImage" />
            </div>
            <div className="stepContent">
              <h3 className="stepTitle">洗手並取適量潔面產品</h3>
              <p className="stepDesc">洗臉前一定要先洗手！取約一元硬幣大小的潔面產品，不要過多以免清洗不乾淨。</p>
            </div>
          </div>

          <div className="stepCard reverse">
            <div className="stepNumber">2</div>
            <div className="stepImageContainer">
              <img src={step2Image} alt="步驟二：輕柔按摩臉部" className="stepImage" />
            </div>
            <div className="stepContent">
              <h3 className="stepTitle">輕柔按摩臉部</h3>
              <p className="stepDesc">用指腹輕輕打圈按摩全臉30-60秒，特別注意T字部位和容易出油的區域，但不要用力搓揉。</p>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepNumber">3</div>
            <div className="stepImageContainer">
              <img src={step3Image} alt="步驟三：加強按摩重點區域" className="stepImage" />
            </div>
            <div className="stepContent">
              <h3 className="stepTitle">加強按摩重點區域</h3>
              <p className="stepDesc">鼻翼兩側、下巴等容易堆積角質的區域可以多按摩幾秒，但記得動作要輕柔，避免刺激肌膚。</p>
            </div>
          </div>

          <div className="stepCard reverse">
            <div className="stepNumber">4</div>
            <div className="stepImageContainer">
              <img src={step4Image} alt="步驟四：用溫水徹底沖洗" className="stepImage" />
            </div>
            <div className="stepContent">
              <h3 className="stepTitle">用溫水徹底沖洗</h3>
              <p className="stepDesc">水溫保持在30-35度左右，過熱或過冷的水都會刺激肌膚。沖洗至少20次，確保沒有殘留物。</p>
            </div>
          </div>

          <div className="stepCard">
            <div className="stepNumber">5</div>
            <div className="stepImageContainer">
              <img src={step5Image} alt="步驟五：用毛巾輕拍吸乾" className="stepImage" />
            </div>
            <div className="stepContent">
              <h3 className="stepTitle">用毛巾輕拍吸乾</h3>
              <p className="stepDesc">選用柔軟的毛巾，輕輕按壓臉部吸乾水分，不要用力擦拭。洗臉後應立即進行後續保養。</p>
            </div>
          </div>
        </section>

        <section className="tipsSection">
          <h2 className="tipsTitle">洗臉常見錯誤</h2>
          <div className="tipsList">
            <div className="tipItem">
              <span className="tipNumber">1</span>
              <div className="tipContent">
                <h3 className="tipTitle">水溫過高</h3>
                <p className="tipDesc">熱水會破壞肌膚表面的保護層，導致水分流失，加重乾燥和敏感問題。</p>
              </div>
            </div>
            <div className="tipItem">
              <span className="tipNumber">2</span>
              <div className="tipContent">
                <h3 className="tipTitle">洗臉時間過長</h3>
                <p className="tipDesc">洗臉時間不宜超過2分鐘，過長的清潔時間會帶走肌膚必要的油脂。</p>
              </div>
            </div>
            <div className="tipItem">
              <span className="tipNumber">3</span>
              <div className="tipContent">
                <h3 className="tipTitle">清潔產品選擇不當</h3>
                <p className="tipDesc">應根據自己的膚質選擇適合的潔面產品，乾性肌膚應選擇溫和保濕型，油性肌膚可選控油型。</p>
              </div>
            </div>
            <div className="tipItem">
              <span className="tipNumber">4</span>
              <div className="tipContent">
                <h3 className="tipTitle">洗臉次數過多</h3>
                <p className="tipDesc">一般膚質每天洗臉2次即可，過度清潔反而會刺激肌膚，導致出油或乾燥加劇。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="conclusionSection">
          <h2 className="conclusionTitle">結語</h2>
          <p className="conclusionText">正確的洗臉方式是健康肌膚的第一步。透過遵循上述五個步驟，避免常見錯誤，你的肌膚將會越來越健康透亮。記住，洗臉不是越用力越好，而是要溫和且徹底，讓肌膚在清潔的同時也能保持水潤平衡。</p>
          <p className="conclusionText">如果你有特殊膚質問題，建議諮詢專業皮膚科醫生，獲取更適合你的個人化建議。</p>
        </section>
      </div>

      {/* 相關文章 */}
      <div className="relatedArticles">
        <h2 className="relatedTitle">相關文章推薦</h2>
        <div className="relatedList">
          {relatedArticles.map(article => (
            <a key={article.id} href={article.link} className="relatedItem">
              <span className="relatedDot"></span>
              <span className="relatedText">{article.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 返回按鈕 */}
      <div className="backButtonContainer">
        <a href="#" className="backButton">
          <span className="backArrow">←</span>
          <span className="backText">返回文章列表</span>
        </a>
      </div>

      {/* 底部裝飾 */}
      <div className="bottomDecoration"></div>
    </div>
  );
};

export default ArticleContent;