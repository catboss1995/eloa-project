import React from "react";

// Banner
import newsBanner from "../assets/images/News-Banner2.png";
import newsCard from "../assets/images/NEWS-card.svg";

// 最新消息卡片圖片（輪播用）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.png";
import newsInterview from "../assets/images/NEWS-interview.png";
import newsUnboxing from "../assets/images/NEWS-unboxing.png";

// 時間軸圖片
import timelineImg1 from "../assets/images/NEWS-line1.svg";
import timelineImg2 from "../assets/images/NEWS-line2.svg";
import timelineImg3 from "../assets/images/NEWS-line3.svg";
import timelineImg4 from "../assets/images/NEWS-line4.svg";
import timelineImg5 from "../assets/images/NEWS-line5.svg";

import eloaLogo from "../assets/images/NEWS-CARD-LOGO.png";
import arrowIcon from "../assets/images/arrowIcon.svg";

import "../scss/styleNews.scss";

const NewsSection = () => {
  const timelineItems = [
    { 
      date: "2025年7月03日", 
      title: "ELOA榮獲設計大獎", 
      desc: "ELOA在國際設計大賽中脫穎而出，榮獲多項設計殊榮，持續引領美容科技的潮流！",
      image: timelineImg1
    },
    { 
      date: "2025年7月15日", 
      title: "ELOA新品亮相活動", 
      desc: "ELOA新品在國際美容展首次亮相，吸引眾多媒體與業界矚目，展現品牌創新實力！",
      image: timelineImg2
    },
    { 
      date: "2025年7月01日", 
      title: "ELOA關注公益活動", 
      desc: "ELOA積極投入公益活動，與醫療團隊攜手推動健康關懷計畫，善盡企業社會責任！",
      image: timelineImg3
    },
    { 
      date: "2024年7月16日", 
      title: "ELOA團隊快閃活動", 
      desc: "ELOA舉辦品牌體驗會，現場互動熱烈，帶來全新美容體驗，與顧客親密交流！",
      image: timelineImg4
    },
    { 
      date: "2024年7月11日", 
      title: "ELOA會員日抽獎", 
      desc: "ELOA推出專屬會員抽獎活動，讓支持品牌的顧客享受更多驚喜與回饋！",
      image: timelineImg5
    },
  ];

  return (
    <div>
      {/* BANNER  */}
      <div className="banner">
        <div className="banner__container">
          <img src={newsBanner} alt="ELOA Banner 團隊形象照" />
          <div className="banner__content">
            {/* <div className="banner__slogan">溫柔有感 · 優雅入門</div> */}
          </div>
        </div>
      </div>

      <h2 className="news__title">最新消息</h2>

      <div className="news">
        <div className="news__container">
          <div className="news__logo">
            <img src={eloaLogo} alt="ELOA Logo" />
          </div>

          <div
            className="news__carousel"
            style={{
              backgroundImage: `url(${newsCard})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",
              backgroundPosition: "center top",
            }}
          >
            <div className="news__arrow news__arrow--left">
              <img src={arrowIcon} alt="Previous" style={{ transform: 'rotate(180deg)' }} />
            </div>
            
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
            
            {/* Right Arrow Icon */}
            <div className="news__arrow news__arrow--right">
              <img src={arrowIcon} alt="Next" />
            </div>
          </div>

          <div className="news__more">
            <button>查看更多</button>
          </div>
        </div>
      </div>

      <div className="timeline__logo">
      </div>

      <section className="timeline" aria-label="ELOA 最新消息時間軸">
        <div className="timeline__rail" aria-hidden="true" />
        <div className="timeline__list">
          {timelineItems.map((item, index) => (
            <article className="timeline__item" key={index}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__thumb">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{
                    }}
                  />
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