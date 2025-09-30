import React, { use } from "react";
import { useParams, Link } from "react-router-dom";
import "../scss/styleNews.scss";
import useDocumentTitle from "../hooks/useDocumentTitle";


// 使用與 News.jsx 相同的圖片
const newsImage1 = "https://ik.imagekit.io/rgyxmrxzs/newsImage1.png?updatedAt=1757152726594";
const newsImage2 = "https://ik.imagekit.io/rgyxmrxzs/newsImage2?updatedAt=1757152301899";
const newsImage3 = "https://ik.imagekit.io/rgyxmrxzs/newsImage3?updatedAt=1757152364670";
const newsImage4 = "https://ik.imagekit.io/rgyxmrxzs/newsImage4?updatedAt=1757152418617";
const newsImage5 = "https://ik.imagekit.io/rgyxmrxzs/newsImage5?updatedAt=1757152446578";
const newsImage6 = "https://ik.imagekit.io/rgyxmrxzs/newsImage6?updatedAt=1757152467936";
const newsImage7 = "https://ik.imagekit.io/rgyxmrxzs/newsImage7?updatedAt=1757152486404";
const newsImage8 = "https://ik.imagekit.io/rgyxmrxzs/newsImage8?updatedAt=1757152522651";
const newsImage9 = "https://ik.imagekit.io/rgyxmrxzs/newsImage9?updatedAt=1757152555449";

