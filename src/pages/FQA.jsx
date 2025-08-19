import React from "react";
import faqWave from "../assets/images/FAQ-BG.svg";          // 底部裝飾波浪
import "../scss/styleFqa.scss";                             // 匯入 SCSS
import faqSearchIcon from "../assets/images/FQA-search.svg";

const faqData = [
  {
    group: "產品",
    items: [
      { q: "如何選擇適合我的美容儀？", a: "依膚況與需求選擇模式與強度，建議先從溫和模式開始，詳規請參考商品頁。" },
      { q: "產品是否通過安全檢驗？", a: "均符合一般家用電器安全規範，並通過相關測試，詳情請見產品說明。" }
    ]
  },
  {
    group: "實體門市",
    items: [
      { q: "在哪裡可以實際看商品？", a: "我們在台北與台中設有體驗點，可先於官方 LINE 私訊預約。" },
      { q: "實體購物有哪些付款方式？", a: "可使用現金、信用卡與行動支付。" }
    ]
  },
  {
    group: "線上購物",
    items: [
      { q: "線上購物如何確保支付安全？", a: "本站採用 SSL 加密傳輸，並支援多元安全金流。" },
      { q: "線上購物如何查詢配送進度？", a: "出貨後會寄發追蹤碼至您的信箱與會員中心訂單頁可查詢。" }
    ]
  },
  {
    group: "其他",
    items: [
      { q: "如何得知最新消息與活動？", a: "追蹤官方 Facebook / Instagram 或訂閱電子報。" },
      { q: "台灣地區配送範圍與運費？", a: "本島滿 NT$5,000 免運，離島與偏遠地區依系統計算。" }
    ]
  }
];

const FqaPage = () => {
  return (
    <main className="faq">
      <div className="faq__container">

        {/* 標題 + 搜尋列（同一行） */}
        <div className="faq__header">
          <h1 className="faq__title">常見問題</h1>

          <div className="faq__search">
            <input type="search" placeholder="輸入字詞搜尋" />
            <img src={faqSearchIcon} alt="搜尋" className="faq__search-icon" />
          </div>
        </div>

        {/* FAQ 區塊 */}
        {faqData.map((sec) => (
          <div className="faq__section" key={sec.group}>
            <h2 className="faq__group">{sec.group}</h2>
            {sec.items.map((item, i) => (
              <div className="faq__item" key={i}>
                <div className="faq__q">{item.q}</div>
                <div className="faq__a">{item.a}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 底部裝飾波浪 */}
      <div className="faq__wave">
        <img src={faqWave} alt="" aria-hidden="true" />
      </div>
    </main>
  );
};

export default FqaPage;
