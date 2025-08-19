import React from "react";
import faqWave from "../assets/images/FAQ-BG.svg";          // 底部裝飾波浪
import "../scss/styleFqa.scss";                             // 匯入 SCSS
import faqSearchIcon from "../assets/images/FQA-search.svg"; // 搜尋 icon

const FAQ = () => {
  return (
    <div className="faq">
      {/* FAQ container */}
      <div className="faq__container">

        {/* 標題 */}
        <h2 className="faq__title">常見問題</h2>

        {/* 搜尋列 */}
        <div className="faq__search">
          <input type="text" placeholder="關鍵字字詞搜尋" />
          <img src={faqSearchIcon} alt="搜尋" className="faq__search-icon" />
        </div>

        {/* FAQ 分類 - 產品 */}
        <div className="faq__group">
          <h3 className="faq__group-title">產品</h3>
          <div className="faq__item">
            <h4 className="faq__question">如何維護與保養我的美容儀器？</h4>
            <p className="faq__answer">
              建議每次使用後用乾淨的棉布擦拭，避免水分殘留。可以參考我們的產品介紹與用戶手冊，或與客服聯繫取得更完整建議。
            </p>
          </div>
          <div className="faq__item">
            <h4 className="faq__question">產品是否通過安全認證檢驗？</h4>
            <p className="faq__answer">
              是的，我們所有產品均符合國際標準並通過多項認證，例如 CE、FCC、RoHS，請安心使用。
            </p>
          </div>
        </div>

        {/* FAQ 分類 - 實體店鋪 */}
        <div className="faq__group">
          <h3 className="faq__group-title">實體店鋪</h3>
          <div className="faq__item">
            <h4 className="faq__question">在台灣有無專屬實體店鋪？</h4>
            <p className="faq__answer">
              我們目前在台北設有旗艦店，地址位於信義區。您可以在我們的官網查詢更多資訊，或聯繫客服安排到店體驗。
            </p>
          </div>
          <div className="faq__item">
            <h4 className="faq__question">實體店鋪接受哪些付款方式？</h4>
            <ul className="faq__answer">
              <li>信用卡付款</li>
              <li>行動支付</li>
              <li>銀行轉帳</li>
              <li>現金付款</li>
            </ul>
          </div>
        </div>

        {/* FAQ 分類 - 線上購物 */}
        <div className="faq__group">
          <h3 className="faq__group-title">線上購物</h3>
          <div className="faq__item">
            <h4 className="faq__question">線上購物如何保證支付安全？</h4>
            <p className="faq__answer">
              我們的網站採用 SSL 加密，並支援多種安全支付方式，例如信用卡、PayPal、Line Pay 等。
            </p>
          </div>
          <div className="faq__item">
            <h4 className="faq__question">線上購物有無退換貨保障？</h4>
            <p className="faq__answer">
              是的，我們提供七日內無條件退換貨保障，請保持產品完整與包裝，並聯繫客服申請。
            </p>
          </div>
        </div>

        {/* FAQ 分類 - 其他 */}
        <div className="faq__group">
          <h3 className="faq__group-title">其他</h3>
          <div className="faq__item">
            <h4 className="faq__question">如何得知最新的產品消息與優惠活動？</h4>
            <p className="faq__answer">
              您可以追蹤我們的 Facebook、Instagram 官方帳號或訂閱電子報，獲取最新資訊。
            </p>
          </div>
          <div className="faq__item">
            <h4 className="faq__question">台灣地區配送及運費如何計算？</h4>
            <p className="faq__answer">
              全台單筆消費滿 NT$6,000 享免運優惠，未達免運金額則酌收運費，配送由黑貓宅急便送達。
            </p>
          </div>
        </div>
      </div>

      {/* 底部波浪裝飾 */}
      <div className="faq__wave">
        <img src={faqWave} alt="FAQ Wave" />
      </div>
    </div>
  );
};

export default FAQ;
