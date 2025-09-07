import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/styleNews.scss";

// Banner 圖片
const newsBanner = "https://ik.imagekit.io/rgyxmrxzs/newsBanner2.png?updatedAt=1757227626682";

// 新聞卡片圖片
const newsImage1 = "https://ik.imagekit.io/rgyxmrxzs/newsImage1.png?updatedAt=1757152726594"; // 週年慶
const newsImage2 = "https://ik.imagekit.io/rgyxmrxzs/newsImage2?updatedAt=1757152301899"; // 秋季體驗禮
const newsImage3 = "https://ik.imagekit.io/rgyxmrxzs/newsImage3?updatedAt=1757152364670"; // 團購優惠
const newsImage4 = "https://ik.imagekit.io/rgyxmrxzs/newsImage4?updatedAt=1757152418617"; // 好友分享
const newsImage5 = "https://ik.imagekit.io/rgyxmrxzs/newsImage5?updatedAt=1757152446578";  // 會員折扣
const newsImage6 ="https://ik.imagekit.io/rgyxmrxzs/newsImage6?updatedAt=1757152467936"; // 學生優惠
const newsImage7 = "https://ik.imagekit.io/rgyxmrxzs/newsImage7?updatedAt=1757152486404";   // 系統升級
const newsImage8 = "https://ik.imagekit.io/rgyxmrxzs/newsImage8?updatedAt=1757152522651";    // Calmie上市
const newsImage9 = "https://ik.imagekit.io/rgyxmrxzs/newsImage9?updatedAt=1757152555449";     // 代言人

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("最新消息");

  // 根據圖片內容更新的新聞資料
  const newsData = [
    {
      slug: "anniversary-sale",
      date: "2024.09.05",
      title: "ELOA週年慶限定狂歡",
      image: newsImage1,
      description: "全館商品最低85折，滿額再贈光彩賦活精華。會員獨享雙重好禮：購買任一美容儀器加贈專業級導入凝膠，再享免費肌膚檢測服務。活動期間限定，數量有限送完為止。",
      category: "最新活動"
    },
    {
      slug: "autumn-experience-gift",
      date: "2024.09.01",
      title: "秋季新品體驗禮開跑",
      image: newsImage2,
      description: "首購任一美容儀即享獨家體驗組，內含旅行裝精華液、專用清潔劑及使用指南手冊。新會員註冊再獲300元購物金，老會員推薦朋友成功註冊雙方各得200元回饋金。",
      category: "最新活動"
    },
    {
      slug: "group-purchase-offer",
      date: "2024.09.06",
      title: "限時團購優惠專案",
      image: newsImage3,
      description: "3人成團享團購價75折，5人成團再贈價值1200元的專業保養套組。團長享額外10%回饋金，每團限量20組。活動倒數計時中，錯過再等一年。立即邀請朋友一起變美！",
      category: "最新活動"
    },
    {
      slug: "friend-referral-rewards",
      date: "2024.09.03",
      title: "好友分享賞雙重回饋",
      image: newsImage4,
      description: "推薦朋友成功註冊並完成首購，推薦人與被推薦人各獲得300元購物金。推薦越多賺越多，單月推薦達5人可升級為品牌大使，享終身8折特權。分享連結還可參加月抽獎活動。",
      category: "優惠專區"
    },
    {
      slug: "member-weekly-discount",
      date: "2024.09.06",
      title: "會員專屬週限時折扣",
      image: newsImage5,
      description: "每週一會員專屬日，指定商品享額外95折優惠。當週壽星再享額外禮品一份，生日當月消費滿額即可參加抽獎，有機會獲得限量聯名商品。活動詳情請見官網會員專區。",
      category: "優惠專區"
    },
    {
      slug: "student-discount",
      date: "2024.08.30",
      title: "開學季學生專屬優惠",
      image: newsImage6,
      description: "憑學生證享全館商品8折優惠，加購保養品再享75折超殺價格。提供分期付款0利率服務，讓學生族群也能輕鬆擁有專業美容儀器。活動限定大專院校在學學生，需出示有效學生證。",
      category: "優惠專區"
    },
    {
      slug: "website-upgrade",
      date: "2024.08.20",
      title: "官網會員系統全面升級完成",
      image: newsImage7,
      description: "新增個人化推薦功能，根據膚質測試結果智能推薦適合的美容儀器與保養方案。會員專區新增使用紀錄追蹤，讓您清楚掌握美容進度。升級期間造成不便深感抱歉，感謝您的耐心等待。",
      category: "最新消息"
    },
    {
      slug: "calmie-launch",
      date: "2024.08.15",
      title: "Calmie冷敷舒緩儀正式上市",
      image: newsImage8,
      description: "專為敏感肌膚設計的溫和美容儀器，採用獨家冷凍科技結合離子導入功能。臨床實測顯示能有效舒緩肌膚不適，提升保養品吸收率達30%。即日起開放預購，前100名享早鳥優惠價。",
      category: "最新消息"
    },
    {
      slug: "spokesperson-interview",
      date: "2024.08.10",
      title: "品牌代言人李佳穎分享美容心得",
      image: newsImage9,
      description: "知名藝人李佳穎親自體驗ELOA全系列產品，分享30天使用心得與美容秘訣。專訪影片將於本週五在官方YouTube頻道首播，同步釋出獨家美容教學影片，教您如何正確使用儀器。",
      category: "最新消息"
    }
  ];

  const categories = ["最新消息", "優惠專區", "最新活動"];

  const filteredNews = newsData.filter((item) => {
    return activeTab === "最新消息" ? true : item.category === activeTab;
  });

  return (
    <section className="news">
      {/* Hero Banner */}
      <div className="news__hero">
        <img src={newsBanner} alt="ELOA 最新消息" className="news__hero-img" />
        <div className="news__hero-content">
          <h1 className="news__hero-title">NEWS</h1>
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

export default  NewsPage;
