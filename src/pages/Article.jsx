import React from 'react';
// 引入 SCSS 樣式
import "../scss/styleAcademy.scss";
// 方法二：ES6 import (Vite/Webpack 支援)
import articlesPic01 from '../assets/images/articlesPic01.png';
import articlesPic02 from '../assets/images/articlesPic02.png';
import articlesPic03 from '../assets/images/articlesPic03.png';
import articlesPic04 from '../assets/images/articlesPic04.png';
import articlesPic05 from '../assets/images/articlesPic05.png';
import articlesPic06 from '../assets/images/articlesPic06.png';


const Article = () => {
  const articles = [
    {
      id: 1,
      title: "敏感肌必看：日常護理與產品挑選指南",
      description:
        "敏感肌膚容易泛紅、刺痛、乾癢，遇到換季、空氣污染或保養品成分不合時，狀況更明顯。只要掌握正確的護理原則與產品選擇，敏感肌也能穩定健康！",
      imgUrl: articlesPic01,
      reverse: false,
    },
    {
      id: 2,
      title: "每天洗臉的正確步驟與常見錯誤解析",
      description:
        "洗臉是日常保養中最基礎的一步，但你真的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！",
      imgUrl: articlesPic02,
      reverse: true,
    },
  ];

  const articles02 = [
    {
      id: 3,
      title: "美容儀器怎麼選？不同膚質適合的家用美容儀推薦",
      description:
        "現代人對肌膚保養越來越講究，家用美容儀成為許多人日常保養的好幫手。但市面上美容儀百百款，該如何根據自己的膚質挑選適合的產品？本篇將從膚質分類、美容儀種類、選購重點到正確使用方式，一次解析！",
      imgUrl: articlesPic03,
      reverse: false,
    },
    {
      id: 4,
      title: "換季保養：秋冬、春夏肌膚護理重點一次看懂",
      description:
        "每到季節交替，肌膚就容易出現乾癢、脫皮、泛紅、油水失衡等問題。不同季節環境變化大，保養方式也要跟著調整，才能讓你的臉一年四季都水嫩有光澤！",
      imgUrl: articlesPic04,
      reverse: true,
    },
  ];

  const articles03 = [
    {
      id: 5,
      title: "保濕大解析：為什麼您的臉總是乾？",
      description:
        "你是不是常常覺得明明有擦保濕產品，肌膚還是乾燥、脫皮？其實，保濕不只是塗抹乳液這麼簡單！這篇文章將帶你深入了解保濕的三大關鍵、日常容易忽略的陷阱，並教你如何選對產品，讓肌膚水潤透亮。",
      imgUrl: articlesPic05,
      reverse: false,
    },
    {
      id: 6,
      title: "臉部按摩的好處與正確手法教學",
      description:
        "洗臉是日常保養中最基礎的一步，但你真教學臉部按摩不僅能促進血液循環、減少浮腫，還能提升保養品吸收效率，是維持肌膚健康與年輕的重要小秘訣！只要掌握正確手法，每天花5-10分鐘，就能讓肌膚煥然一新。的洗對了嗎？錯誤的洗臉方式可能會讓肌膚越洗越乾、甚至引發粉刺與敏感。了解正確洗臉的五大步驟，改善NG行為，讓肌膚越洗越健康！",
      imgUrl: articlesPic06,
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
          {articles02.map((article, index) => (
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
          {articles03.map((article, index) => (
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