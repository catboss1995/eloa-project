import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import newsData from "./NewsData";
import gsap from "gsap";
import SplitType from 'split-type';
import "../scss/styleNews.scss";

// Banner 圖片
const newsBanner = "https://ik.imagekit.io/rgyxmrxzs/newsBanner2.png?updatedAt=1757227626682";


const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("最新消息");
  const heroTitleRef = useRef(null);

  // 根據圖片內容更新的新聞資料


  const categories = ["最新消息", "優惠專區", "最新活動"];

  useEffect(() => {
    // 確保元素已經存在
    if (heroTitleRef.current && typeof SplitType !== 'undefined') {
      try {
        // 使用 SplitType 分割文字
        const splitText = new SplitType(heroTitleRef.current, { type: 'chars' });
        
        // 先確保所有字元初始不可見
        gsap.set(splitText.chars, { opacity: 0, y: 50 });
        
        // 創建 GSAP 時間軸 - 只讓文字出現，不再讓它消失
        const tl = gsap.timeline();
        
        tl.to(splitText.chars, {
          duration: 0.8, 
          opacity: 1, 
          y: 0,  
          stagger: 0.1,  
          ease: 'power2.out'
        });
        
        // 在組件卸載時清理動畫
        return () => {
          tl.kill();
          if (typeof splitText.revert === 'function') {
            splitText.revert();
          }
        };
      } catch (error) {
        console.error("Animation error:", error);
        // 確保文字至少是可見的，即使動畫失敗
        if (heroTitleRef.current) {
          heroTitleRef.current.style.opacity = 1;
        }
      }
    }
  }, []); // 空依賴數組確保只在組件掛載時運行一次

  const filteredNews = newsData.filter((item) => {
    return activeTab === "最新消息" ? true : item.category === activeTab;
  });

  return (
    <section className="news">
      {/* Hero Banner */}
      <div className="news__hero">
        <img src={newsBanner} alt="ELOA 最新消息" className="news__hero-img" />
        <div className="news__hero-content">
          <h1
            ref={heroTitleRef}
            className="news__hero-title">
            NEWS
          </h1>
          <p className="news__hero-subtitle">最新消息</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="news__tabs-container">
        <div className="news__tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`news__tab ${activeTab === category ? "is-active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* News Cards */}
      <div className="news__content">
        <div className="news__grid">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <Link
                to={`/news/${item.slug}`}
                key={item.slug}
                className="news__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="news__date-badge">
                  <span>{item.date}</span>
                </div>
                <div className="news__card-content">
                  <div className="news__card-left">
                    <h3 className="news__title">{item.title}</h3>
                    <p className="news__description">{item.description}</p>
                  </div>
                  <div className="news__card-right">
                    <img src={item.image} alt={item.title} className="news__image" />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="news__empty">
              <p>目前沒有相關消息</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;