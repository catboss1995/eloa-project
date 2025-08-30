import React, { useState } from "react";
import "../scss/styleNews.scss";

// Banner
import newsBanner from "../assets/images/NEWS-Banner-NEW1.jpg";

// 搜尋 icon
import faqSearchIcon from "../assets/images/FQA-search.svg";

// 卡片圖片（8 張）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.jpg";   // 美妝大賞
import newsInterview from "../assets/images/NEWS-interview.jpg";    // 主理人專訪
import newsUnboxing from "../assets/images/NEWS-unboxing.jpg";      // KOL 開箱
import newsLine1 from "../assets/images/NEWS-line1.jpg";            // 設計大獎
import newsLine2 from "../assets/images/NEWS-line2.jpg";            // 新品亮相
import newsLine3 from "../assets/images/NEWS-line3.jpg";            // 公益活動
import newsLine4 from "../assets/images/NEWS-line4.jpg";            // 會員派對
import newsLine5 from "../assets/images/NEWS-line5.jpg";            // 抽獎專區

const NewsSection = () => {
  const [activeTab, setActiveTab] = useState("全部");
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ 最終正確 mapping
  const newsData = [
    { date: "2024.08.27", title: "【ELOA主理人專訪】用ELOA的好好時光，展望全新美肌體驗", category: "媒體報導", img: newsInterview },
    { date: "2024.08.20", title: "【ELOA會員專屬派對驚喜特輯】攜手共慶品牌榮耀時刻，共同慶賀ELOA", category: "本月活動", img: newsLine4 },
    { date: "2024.08.15", title: "【人氣KOL開箱ELOA美容儀】美妝KOL實測體驗，分享真實心得", category: "媒體報導", img: newsUnboxing },
    { date: "2024.08.01", title: "【ELOA官網會員日 抽獎專區】登入會員即抽ELOA高效美容儀新品", category: "本月活動", img: newsLine5 },
    { date: "2024.07.25", title: "【ELOA團隊榮獲設計大獎】ELOA團隊憑藉創新科技與優雅設計，勇奪國際殊榮", category: "媒體報導", img: newsLine1 },
    { date: "2024.07.15", title: "【ELOA榮獲國際美妝肯定】ELOA持續向國際舞台邁進，榮獲日本美妝大賞", category: "媒體報導", img: newsAward },
    { date: "2024.07.13", title: "【ELOA新品首次公開亮相】ELOA智慧面罩於中華美妝展盛大發表，現場反應熱烈", category: "本月新品", img: newsLine2 },
    { date: "2024.07.01", title: "【ELOA支持熱音公益計畫】ELOA以行動回饋社會，攜手熱心公益活動", category: "媒體報導", img: newsLine3 },
  ];

  const categories = ["全部", "本月新品", "本月活動", "媒體報導"];

  const filteredNews = newsData.filter((item) => {
    const matchCategory = activeTab === "全部" || item.category === activeTab;
    const matchSearch =
      item.title.includes(searchTerm) ||
      item.date.includes(searchTerm) ||
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

      {/* Tabs */}
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

      {/* Search */}
      <div className="news__search">
        <img src={faqSearchIcon} alt="搜尋" className="search__icon" />
        <input
          type="text"
          placeholder="關鍵字搜尋"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="news__grid">
        {filteredNews.length > 0 ? (
          filteredNews.map((item, i) => (
            <div className="news__card" key={i}>
              <img
                src={item.img}
                alt={item.title}
                className={`news__img ${item.fit === "contain" ? "news__img--contain" : ""}`}
              />
              <div className="news__content">
                <div className="news__meta">
                  <p className="news__date">{item.date}</p>
                  <span className="news__tag">{item.category}</span>
                </div>
                <h3 className="news__title">
                  {highlightText(item.title, searchTerm)}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="news__empty">查無符合的消息</p>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
