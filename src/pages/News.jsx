import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/styleNews.scss";

// Banner
import newsBanner from "../assets/images/NEWS-Banner-NEW1.jpg";

// 搜尋 icon
import faqSearchIcon from "../assets/images/FQA-search.svg";

// 卡片圖片（8 張）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.jpg";   // 美妝大賞
import newsInterview from "../assets/images/NEWS-interview.jpg";    // 主理人專訪
import newsUnboxing from "../assets/images/NEWS-unboxing.jpg";      // 公益/開箱
import newsLine1 from "../assets/images/NEWS-line1.jpg";            // 設計大獎
import newsLine2 from "../assets/images/NEWS-line2.jpg";            // 新品亮相
import newsLine3 from "../assets/images/NEWS-line3.jpg";            // 公益活動
import newsLine4 from "../assets/images/NEWS-line4.jpg";            // 會員派對
import newsLine5 from "../assets/images/NEWS-line5.jpg";            // 抽獎專區

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("全部");
  const [searchTerm, setSearchTerm] = useState("");

  // 新聞資料加上 slug
  const newsData = [
    { 
      slug: "eloa-interview",
      date: "2024.08.27",
      title: "ELOA 主理人專訪",
      image: newsInterview,
      description: "用 ELOA 的好好時光，展望全新美肌體驗...",
      category: "媒體報導"
    },
    { 
      slug: "eloa-party",
      date: "2024.08.20",
      title: "ELOA 會員專屬派對驚喜特輯",
      image: newsLine4,
      description: "攜手共慶品牌榮耀時刻，共同慶賀 ELOA...",
      category: "本月活動"
    },
    { 
      slug: "eloa-kol-experience",
      date: "2024.08.15",
      title: "人氣 KOL 開箱 ELOA 美容儀",
      image: newsUnboxing,
      description: "美妝 KOL 實測體驗，分享真實心得...",
      category: "媒體報導"
    },
    { 
      slug: "eloa-lottery",
      date: "2024.08.01",
      title: "ELOA 官網會員日 抽獎專區",
      image: newsLine5,
      description: "登入會員即抽 ELOA 高效美容儀新品！...",
      category: "本月活動"
    },
    { 
      slug: "eloa-award",
      date: "2024.07.25",
      title: "ELOA 團隊榮獲設計大獎",
      image: newsLine1,
      description: "憑藉創新科技與優雅設計，勇奪國際殊榮...",
      category: "媒體報導"
    },
    { 
      slug: "eloa-team",
      date: "2024.07.15",
      title: "ELOA 榮獲國際美妝肯定",
      image: newsAward,
      description: "持續向國際舞台邁進，榮獲日本美妝大賞...",
      category: "媒體報導"
    },
    { 
      slug: "eloa-exhibit",
      date: "2024.07.13",
      title: "ELOA 新品首次公開亮相",
      image: newsLine2,
      description: "智慧面罩於國際展會中盛大發表，現場反應熱烈...",
      category: "本月新品"
    },
    { 
      slug: "eloa-charity",
      date: "2024.07.01",
      title: "ELOA 支持熱音公益計畫",
      image: newsLine3,
      description: "ELOA 以行動回饋社會，攜手熱心公益活動...",
      category: "媒體報導"
    },
  ];

  const categories = ["全部", "本月新品", "本月活動", "媒體報導"];

  const filteredNews = newsData.filter((item) => {
    const matchCategory = activeTab === "全部" || item.category === activeTab;
    const matchSearch =
      item.title.includes(searchTerm) ||
      item.date.includes(searchTerm) ||
      item.description.includes(searchTerm) ||
      item.category.includes(searchTerm);
    return matchCategory && matchSearch;
  });

  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="news">
      {/* Banner */}
      <div className="banner__container">
        <img src={newsBanner} alt="ELOA 最新消息 Banner" />
      </div>

      {/* Tabs + Search */}
      <div className="news__header">
        <div className="news__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab ${activeTab === cat ? "is-active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="news__search">
          <img src={faqSearchIcon} alt="搜尋" className="search__icon" />
          <input
            type="text"
            placeholder="關鍵字搜尋"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="news__grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((item, i) => (
            <Link 
              to={`/news/${item.slug}`} 
              key={i} 
              className="news__card"
            >
              <img src={item.image} alt={item.title} className="news__img" />
              <div className="news__content">
                <div className="news__meta">
                  <p className="news__date">{item.date}</p>
                  <span className="news__tag">{item.category}</span>
                </div>
                <h3 className="news__title">
                  {highlightText(item.title, searchTerm)}
                </h3>
                <p className="news__desc">
                  {highlightText(item.description, searchTerm)}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="news__empty">查無符合的消息</p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
