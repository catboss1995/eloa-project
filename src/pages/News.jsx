import React from "react";

// Banner
import newsBanner from "../assets/images/News-Banner2.png";
import newsCard from "../assets/images/NEWS-card.svg";   // ✅ 卡片容器背景

// 最新消息卡片圖片（輪播用）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.png";   // 卡片1
import newsInterview from "../assets/images/NEWS-interview.png";    // 卡片2
import newsUnboxing from "../assets/images/NEWS-unboxing.png";      // 卡片3

// 時間軸暫用圖片（先都用卡片1）
import newsTimelineImg from "../assets/images/NEWS-ELOA-warm-award.png";

import "../scss/styleNews.scss";

const NewsSection = () => {
  const timelineItems = [
    { date: "2025年7月03日", title: "ELOA榮獲設計大獎", desc: "ELOA在國際設計大賽中脫穎而出，榮獲多項設計殊榮，持續引領美容科技的潮流！" },
    { date: "2025年7月15日", title: "ELOA新品亮相活動", desc: "ELOA新品在國際美容展首次亮相，吸引眾多媒體與業界矚目，展現品牌創新實力！" },
    { date: "2025年7月01日", title: "ELOA關注公益活動", desc: "ELOA積極投入公益活動，與醫療團隊攜手推動健康關懷計畫，善盡企業社會責任！" },
    { date: "2024年7月16日", title: "ELOA團隊快閃活動", desc: "ELOA舉辦品牌體驗會，現場互動熱烈，帶來全新美容體驗，與顧客親密交流！" },
    { date: "2024年7月11日", title: "ELOA會員日抽獎", desc: "ELOA推出專屬會員抽獎活動，讓支持品牌的顧客享受更多驚喜與回饋！" },
  ];

  return (
    <div>
      {/* BANNER 區塊 */}
      <div className="banner">
        <div className="banner__container">
          <img src={newsBanner} alt="ELOA Banner 團隊形象照" />
          <div className="banner__content">
            {/* <div className="banner__slogan">溫柔有感 · 優雅入門</div> */}
          </div>
        </div>
      </div>

      {/* 最新消息區塊 */}
      <div className="news">
        <div className="news__container">
          <h2 className="news__title">最新消息</h2>

          {/* ✅ 卡片容器：套用 NEWS-card.svg 當背景 */}
          <div
            className="news__carousel"
            style={{
              backgroundImage: `url(${newsCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",   // 寬度撐滿容器（像圖二）
              backgroundPosition: "center top",
            }}
          >
            <div className="news__item">
              <img src={newsAward} alt="ELOA Award" />
              <div className="news__text">
                <h3>ELOA TEAM</h3>
                <p>榮獲國際設計獎肯定，我們將持續前行！</p>
              </div>
            </div>

            <div className="news__item">
              <img src={newsInterview} alt="ELOA Interview" />
              <div className="news__text">
                <h3>新品亮相</h3>
                <p>「平凡肌膚，也能成就不凡光采。」</p>
              </div>
            </div>

            <div className="news__item">
              <img src={newsUnboxing} alt="ELOA Unboxing" />
              <div className="news__text">
                <h3>好評回饋</h3>
                <p>「產品質感與效果俱佳，上市後好評如潮！」</p>
              </div>
            </div>
          </div>

          {/* ✅ 按鈕移到卡片容器下方 */}
          <div className="news__more">
            <button>查看更多</button>
          </div>
        </div>
      </div>

      {/* 時間軸區塊（與卡片區分開） */}
      <section className="timeline" aria-label="ELOA 最新消息時間軸">
        <div className="timeline__rail" aria-hidden="true" />
        <div className="timeline__list">
          {timelineItems.map((item, index) => (
            <article className="timeline__item" key={index}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__thumb">
                  <img src={newsTimelineImg} alt={item.title} />
                </div>
                <div className="timeline__text">
                  <div className="timeline__date">{item.date}</div>
                  <div className="timeline__title">{item.title}</div>
                  <div className="timeline__desc">{item.desc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
