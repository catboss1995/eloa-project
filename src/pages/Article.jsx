import React from 'react';
// 引入 SCSS 樣式
import "../scss/styleAcademy.scss";
const Article = () => {
  const articles = [
    {
      id: 1,
      title: "敏感肌必看：日常護理與產品挑選指南",
      description:
        "敏感肌膚容易泛紅、刺痛、乾癢，遇到換季、空氣污染或保養品成分不合時，狀況更明顯。只要掌握正確的護理原則與產品選擇，敏感肌也能穩定健康！",
      imgUrl:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
      reverse: false,
    },
    {
      id: 2,
      title: "每天洗臉的正確步驟與常見錯誤解析",
      description:
        "洗臉是日常保養中最基礎的一步，但你真的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！",
      imgUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
      reverse: true,
    },
  ];

  const researchArticles = [
    {
      id: 5,
      title: "保濕大解析：為什麼您的臉總是乾？",
      description:
        "你是不是常覺得明明有擦保濕產品，肌膚還是乾燥、脫皮？保濕不只是塗抹乳液這麼簡單！深入了解保濕三大關鍵與日常陷阱，教你選對產品，讓肌膚水潤透亮。",
      imgUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
      reverse: false,
    },
    {
      id: 6,
      title: "油水平衡：找出肌膚問題的關鍵",
      description:
        "你的肌膚是乾性、油性、混合型還是敏感？了解自己的膚質類型是護膚的第一步。本文深入解析不同膚質的特點與需求，幫助你找到最適合的保養方法。",
      imgUrl:
        "https://images.unsplash.com/photo-1588979355313-6711a3eddf7b?auto=format&fit=crop&w=600&q=80",
      reverse: true,
    },
  ];
  return (
    <div className="acadPage">
      {/* 主視覺區塊 */}
      <section className="hero">
        <div className="leftText">變美的開始</div>
        <div className="rightText">從理解肌膚開始。</div>
        <div className="centerBox">
          <h2 className="mainTitle">肌膚知識學苑</h2>
          <p className="subTitle">Your Skin Intelligence Space</p>
        </div>
        <div className="navWrap">
          <div className="navBtn searchBtn">
            <span className="searchIcon">⌕</span>
            <span>關鍵字搜尋</span>
          </div>
          <div className="navBtn">膚質類型介紹</div>
          <div className="navBtn">美容儀使用知識</div>
          <div className="navBtn">教學影片</div>
          <div className="navBtn">專家專欄</div>
        </div>
      </section>

      {/* 保養科學堂 */}
      <section className="contentSec">
        <h3 className="secTitle">保養科學堂</h3>
        
        <div className="articleList">
          {articles.map((article, index) => (
            <div key={article.id} className={`articleCard ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="cardText">
                <h4 className="cardTitle">{article.title}</h4>
                <p className="cardDesc">{article.description}</p>
                <button className="readBtn">閱讀更多</button>
              </div>
              <div className="cardImg" style={{backgroundImage: `url(${article.imgUrl})`}}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 模式教學室 */}
      <section className="contentSec beigeBg">
        <h3 className="secTitle">模式教學室</h3>
        
        <div className="articleList">
          {researchArticles.map((article, index) => (
            <div key={article.id} className={`articleCard ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="cardText">
                <h4 className="cardTitle">{article.title}</h4>
                <p className="cardDesc">{article.description}</p>
                <button className="readBtn">閱讀更多</button>
              </div>
              <div className="cardImg" style={{backgroundImage: `url(${article.imgUrl})`}}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 問題肌研究所 */}
      <section className="contentSec">
        <h3 className="secTitle">問題肌研究所</h3>
        
        <div className="articleList">
          {articles.map((article, index) => (
            <div key={article.id} className={`articleCard ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="cardText">
                <h4 className="cardTitle">{article.title}</h4>
                <p className="cardDesc">{article.description}</p>
                <button className="readBtn">閱讀更多</button>
              </div>
              <div className="cardImg" style={{backgroundImage: `url(${article.imgUrl})`}}></div>
            </div>
          ))}
        </div>
      </section>
      {/* 問題肌研究所 */}
      <section className="contentSec beigeBg">
        <h3 className="secTitle">問題肌研究所</h3>
        
        <div className="articleList">
          {researchArticles.map((article, index) => (
            <div key={article.id} className={`articleCard ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="cardText">
                <h4 className="cardTitle">{article.title}</h4>
                <p className="cardDesc">{article.description}</p>
                <button className="readBtn">閱讀更多</button>
              </div>
              <div className="cardImg" style={{backgroundImage: `url(${article.imgUrl})`}}></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Article;