import { useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

import styles from "../../scss/SkinTest.module.scss"; // 玻璃擬態
import "../../scss/skin/_step.scss";                  // pill/btn/dots 共用
import "../../scss/skin/_step4.scss";                 // ← 本頁分段 + 版面

// 圖片
import banner from "../../assets/images/skintestBanner.png";
import store from "../../assets/images/skintestStore.png";
import product from "../../assets/images/produte2.png";
import line2 from "../../assets/images/line2.png";


export default function SkinStep4() {
  const nav = useNavigate();
  const addToCart = () => nav("/ProductInfo"); // 依需要改路由
  const goReserve = () => nav("/reservation"); // 依需要改路由

  return (
    <div className={`step4 ${styles["skin-page"]}`}>
      {/* Section 1：上區 1080x1980（桌面）—— 右側人物 + 玻璃卡片 */}
      <section
        className="step4-sec step4-sec--hero"
        style={{ "--hero-img": `url(${banner})` }}
      >
        <div className="step4-hero">
          {/* 玻璃卡片（沿用 SkinTest.module.scss 外觀） */}
          <div className={`${styles["glass-box"]} ${styles["glass-box--step"]} step4-card`}>
            <img className="step4-card__product" src={product} alt="ELOA Calmié 恆溫冷敷舒緩儀" />

            <h3 className="step4-card__title">ELOA Calmié 恆溫冷敷舒緩儀</h3>
            <p className="step4-card__desc">
              結合智慧感測與多效科技，<br />
              幫助肌膚回復理想狀態，<br />
              適合希望改善暗沉、出油、乾敏膚質的您。
            </p>

            <button className="btn-next" onClick={addToCart}>
              新增購物車 <GoChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2：中區 1080x1980（桌面）—— 標題＋說明文字 */}
      <section className="step4-sec step4-sec--intro">
        <div className="step4-intro">
          <h2 className="skin-card__title">預約專屬您的肌膚體驗</h2>
          
          <div className="line-wrap">
            <img src={line2} alt="裝飾線條" />
          </div>

          <p className="step4-intro__desc">
            根據您的檢測結果，ELOA 已為您挑選出最適合的美容儀器與保養建議。<br />
            邀請您親臨門市，由專業顧問為您提供一對一肌膚諮詢與體驗服務，<br />
            親身感受科技保養帶來的煥膚能量！
          </p>
        </div>
      </section>

      {/* Section 3：下區 1080x1980（桌面）—— 門市圖片＋圓形 CTA */}
      <section className="step4-sec step4-sec--store">


        <div className="step4-store__imgWrap">
          <img className="step4-store__img" src={store} alt="ELOA 門市" />
          <button className="step4-store__fab" onClick={goReserve}>
            立即預約
            <br />
            門市體驗
          </button>
        </div>
      </section>
    </div>
  );
}
