import React from "react";
import faqWave from "../assets/images/FAQ-BG.svg";           // 底部裝飾波浪
import "../scss/styleFqa.scss";                              // 匯入 SCSS
import faqSearchIcon from "../assets/images/FQA-search.svg"; // 搜尋 icon

const FaqPage = () => {
  return (
    <div className="faq">
      <div className="faq__container">
        {/* 標題（左）＋ 搜尋列（右） */}
        <div className="faq__header">
          <h1 className="faq__title">常見問題</h1>

          <div className="faq__searchBox">
            <img src={faqSearchIcon} alt="搜尋" className="faq__searchIcon" />
            <input type="search" placeholder="關鍵字搜尋" aria-label="搜尋關鍵字" />
          </div>
        </div>

        {/* ===== 產品 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">產品</div>
          <div className="faq__divider" />

          <div className="faq__item">
            <div className="faq__q">如何選擇適合自己的美容儀型號？</div>
            <div className="faq__a">
              先依膚況與想改善的需求挑選功能，例如清潔、導入、按摩等。建議從日常最常用的功能開始，之後再依需求升級。
            </div>
          </div>

          <div className="faq__item">
            <div className="faq__q">產品是否通過安全檢測認證？</div>
            <div className="faq__a">
              我們依相關法規與國際標準進行品管與檢測，並提供保固，以確保產品的安全性與可靠性。
            </div>
          </div>
        </section>

        {/* ===== 實體店鋪 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">實體店鋪</div>
          <div className="faq__divider" />

          <div className="faq__item">
            <div className="faq__q">在台灣有專櫃或實體據點嗎？</div>
            <div className="faq__a">
              目前於北中南皆有合作門市，可至「門市查詢」頁面查看地址與營業時間，歡迎到店體驗。
            </div>
          </div>

          <div className="faq__item">
            <div className="faq__q">實體店鋪提供哪些服務？</div>
            <div className="faq__a">
              <div className="faq__bullets">
                <div className="faq__bullet">產品體驗與使用說明</div>
                <div className="faq__bullet">保固登記與售後服務</div>
                <div className="faq__bullet">清潔保養示範</div>
                <div className="faq__bullet">現場結帳與發票開立</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 線上購物 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">線上購物</div>
          <div className="faq__divider" />

          <div className="faq__item">
            <div className="faq__q">線上購物如何保障支付安全？</div>
            <div className="faq__a">
              本網站採用加密連線並提供多元安全支付方式，例如信用卡與行動支付等，請放心使用。
            </div>
          </div>

          <div className="faq__item">
            <div className="faq__q">下單後如何查詢訂單進度？</div>
            <div className="faq__a">
              登入會員中心 → 訂單查詢，即可查看處理狀態、物流與發票資訊。
            </div>
          </div>
        </section>

        {/* ===== 其他 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">其他</div>
          <div className="faq__divider" />

          <div className="faq__item">
            <div className="faq__q">如何獲得最新消息與活動？</div>
            <div className="faq__a">
              追蹤我們的 Facebook / Instagram，或訂閱電子報即可第一時間收到更新。
            </div>
          </div>
        </section>
      </div>

      {/* 底部裝飾波浪 */}
      <div className="faq__wave">
        <img src={faqWave} alt="裝飾波浪" />
      </div>
    </div>
  );
};

export default FaqPage;