const NewsRouter = () => {
  const { slug } = useParams();

  // 完整最新消息資料（與 News.jsx 一致，並加上詳細內容）
  const newsData = [
    {
      slug: "anniversary-sale",
      date: "2024.09.05",
      title: "ELOA週年慶限定狂歡",
      image: newsImage1,
      description: "全館商品最低85折，滿額再贈光彩賦活精華。",
      category: "最新活動",
      content: `
        <h3>🎉 ELOA 品牌週年慶正式開跑！</h3>
        <p>這是一年一度最盛大的優惠活動，為了感謝所有支持 ELOA 的忠實顧客，我們特別推出史無前例的優惠方案。</p>
        
        <h4>✨ 活動亮點：</h4>
        <ul>
          <li>全館商品最低85折，部分熱銷商品更享有限時75折優惠</li>
          <li>滿額即贈價值NT$1,200的光彩賦活精華，數量有限送完為止</li>
          <li>會員獨享雙重好禮：購買任一美容儀器加贈專業級導入凝膠</li>
          <li>免費專業肌膚檢測服務，由資深美容師一對一諮詢</li>
        </ul>
        
        <h4>📅 活動時間：</h4>
        <p>即日起至2024年9月30日，把握機會享受最優惠的價格！</p>
        
        <h4>🛍️ 如何參與：</h4>
        <p>直接在官網下單即可享受優惠，會員登入後系統將自動套用最優惠價格。活動期間所有訂單均享免運費服務。</p>
      `
    },
    {
      slug: "autumn-experience-gift",
      date: "2024.09.01",
      title: "秋季新品體驗禮開跑",
      image: newsImage2,
      description: "首購任一美容儀即享獨家體驗組。",
      category: "最新活動",
      content: `
        <h3>🍂 秋季保養黃金期開始了！</h3>
        <p>秋天是肌膚保養的關鍵季節，ELOA 特別推出秋季新品體驗禮活動，讓您在換季時刻給肌膚最完善的呵護。</p>
        
        <h4>🎁 體驗禮內容：</h4>
        <ul>
          <li>旅行裝光彩賦活精華（15ml）- 價值NT$600</li>
          <li>專用清潔劑與保養布組合</li>
          <li>詳細使用指南手冊</li>
          <li>專業美容師線上諮詢服務（30分鐘）</li>
        </ul>
        
        <h4>💰 額外優惠：</h4>
        <p>新會員註冊再獲300元購物金，老會員推薦朋友成功註冊雙方各得200元回饋金。</p>
      `
    },
    {
      slug: "group-purchase-offer",
      date: "2024.09.06",
      title: "限時團購優惠專案",
      image: newsImage3,
      description: "3人成團享團購價75折。",
      category: "最新活動",
      content: `
        <h3>👥 ELOA 推出限時團購優惠專案</h3>
        <p>邀請您與好友一起享受更優惠的價格！越多人團購，優惠越驚人。</p>
        
        <h4>🛍️ 團購方案：</h4>
        <ul>
          <li>3人成團：享受團購價75折優惠</li>
          <li>5人成團：額外贈送價值NT$1,200的專業保養套組</li>
          <li>團長特權：享有額外10%回饋金</li>
          <li>每團限量：20組，售完為止</li>
        </ul>
        
        <h4>⏰ 活動倒數：</h4>
        <p>活動倒數計時中，錯過再等一年。立即邀請朋友一起變美！</p>
      `
    },
    {
      slug: "friend-referral-rewards",
      date: "2024.09.03",
      title: "好友分享賞雙重回饋",
      image: newsImage4,
      description: "推薦朋友成功註冊並完成首購，推薦人與被推薦人各獲得300元購物金。",
      category: "優惠專區",
      content: `
        <h3>💎 分享美麗，獲得雙重回饋！</h3>
        <p>ELOA 推出好友推薦計畫，讓您在分享美麗的同時，也能獲得實質回饋。</p>
        
        <h4>🎁 推薦獎勵：</h4>
        <ul>
          <li>推薦朋友成功註冊並完成首購，推薦人與被推薦人各獲得NT$300購物金</li>
          <li>推薦越多賺越多，無上限累積</li>
          <li>單月推薦達5人，可升級為品牌大使，享終身8折特權</li>
          <li>分享連結還可參加月抽獎活動，有機會獲得限量商品</li>
        </ul>
        
        <h4>📱 如何參與：</h4>
        <p>登入會員專區，取得專屬推薦連結，分享給朋友即可開始賺取回饋金。</p>
      `
    },
    {
      slug: "member-weekly-discount",
      date: "2024.09.06",
      title: "會員專屬週限時折扣",
      image: newsImage5,
      description: "每週一會員專屬日，指定商品享額外95折優惠。",
      category: "優惠專區",
      content: `
        <h3>👑 專屬會員的限時優惠來了！</h3>
        <p>ELOA 每週為會員精選不同商品，提供超值折扣優惠。</p>
        
        <h4>🗓️ 本週精選：</h4>
        <ul>
          <li>全系列美容儀器9折優惠</li>
          <li>保養品系列85折特價</li>
          <li>組合套裝最低75折</li>
        </ul>
        
        <h4>🎂 生日專屬：</h4>
        <p>當週壽星再享額外禮品一份，生日當月消費滿額即可參加抽獎，有機會獲得限量聯名商品。</p>
        
        <h4>ℹ️ 注意事項：</h4>
        <p>活動詳情請見官網會員專區，優惠不可與其他折扣併用。</p>
      `
    },
    {
      slug: "student-discount",
      date: "2024.08.30",
      title: "開學季學生專屬優惠",
      image: newsImage6,
      description: "憑學生證享全館商品8折優惠。",
      category: "優惠專區",
      content: `
        <h3>🎓 開學季到來，學生專屬優惠開跑！</h3>
        <p>ELOA 特別為學生族群推出專屬優惠方案，讓預算有限的學生也能享受專業美容服務。</p>
        
        <h4>📚 學生優惠內容：</h4>
        <ul>
          <li>憑有效學生證享全館商品8折優惠</li>
          <li>加購保養品再享75折超殺價格</li>
          <li>提供分期付款0利率服務（最長可分12期）</li>
          <li>免費提供校園配送服務</li>
        </ul>
        
        <h4>📋 申請條件：</h4>
        <p>活動限定大專院校在學學生，需出示有效學生證件進行身份驗證。</p>
        
        <h4>💳 付款方式：</h4>
        <p>支援信用卡分期、學生專用貸款等多種付款方式，讓您輕鬆無負擔。</p>
      `
    },
    {
      slug: "website-upgrade",
      date: "2024.08.20",
      title: "官網會員系統全面升級完成",
      image: newsImage7,
      description: "新增個人化推薦功能，根據膚質測試結果智能推薦適合的美容儀器與保養方案。",
      category: "最新消息",
      content: `
        <h3>🔄 官網會員系統全面升級完成！</h3>
        <p>經過數週的系統優化，ELOA 官網會員系統已全面升級完成，為您帶來更個人化、更智能的使用體驗。</p>
        
        <h4>🤖 新功能亮點：</h4>
        <ul>
          <li>個人化推薦系統：根據膚質測試結果智能推薦</li>
          <li>使用紀錄追蹤：清楚掌握美容進度</li>
          <li>全新介面設計：更直觀、更美觀的操作體驗</li>
          <li>系統效能提升50%：載入速度更快、操作更流暢</li>
        </ul>
        
        <h4>🔍 膚質測試功能：</h4>
        <p>透過科學化的線上測試，分析您的膚質類型，提供最適合的產品建議。</p>
        
        <h4>🙏 感謝說明：</h4>
        <p>升級期間造成的不便我們深感抱歉，感謝您的耐心等待。現在就來體驗全新的會員系統吧！</p>
      `
    },
    {
      slug: "calmie-launch",
      date: "2024.08.15",
      title: "Calmie冷敷舒緩儀正式上市",
      image: newsImage8,
      description: "專為敏感肌膚設計的溫和美容儀器。",
      category: "最新消息",
      content: `
        <h3>❄️ Calmie 冷敷舒緩儀正式上市！</h3>
        <p>ELOA 最新力作 Calmie 冷敷舒緩儀正式上市！專為敏感肌膚設計的革命性美容儀器。</p>
        
        <h4>🔬 產品特色：</h4>
        <ul>
          <li>獨家冷凍科技：溫度控制在4-8°C，有效舒緩肌膚</li>
          <li>離子導入功能：提升保養品吸收率達30%</li>
          <li>智能溫控系統：自動調節最適溫度</li>
          <li>醫療級材質：安全無刺激，適合敏感肌使用</li>
        </ul>
        
        <h4>📊 臨床實測：</h4>
        <p>經過專業皮膚科醫師臨床實測，證實能有效舒緩肌膚不適，降低過敏反應達80%。</p>
        
        <h4>🎯 早鳥優惠：</h4>
        <p>即日起開放預購，前100名享早鳥優惠價NT$12,800（原價NT$15,800）。</p>
      `
    },
    {
      slug: "spokesperson-interview",
      date: "2024.08.10",
      title: "品牌代言人李佳穎分享美容心得",
      image: newsImage9,
      description: "知名藝人李佳穎親自體驗ELOA全系列產品，分享30天使用心得。",
      category: "最新消息",
      content: `
        <h3>🌟 品牌代言人李佳穎分享美容心得</h3>
        <p>知名藝人李佳穎親自體驗 ELOA 全系列產品，分享30天使用心得與美容秘訣。</p>
        
        <h4>💫 使用感想：</h4>
        <blockquote>
          <p>"使用 ELOA 美容儀器30天後，我發現肌膚變得更加緊實有彈性。最讓我驚喜的是，連細紋都明顯淡化了！現在它已經成為我日常保養不可缺少的一部分。"</p>
        </blockquote>
        
        <h4>🎥 獨家專訪：</h4>
        <p>專訪影片將於本週五在官方YouTube頻道首播，同步釋出獨家美容教學影片，教您如何正確使用儀器達到最佳效果。</p>
        
        <h4>📋 使用清單：</h4>
        <ul>
          <li>早上：MasterIX 全效美容儀 + 光彩賦活精華</li>
          <li>晚上：Calmie 冷敷舒緩儀 + 夜間修護精華</li>
          <li>週間：CleanShot 深層清潔儀（每週2-3次）</li>
        </ul>
        
        <h4>🎬 收看資訊：</h4>
        <p>請關注 ELOA 官方社群媒體，第一時間收到專訪影片上線通知。</p>
      `
    }
  ];

  // 根據 slug 找到對應的最新消息
  const currentNews = newsData.find(item => item.slug === slug);

  // 如果找不到最新消息，顯示 404 頁面
  if (!currentNews) {
    return (
      useDocumentTitle("找不到此最新消息"),
      <section className="news-detail">
        <div className="news-detail__container">
          <div className="news-detail__not-found">
            <h1>找不到此最新消息</h1>
            <p>抱歉，您要查看的頁面不存在或已被移除。</p>
            <Link to="/news" className="news-detail__back-btn">
              返回最新消息
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    useDocumentTitle(`${currentNews.title}`),
    <section className="news-detail">
      {/* 返回按鈕 */}
      <div className="news-detail__nav">
        <Link to="/news" className="news-detail__back">
          <span className="news-detail__back-icon">←</span>
          返回最新消息
        </Link>
      </div>

      {/* 最新消息詳細內容 */}
      <div className="news-detail__container">
        <article className="news-detail__article">
          {/* 最新消息 Header */}
          <header className="news-detail__header">
            <div className="news-detail__meta">
              <span className="news-detail__date">{currentNews.date}</span>
              <span className="news-detail__category">{currentNews.category}</span>
            </div>
            <h1 className="news-detail__title">{currentNews.title}</h1>
            <p className="news-detail__description">{currentNews.description}</p>
          </header>

          {/* 最新消息圖片 */}
          <div className="news-detail__image-container">
            <img 
              src={currentNews.image} 
              alt={currentNews.title} 
              className="news-detail__image"
            />
          </div>

          {/* 最新消息內容 */}
          <div className="news-detail__content">
            <div 
              dangerouslySetInnerHTML={{ __html: currentNews.content }}
            />
          </div>

          {/* 分享與相關連結 */}
          <footer className="news-detail__footer">
            <div className="news-detail__actions">
              <Link to="/news" className="news-detail__back-btn">
                查看更多最新消息
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
};


export default NewsRouter;