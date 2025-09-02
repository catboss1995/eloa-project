import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";   // 👈 接收從 News.jsx 傳來的 state
import "../scss/styleNews.scss";

import newsAward from "../assets/images/NEWS-ELOA-warm-award.jpg";
import newsInterview from "../assets/images/NEWS-interview.jpg";
import newsUnboxing from "../assets/images/NEWS-unboxing.jpg";
import newsLine1 from "../assets/images/NEWS-line1.jpg";
import newsLine2 from "../assets/images/NEWS-line2.jpg";
import newsLine3 from "../assets/images/NEWS-line3.jpg";
import newsLine4 from "../assets/images/NEWS-line4.jpg";
import newsLine5 from "../assets/images/NEWS-line5.jpg";

const newsData = [
  {
    id: 1,
    date: "2024.08.27",
    title: "ELOA 主理人專訪",
    image: newsInterview,
    description: "用 ELOA 的好好時光，展望全新美肌體驗。",
    category: "媒體報導",
    content: (
      <>
        <h2>【ELOA 主理人專訪】</h2>
        <h3>用 ELOA 的好好時光，展望全新美肌體驗</h3>
        <p>
          「好好時光」是 ELOA 品牌誕生的核心靈感。主理人分享，ELOA 想傳遞的不只是保養產品，
          而是一種日常的生活態度：在每一個專屬於自己的片刻，透過科技與設計的結合，
          讓肌膚與心靈都能被療癒與滋養。
        </p>
        <p>
          她認為，真正的美麗不是來自外在的修飾，而是透過日復一日的儀式感，
          建立起屬於自己的自在與自信。因此，ELOA 在產品研發上，
          不僅注重高效能與安全性，更在設計上融入優雅細節，
          讓使用的瞬間成為放鬆與享受。
        </p>
        <p>
          在專訪中，主理人也談到未來的展望。她希望 ELOA 能成為現代女性日常中的「好夥伴」，
          無論是在繁忙的清晨、沉澱的夜晚，還是獨處的片刻，
          都能藉由 ELOA 找回屬於自己的平衡與美麗。
        </p>
        <p>
          「ELOA 的存在，不只是讓妳變美，而是讓妳在每一個好好時光裡，
          真實感受到生活的溫柔。」
        </p>
      </>
    ),
  },
  {
    id: 2,
    date: "2024.08.20",
    title: "ELOA 會員專屬派對驚喜特輯",
    image: newsLine4,
    description: "攜手共慶品牌榮耀時刻，共同慶賀 ELOA。",
    category: "本月活動",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 3,
    date: "2024.08.15",
    title: "人氣 KOL 開箱 ELOA 美容儀",
    image: newsUnboxing,
    description: "美妝 KOL 實測體驗，分享真實心得。",
    category: "媒體報導",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 4,
    date: "2024.08.01",
    title: "ELOA 官網會員日 抽獎專區",
    image: newsLine5,
    description: "登入會員即抽 ELOA 高效美容儀新品！",
    category: "本月活動",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 5,
    date: "2024.07.25",
    title: "ELOA 團隊榮獲設計大獎",
    image: newsLine1,
    description: "憑藉創新科技與優雅設計，勇奪國際殊榮。",
    category: "媒體報導",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 6,
    date: "2024.07.15",
    title: "ELOA 榮獲國際美妝肯定",
    image: newsAward,
    description: "持續向國際舞台邁進，榮獲日本美妝大賞。",
    category: "媒體報導",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 7,
    date: "2024.07.13",
    title: "ELOA 新品首次公開亮相",
    image: newsLine2,
    description: "智慧面罩於國際展會中盛大發表，現場反應熱烈。",
    category: "本月新品",
    content: <p>文章生產中～敬請期待。</p>,
  },
  {
    id: 8,
    date: "2024.07.01",
    title: "ELOA 支持熱音公益計畫",
    image: newsLine3,
    description: "ELOA 以行動回饋社會，攜手熱心公益活動。",
    category: "媒體報導",
    content: <p>文章生產中～敬請期待。</p>,
  },
];

const NewsList = () => {
  const location = useLocation();
  const initialId = location.state?.id || null; // 👈 從 News.jsx 傳來的 id
  const [selectedArticle, setSelectedArticle] = useState(initialId);

  // 自動捲到頂
  useEffect(() => {
    if (initialId) {
      window.scrollTo(0, 0);
    }
  }, [initialId]);

  // 👉 如果有選中的文章 → 顯示文章內頁
  if (selectedArticle) {
    const article = newsData.find((a) => a.id === Number(selectedArticle));
    if (!article) return <p>找不到文章</p>;

    return (
      <div className="articleContentPage">
        <div className="breadcrumb">
          <span
            className="breadcrumbLink"
            onClick={() => setSelectedArticle(null)}
            style={{ cursor: "pointer" }}
          >
            最新消息
          </span>
          <span className="separator">/</span>
          <span className="currentPage">{article.title}</span>
        </div>

        <div className="articleHeader">
          <h1 className="articleTitle">{article.title}</h1>
          <span className="publishDate">發布於 {article.date}</span>
        </div>

        <div className="articleContent">{article.content}</div>

        <div className="backButtonContainer">
          <button className="backButton" onClick={() => setSelectedArticle(null)}>
            ← 返回新聞列表
          </button>
        </div>
      </div>
    );
  }

  // 👉 否則 → 顯示新聞卡片列表
  return (
    <div className="newsList">
      {newsData.map((item) => (
        <div
          key={item.id}
          className="newsCard"
          onClick={() => setSelectedArticle(item.id)}
        >
          <img src={item.image} alt={item.title} className="newsCard__img" />
          <div className="newsCard__content">
            <span className="newsCard__category">{item.category}</span>
            <p className="newsCard__date">{item.date}</p>
            <h3 className="newsCard__title">{item.title}</h3>
            <p className="newsCard__desc">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
