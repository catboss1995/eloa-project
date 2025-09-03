// src/pages/NewsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../scss/styleNews.scss";

// 匯入圖片
import newsAward from "../assets/images/NEWS-ELOA-warm-award.jpg";   // 美妝大賞
import newsInterview from "../assets/images/NEWS-interview.jpg";    // 主理人專訪
import newsUnboxing from "../assets/images/NEWS-unboxing.jpg";      // 公益/開箱
import newsLine1 from "../assets/images/NEWS-line1.jpg";            // 合作派對
import newsLine2 from "../assets/images/NEWS-line2.jpg";            // KOL 體驗
import newsLine3 from "../assets/images/NEWS-line3.jpg";            // 抽獎專區
import newsLine4 from "../assets/images/NEWS-line4.jpg";            // 國際獎項
import newsLine5 from "../assets/images/NEWS-line5.jpg";            // 展會/發表

const newsData = [
  {
    id: 1,
    date: "2024.08.27",
    title: "ELOA 主理人專訪",
    image: newsInterview,
    description: "用 ELOA 的好好時光，展望全新美肌體驗。"
  },
  {
    id: 2,
    date: "2024.08.20",
    title: "ELOA 合作專屬派對驚喜特報",
    image: newsLine1,
    description: "攜手無數品牌夥伴共襄盛舉，一同見證 ELOA 的成長。"
  },
  {
    id: 3,
    date: "2024.08.15",
    title: "人氣 KOL 體驗 ELOA 美容儀",
    image: newsLine2,
    description: "美妝 KOL 親測推薦，分享真實心得。"
  },
  {
    id: 4,
    date: "2024.08.01",
    title: "ELOA 會員專屬日 抽獎專區",
    image: newsLine3,
    description: "登入會員即可參加抽獎，驚喜獎品等你拿！"
  },
  {
    id: 5,
    date: "2024.07.25",
    title: "ELOA 榮獲美容設計大獎",
    image: newsAward,
    description: "透過精緻設計與科技結合，勇奪國際大獎。"
  },
  {
    id: 6,
    date: "2024.07.15",
    title: "ELOA 獲國際團隊肯定",
    image: newsLine4,
    description: "持續創新屢屢斬獲佳績，榮獲國際肯定。"
  },
  {
    id: 7,
    date: "2024.07.05",
    title: "ELOA 新品發表會圓滿落幕",
    image: newsLine5,
    description: "新品首次亮相，現場反應熱烈。"
  },
  {
    id: 8,
    date: "2024.07.01",
    title: "ELOA 支持熱音公益計畫",
    image: newsUnboxing,
    description: "ELOA 投身公益，支持青年音樂夢想。"
  }
];

const NewsList = () => {
  return (
    <div className="newsListPage">
      <div className="newsGrid">
        {newsData.map((item) => (
          <Link
            to={`/news/${item.id}`}
            key={item.id}
            state={{ item }}
            className="newsCard"
          >
            <div className="cardImageContainer">
              <img src={item.image} alt={item.title} className="cardImage" />
            </div>
            <div className="cardContent">
              <p className="cardDate">{item.date}</p>
              <h3 className="cardTitle">{item.title}</h3>
              <p className="cardDesc">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
