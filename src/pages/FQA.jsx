import React from 'react'
import faqBG from '../assets/images/FAQ-BG.svg' // 匯入 SVG
const FQA = () => {
  return (
    <div>我是FQA頁</div>
  )
}

export default FQAimport React from 'react';
import FQABG from '../assets/images/FAQ-BG.svg'; // 匯入 SVG 背景

// 常見問題資料
const fqaData = [
  { id: 1, group: "產品", title: "產品有哪些功能與規格？", description: "美容儀具備清潔、導入、按摩等多種模式，可依不同肌膚需求切換；詳細規格請見商品頁或洽客服。" },
  { id: 2, group: "產品", title: "使用美容儀會有副作用嗎？", description: "產品為低刺激性設計，一般膚質可安全使用。敏感肌建議先做局部測試；若有不適請立即停用並諮詢醫師。" },
  { id: 3, group: "實體活動", title: "是否有實體活動或體驗店？", description: "不定期舉辦快閃或體驗活動（百貨、展覽等），最新地點與時間將於官網與社群公告。" },
  { id: 4, group: "線上購物", title: "線上購物有哪些付款方式？", description: "提供信用卡（VISA/MasterCard/JCB）、超商代碼/取貨付款、LINE Pay、街口、Apple Pay、Google Pay、PayPal 等。" },
  { id: 5, group: "線上購物", title: "出貨與運送需要多久？", description: "訂單成立後 1–3 個工作天出貨；宅配約 2–5 天、超取約 3–7 天，實際依物流為準。" },
  { id: 6, group: "其他", title: "如何申請退換貨？", description: "收到商品 7 天內（含假日）保持全新未拆並聯繫客服申請；確認商品狀況後辦理退款或換貨。" },
  { id: 7, group: "其他", title: "保固期限與範圍？", description: "主機享 1 年保固，非人為損壞可免費維修；耗材與配件不在保固範圍內。" },
  { id: 8, group: "其他", title: "是否提供國際運送？", description: "目前僅配送台灣地區，海外運送尚未開放。" }
];

const FQA = () => {
  return (
    <div 
      className="fqa-page" 
      style={{ backgroundImage: `url(${faqBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <h1>常見問題</h1>

      {fqaData.map(item => (
        <div key={item.id} className="faq-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FQA;
