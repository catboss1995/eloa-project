import { useState } from "react";
import "./../scss/ProductInfo.scss";

// 圖片
import productMain from "../assets/images/produte2.png";
import productBack from "../assets/images/produte2back.png";
import productSide from "../assets/images/produte2side.png";
import couponIcon from "../assets/images/Coupon.png";

const ProductInfo = () => {
  const [mainImg, setMainImg] = useState(productMain);
  const [quantity, setQuantity] = useState(1);

  // 複製優惠券
  const copyCoupon = () => {
    navigator.clipboard.writeText("ELOA2025");
    alert("已複製優惠碼：ELOA2025");
  };

  return (
    <div className="product-page">
      <div className="product-info">
        {/* 左邊圖片區 */}
        <div className="product-info__gallery">
          <div className="thumbs">
            <img src={productMain} alt="正面" onClick={() => setMainImg(productMain)} />
            <img src={productBack} alt="背面" onClick={() => setMainImg(productBack)} />
            <img src={productSide} alt="側面" onClick={() => setMainImg(productSide)} />
          </div>
          <img src={mainImg} alt="主圖" className="main-img" />
        </div>

        {/* 右邊資訊區 */}
        <div className="product-info__details">
          <h2 className="title">ELOA Calmié 恆溫冷敷舒緩儀</h2>
          <p className="subtitle">623人今天瀏覽過</p>
          <div className="review">
            <span>(21) 撰寫評論</span>
            <div className="stars">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
          </div>
          <p className="desc">
            即刻舒緩，重啟膚觸平衡。智能冷凝技術可降低肌膚溫度，有效改善泛紅、刺激與緊繃等不適症狀。
            特別適合敏感膚質或日曬後修護，為妳打造溫柔且即效的鎮定儀式。內建恆溫冷敷模組，
            無需冰敷、無耗材，自動啟動與定時設計，讓保養流程更直覺安心。
          </p>

          {/* 優惠券 */}
          <div className="coupon" onClick={copyCoupon}>
            <img src={couponIcon} alt="優惠券" />
          </div>

          <p className="price">售價 NT$4,980</p>

          {/* 購物操作區 */}
          <div className="actions">
            <div className="quantity">
              <span className="label">數量</span>
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
              <span className="num">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>


            <div className="buttons">
              <button className="add-cart">加入購物車</button>
              <button className="buy-now">立即購買</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
