import React, { useState } from "react";
import "../scss/styleFqa.scss";                              // 匯入 SCSS
import faqSearchIcon from "../assets/images/FQA-search.svg"; // 搜尋 icon

/* 可重用的單題元件：點擊切換 .is-open，讓 SCSS 做動畫 */
const FaqItem = ({ id, question, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq__item ${open ? "is-open" : ""}`}>
      <button
        className="faq__q"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`panel-${id}`}
        type="button"
      >
        <span className="faq__qtext">{question}</span>
        <span className={`faq__chevron ${open ? "is-open" : ""}`} aria-hidden>⌄</span>
      </button>

      {/* 外層用來做 max-height 動畫 */}
      <div id={`panel-${id}`} className="faq__aWrap" role="region" aria-hidden={!open}>
        <div className="faq__a">{children}</div>
      </div>
    </div>
  );
};

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

          <FaqItem id="p1" question="如何選擇適合自己的美容儀型號？">
            先依膚況與想改善的需求挑選功能，例如清潔、導入、按摩等。建議從日常最常用的功能開始，之後再依需求升級。
          </FaqItem>

          <FaqItem id="p2" question="產品是否通過安全檢測認證？">
            我們依相關法規與國際標準進行品管與檢測，並提供保固，以確保產品的安全性與可靠性。
          </FaqItem>
        </section>

        {/* ===== 實體店鋪 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">實體店鋪</div>
          <div className="faq__divider" />

          <FaqItem id="s1" question="在台灣有專櫃或實體據點嗎？">
            目前於北中南皆有合作門市，可至「門市查詢」頁面查看地址與營業時間，歡迎到店體驗。
          </FaqItem>

          <FaqItem id="s2" question="實體店鋪提供哪些服務？">
            <div className="faq__bullets">
              <div className="faq__bullet">產品體驗與使用說明</div>
              <div className="faq__bullet">保固登記與售後服務</div>
              <div className="faq__bullet">清潔保養示範</div>
              <div className="faq__bullet">現場結帳與發票開立</div>
            </div>
          </FaqItem>
        </section>

        {/* ===== 線上購物 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">線上購物</div>
          <div className="faq__divider" />

          <FaqItem id="o1" question="線上購物如何保障支付安全？">
            本網站採用加密連線並提供多元安全支付方式，例如信用卡與行動支付等，請放心使用。
          </FaqItem>

          <FaqItem id="o2" question="下單後如何查詢訂單進度？">
            登入會員中心 → 訂單查詢，即可查看處理狀態、物流與發票資訊。
          </FaqItem>
        </section>

        {/* ===== 其他 ===== */}
        <section className="faq__group">
          <div className="faq__groupName">其他</div>
          <div className="faq__divider" />

          <FaqItem id="m1" question="如何獲得最新消息與活動？">
            追蹤我們的 Facebook / Instagram，或訂閱電子報即可第一時間收到更新。
          </FaqItem>
        </section>
      </div>

      {/* New Wave Animation */}
      <div className="faq__wave-container">
        <svg className="faq__wave" width="1920" height="488" viewBox="0 0 1920 488" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="faq__path" d="M208.863 58.998C244.123 94.1923 284.345 126.708 333.043 145.893C398.99 171.879 486.795 169.486 539.805 120.705C600.845 64.5352 635.825 8.68169 733.779 1.42916C802.848 -3.68673 884.91 20.7492 922.864 72.8109C945.392 103.702 957.808 139.558 976.506 172.45C1021.36 251.325 1097.27 270.074 1186.28 227.943C1228.79 207.825 1276.91 184.563 1321.76 198.03C1380.57 215.68 1402.76 288.596 1463.93 298.948C1497.35 304.606 1530.6 289.093 1562.65 277.823C1638.93 250.964 1670.6 309.436 1739.8 302.033C1757.16 300.182 1772.9 291.741 1789.89 287.859C1807.44 283.857 1841.82 287.874 1835.73 309.993" stroke="url(#faq_paint0_linear)" strokeWidth="1.0073" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="faq__path2" d="M212.059 76.9941C247.114 112.023 288.191 142.703 337.093 159.917C372.148 172.315 412.873 176.784 451.069 171.066C484.786 165.996 516.644 153.085 541.495 130.786C587.144 89.7838 619.17 48.6009 672.57 26.7379C690.284 19.4704 710.413 14.3846 734.093 12.0072C802.493 5.14587 883.198 26.2414 923.272 75.7753C947.249 105.432 961.245 140.717 980.538 173.564C990.426 190.447 1001.58 204.801 1013.92 216.538C1058.05 258.352 1116.35 263.408 1187.43 237.272C1209.94 228.996 1233.79 217.576 1257.58 209.135C1288.49 198.211 1321.13 194.088 1351.85 203.176C1407.35 219.803 1429.69 287.122 1487.5 297.504C1519.04 303.147 1550.45 289.59 1580.71 279.644C1652.38 256.095 1683.37 309.421 1748.48 302.048C1764.85 300.182 1779.74 292.283 1795.76 288.431C1812.31 284.459 1844.18 287.679 1839.24 307.254" stroke="url(#faq_paint1_linear)" strokeWidth="1.0073" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path className="faq__path3" d="M215.238 95.0052C250.07 129.853 292.021 158.698 341.128 173.94C376.183 184.925 416.405 188.069 453.895 181.539C487.036 175.746 518.299 162.58 543.15 140.853C588.558 101.069 621.457 60.7438 674.003 38.3843C691.512 30.9061 711.307 25.5193 734.373 22.5702C802.086 13.9334 881.508 31.7186 923.626 78.7246C949.09 107.148 964.61 141.846 984.517 174.648C994.554 191.304 1005.69 205.734 1017.88 217.742C1061.11 260.068 1117.34 267.125 1188.53 246.571C1215.5 238.792 1243.43 225.144 1271.3 214.928C1307.15 201.807 1345.96 197.654 1381.91 208.292C1434.17 223.76 1456.57 285.632 1511.03 296.03C1540.68 301.657 1570.27 290.041 1598.76 281.434C1665.82 261.181 1696.14 309.376 1757.14 302.018C1772.53 300.153 1786.56 292.765 1801.62 288.958C1817.18 285 1846.53 287.438 1842.72 304.486" stroke="url(#faq_paint2_linear)" strokeWidth="1.0073" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="faq_paint0_linear" x1="1022.65" y1="0.763672" x2="1022.65" y2="309.993" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DBCDB7"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="faq_paint1_linear" x1="1025.91" y1="10.7451" x2="1025.91" y2="307.254" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DBCDB7"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="faq_paint2_linear" x1="1029.15" y1="20.4648" x2="1029.15" y2="304.486" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DBCDB7"/>
              <stop offset="1" stopColor="white"/>
              
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default FaqPage;