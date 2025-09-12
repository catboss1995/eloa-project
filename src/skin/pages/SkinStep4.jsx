import { useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { useCart } from "../../data/CartContext"; // 加入這行
import GlassmorphismButton from "../../components/GlassmorphismButton"; // 若有自訂按鈕元件
import { useState } from "react";

import styles from "../../scss/SkinTest.module.scss"; // 玻璃擬態
import "../../scss/skin/_step.scss";                  // pill/btn/dots 共用
import "../../scss/skin/_step4.scss";                 // ← 本頁分段 + 版面

// 圖片
const banner = "https://ik.imagekit.io/rgyxmrxzs/skintestBanner.png?updatedAt=1757573632974";
const store = "https://ik.imagekit.io/rgyxmrxzs/skintestStore.png?updatedAt=1757573782676";
import line2 from "../../assets/images/line2.png";
import calmieFront from "../../assets/images/info-calmie-front.avif"


export default function SkinStep4() {
  const nav = useNavigate();
  const addToCart = () => nav("/ProductInfo"); // 依需要改路由
  const goReserve = () => nav("/reservation"); // 依需要改路由
  const { dispatch } = useCart();
  const [showCart, setShowCart] = useState(false);


  // 商品資訊

  const product = {id:3, name:"Calmie \n 恆溫冷膚舒緩儀", price:4980, img:calmieFront};

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload:{...product, qty:1} });
    setShowCart(true); // 顯示購物車
  };

  return (
    <div className={`step4 ${styles["skin-page"]}`}>
      {/* Section 1 */}
      <section
        className="step4-sec step4-sec--hero"
        style={{ "--hero-img": `url(${banner})` }}
      >
        <div className="step4-hero">
          <div className={`${styles["glass-box"]} ${styles["glass-box--step"]} step4-card`}>
            <img className="step4-card__product" src={product.img} alt={product.name} />
            <h3 className="step4-card__title">{product.name}</h3>
            <p className="step4-card__desc">
              結合智慧感測與多效科技，<br />
              幫助肌膚回復理想狀態，<br />
              適合希望改善暗沉、出油、乾敏膚質的您。
            </p>
            <div className="add-item" onClick={handleAddToCart}>
              <GlassmorphismButton text={"加入購物車"} className="add-cart" />
            </div>
          </div>
        </div>
        {/* 購物車彈窗範例 */}
        {showCart && (
          <div className="cart-popup">
            <div className="cart-popup__content">
              <h4>已加入購物車！</h4>
              <button onClick={() => setShowCart(false)}>關閉</button>
              {/* 這裡可放購物車內容或導向結帳 */}
            </div>
          </div>
        )}
      </section>
      {/* ...existing code... */}
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

