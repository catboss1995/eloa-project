import React, { useState, useMemo } from "react";

// Banner
import newsBanner from "../assets/images/News-Banner2.png";
import newsCard from "../assets/images/NEWS-card.svg";

// 最新消息卡片圖片（第一頁）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.png";
import newsInterview from "../assets/images/NEWS-interview.png";
import newsUnboxing from "../assets/images/NEWS-unboxing.png";

// 第二頁用 Timeline 的三張 SVG 圖
import newsPg2CupMask from "../assets/images/NEWS-line1.jpg";
import newsPg2Interview from "../assets/images/NEWS-line2.svg";
import newsPg2Ribbon from "../assets/images/NEWS-line3.svg";

// 時間軸圖片（原本用的）
import timelineImg1 from "../assets/images/NEWS-line1.jpg";
import timelineImg2 from "../assets/images/NEWS-line2.jpg";
import timelineImg3 from "../assets/images/NEWS-line3.jpg";
import timelineImg4 from "../assets/images/NEWS-line4.jpg";
import timelineImg5 from "../assets/images/NEWS-line5.jpg";

import eloaLogo from "../assets/images/NEWS-CARD-LOGO.png";
import arrowIcon from "../assets/images/arrowIcon.svg";

import "../scss/styleNews.scss";

const NewsSection = () => {
  // ===== 六張卡片：前 3 = 第一頁，後 3 = 第二頁 =====
  const baseCards = useMemo(() => ([
    // 第一頁
    { id: "award",   img: newsAward,     title: "ELOA TEAM",         desc: "榮獲國際設計獎肯定，我們將持續前行！" },
    { id: "new",     img: newsInterview, title: "新品亮相",           desc: "「平凡肌膚，也能成就不凡光采。」" },
    { id: "review",  img: newsUnboxing,  title: "好評回饋",           desc: "「產品質感與效果俱佳，上市後好評如潮！」" },

    // 第二頁（改用三張 SVG 當示意圖）
    { id: "cup-mask",    img: newsPg2CupMask,    title: "ELOA榮獲設計大獎", desc: "ELOA在國際設計大賽中脫穎而出，榮獲多項殊榮！" },
    { id: "expo-interv", img: newsPg2Interview,  title: "ELOA新品亮相活動", desc: "國際美容展首次亮相，媒體與業界矚目！" },
    { id: "csr",         img: newsPg2Ribbon,     title: "ELOA關注公益活動", desc: "攜手醫療團隊推動健康關懷計畫，善盡企業責任！" },
  ]), []);

  // 翻頁狀態
  const [page, setPage] = useState(0);
  const pageSize  = 3;
  const pageCount = Math.ceil(baseCards.length / pageSize); // 6 張 → 2 頁

  const getPageCards = (p) => {
    const normalized = ((p % pageCount) + pageCount) % pageCount;
    const start = normalized * pageSize;
    return baseCards.slice(start, start + pageSize);
  };

  const cards = getPageCards(page);

  const nextPage = () => setPage((p) => (p + 1) % pageCount);
  const prevPage = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  const timelineItems = [
    { date: "2025年7月03日", title: "ELOA榮獲設計大獎", desc: "ELOA在國際設計大賽中脫穎而出，榮獲多項設計殊榮，持續引領美容科技的潮流！", image: timelineImg1 },
    { date: "2025年7月15日", title: "ELOA新品亮相活動", desc: "ELOA新品在國際美容展首次亮相，吸引眾多媒體與業界矚目，展現品牌創新實力！", image: timelineImg2 },
    { date: "2025年7月01日", title: "ELOA關注公益活動", desc: "ELOA積極投入公益活動，與醫療團隊攜手推動健康關懷計畫，善盡企業社會責任！", image: timelineImg3 },
    { date: "2024年7月16日", title: "ELOA團隊快閃活動", desc: "ELOA舉辦品牌體驗會，現場互動熱烈，帶來全新美容體驗，與顧客親密交流！", image: timelineImg4 },
    { date: "2024年7月11日", title: "ELOA會員日抽獎", desc: "ELOA推出專屬會員抽獎活動，讓支持品牌的顧客享受更多驚喜與回饋！", image: timelineImg5 },
  ];

  return (
    <div>
      {/* BANNER */}
      <div className="banner">
        <div className="banner__container">
          <img src={newsBanner} alt="ELOA Banner 團隊形象照" />
        </div>
      </div>

      <h2 className="news__title">最新消息</h2>

      <div className="news">
        <div className="news__container">
          <div className="news__logo">
            <img src={eloaLogo} alt="ELOA Logo" />
          </div>

          <div className="news__carousel"
            style={{
              backgroundImage: `url(${newsCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
            }}
          >
            {/* 左箭頭 */}
            <div className="news__arrow news__arrow--left" onClick={prevPage}>
              <img src={arrowIcon} alt="Previous" style={{ transform: "rotate(180deg)" }} />
            </div>

            {/* 三張卡片 */}
            {cards.map((card, idx) => (
              <div className="news__item" key={`${page}-${card.id}-${idx}`}>
                <img src={card.img} alt={card.title} />
                <div className="news__text">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}

            {/* 右箭頭 */}
            <div className="news__arrow news__arrow--right" onClick={nextPage}>
              <img src={arrowIcon} alt="Next" />
            </div>
          </div>

          <div className="news__more">
            <button onClick={nextPage}>查看更多</button>
          </div>
        </div>
      </div>

      <section className="timeline" aria-label="ELOA 最新消息時間軸">
        <div className="timeline__rail" aria-hidden="true" />
        <div className="timeline__list">
          {timelineItems.map((item, index) => (
            <article className="timeline__item" key={index}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__thumb">
                  <img src={item.image} alt={item.title} />
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
