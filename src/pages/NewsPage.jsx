// src/pages/NewsPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/styleNews.scss";

// 匯入圖片（保持跟 NewsList.jsx 一致）
import newsAward from "../assets/images/NEWS-ELOA-warm-award.jpg";
import newsInterview from "../assets/images/NEWS-interview.jpg";
import newsUnboxing from "../assets/images/NEWS-unboxing.jpg";
import newsLine1 from "../assets/images/NEWS-line1.jpg";
import newsLine2 from "../assets/images/NEWS-line2.jpg";
import newsLine3 from "../assets/images/NEWS-line3.jpg";
import newsLine4 from "../assets/images/NEWS-line4.jpg";
import newsLine5 from "../assets/images/NEWS-line5.jpg";

// 全部文章資料
const newsData = [
  {
    id: 1,
    date: "2024.08.27",
    title: "ELOA 主理人專訪",
    image: newsInterview,
    content: `
「好好時光」是 ELOA 品牌誕生的核心靈感。主理人分享，ELOA 想傳遞的不只是保養產品，而是一種日常的生活態度：在每一個專屬於自己的片刻，透過科技與設計的結合，讓肌膚與心靈都能被療癒與滋養。

她認為，真正的美麗不是來自外在的修飾，而是透過日復一日的儀式感，建立起屬於自己的自在與自信。因此，ELOA 在產品研發上，不僅注重高效能與安全性，更在設計上融入優雅細節，讓使用的瞬間成為放鬆與享受。

在專訪中，主理人也談到未來的展望。她希望 ELOA 能成為現代女性日常中的「好夥伴」，無論是在繁忙的清晨、沉澱的夜晚，還是獨處的片刻，都能藉由 ELOA 找回屬於自己的平衡與美麗。

「ELOA 的存在，不只是讓妳變美，而是讓妳在每一個好好時光裡，真實感受到生活的溫柔。」
    `
  },
  {
    id: 2,
    date: "2024.08.20",
    title: "ELOA 合作專屬派對驚喜特報",
    image: newsLine1,
    content: `
ELOA 攜手多位品牌合作夥伴，共同舉辦專屬派對。現場不僅展示了全新美容科技產品，還設計了沉浸式體驗區，讓來賓能親身感受品牌魅力。派對氛圍熱烈，賓客們透過互動遊戲、專屬禮物與交流，留下深刻印象。這場活動象徵著 ELOA 持續拓展影響力的決心，也展現品牌在國際舞台上的潛力。
    `
  },
  {
    id: 3,
    date: "2024.08.15",
    title: "人氣 KOL 體驗 ELOA 美容儀",
    image: newsLine2,
    content: `
知名 KOL 親自體驗 ELOA 美容儀，並透過影片與社群平台分享心得。她強調，ELOA 不僅設計優雅，更兼具實用性，在日常護理中帶來顯著改善。她表示使用後肌膚更加光澤與透亮，讓她更有自信分享給粉絲。此舉也帶動品牌在年輕消費族群中的討論熱度。
    `
  },
  {
    id: 4,
    date: "2024.08.01",
    title: "ELOA 會員專屬日 抽獎專區",
    image: newsLine3,
    content: `
為回饋會員，ELOA 推出「會員專屬日」活動。凡於活動期間登入並消費滿額，即可參加抽獎。獎項包含最新美容儀、限量護膚禮盒與專屬折扣券。活動一推出便吸引大量會員踴躍參加，展現品牌強大號召力，也進一步提升顧客黏著度。
    `
  },
  {
    id: 5,
    date: "2024.07.25",
    title: "ELOA 榮獲美容設計大獎",
    image: newsAward,
    content: `
ELOA 憑藉其獨特設計與創新科技，榮獲國際美容設計大獎評審肯定。評審團表示，ELOA 將實用性與美學完美融合，創造出兼具高效能與藝術感的產品。這項殊榮不僅彰顯了品牌的研發實力，也鞏固了其在高端美容市場的地位。
    `
  },
  {
    id: 6,
    date: "2024.07.15",
    title: "ELOA 獲國際團隊肯定",
    image: newsLine4,
    content: `
ELOA 於國際盛會中獲得團隊大獎，代表品牌團隊的專業與默契。來自各地的專家一致認為，ELOA 不僅在產品層面有卓越表現，更在團隊協作與品牌經營上展現實力。此次榮耀象徵著 ELOA 在全球市場的穩健步伐。
    `
  },
  {
    id: 7,
    date: "2024.07.05",
    title: "ELOA 新品發表會圓滿落幕",
    image: newsLine5,
    content: `
ELOA 於夏季新品發表會上推出最新一代美容儀。現場聚集了媒體、合作夥伴與忠實顧客，共同見證新品登場。發表會設有互動展示區，讓來賓親自體驗產品功能，並透過專業講座了解研發理念。此次發表成功提升了市場期待感，並為未來銷售奠定基礎。
    `
  },
  {
    id: 8,
    date: "2024.07.01",
    title: "ELOA 支持熱音公益計畫",
    image: newsUnboxing,
    content: `
ELOA 積極參與公益活動，特別支持青年熱音計畫。品牌透過捐贈與合作，幫助年輕音樂人有更多資源實現夢想。此舉不僅展現企業社會責任，也讓 ELOA 與消費者建立更深層的情感連結。品牌希望未來能持續將美的力量延伸到社會的每個角落。
    `
  }
];

export default function NewsPage() {
  const { id } = useParams();
  const article = newsData.find((n) => n.id === Number(id));

  if (!article) return <p>找不到文章</p>;

  return (
    <div className="news__page">
      <h1 className="news__title">{article.title}</h1>
      <p className="news__date">{article.date}</p>
      <img src={article.image} alt={article.title} className="news__hero" />
      <div className="news__content">
        {article.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="backButtonContainer">
        <Link to="/news/list" className="backButton">← 返回文章列表</Link>
      </div>
    </div>
  );
}
