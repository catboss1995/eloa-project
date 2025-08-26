import React, { useState } from 'react'
import "../scss/styleProductInfo.scss"
import GlassmorphismButton from '../components/GlassmorphismButton'

// display 區
import calmieFront from "../assets/images/info-calmie-front.avif"
import calmieLeft from "../assets/images/info-calmie-left.avif"
import calmieBack from "../assets/images/info-calmie-back.avif"
import coupon from "../assets/images/ProductInfo-coupon.svg"
import essence from "../assets/images/essence.svg"
import gel from "../assets/images/gel.svg"

// display 區元件
const PicQueue = () => {
  const picBoxes = [
    {
      id: 1,
      src: calmieFront,
      alt: "calmieFrontPicture"
    },
    {
      id: 2,
      src: calmieLeft,
      alt: "calmieLeftPicture"
    },
    {
      id: 3,
      src: calmieBack,
      alt: "calmieBackPicture"
    }
  ];

  const [selectedPic, setSelectedPic] = useState(picBoxes[0]);
  const [picLoading, setPicLoading] = useState(false);

  const handleClickToShowPic = (box) => {
    setPicLoading(true);
    setTimeout(() => {
      setSelectedPic(box);
      setPicLoading(false);
    }, 300);
  }

  return (
    <div className='product-pic-area'>
      <div className="product-pic-queue">
        {picBoxes.map((box) => {
          return (
            <div key={box.id} className={`product-pic-box ${selectedPic.id === box.id ? 'active' : ''}`} onClick={() => handleClickToShowPic(box)}>
              <img src={box.src} alt={box.alt} />
            </div>
          )
        })}
      </div>
      <div className="product-pic-show">
        <img key={selectedPic.id} src={selectedPic.src} alt={selectedPic.alt} className={picLoading ? "loading" : ""} />
      </div>
    </div>

  )
}
const DescArea = () => {
  const [quantity, setQuantity] = useState(1);
  const copyCoupon = () => {
    navigator.clipboard.writeText("ELOA2025");
    alert("已複製優惠碼：ELOA2025");
  };
  return (
    <div className="product-text-area">
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
        <img src={coupon} alt="優惠券" />
      </div>

      <p className="price">售價 NT$4,980</p>
      {/* 購物操作區 */}
      <div className="shopping-actions">
        <div className="quantity">
          <span className="label">數量</span>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
          <span className="num">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <div className="buttons">
          <GlassmorphismButton text={"加入購物車"} className="add-cart" />
          <GlassmorphismButton text={"立即購買"} className="but-now" />
        </div>
      </div>
    </div>
  )
}
const AddOnProduct = () => {
  const addOnProducts = [
    {
      id: 1,
      src: essence,
      alt: "光彩賦活精華",
      productName: "光彩賦活精華",
      productTitle: "重啟肌膚光澤 x 喚醒穩定能量",
      productSubTitle: " 適合膚質：所有膚質，特別推薦敏弱肌與乾燥肌",
      productDesc1: "珍稀植萃精華｜溫和調理，改善膚色不均",
      productDesc2: "多重玻尿酸｜深層補水，強化保濕屏障",
      productDesc3: "維他命B5｜修護乾燥，增強肌膚韌性",
      productPrice: "NT$1980"
    }
  ]
  return (
    addOnProducts.map((addOnProduct) => (
      <div className="add-on-card" key={addOnProduct.id}>
        <div className="add-on-pic">
          <img src={addOnProduct.src} alt={addOnProduct.alt} />
        </div>
        <div className="add-on-text">
          <p className="name">{addOnProduct.productName}</p>
          <p className="title">{addOnProduct.productTitle}</p>
          <p className="sub-title">{addOnProduct.productSubTitle}</p>
          <p className="desc">{addOnProduct.productDesc1}</p>
          <p className="desc">{addOnProduct.productDesc2}</p>
          <p className="desc">{addOnProduct.productDesc3}</p>
          <p className="price">{addOnProduct.productPrice}</p>
        </div>
        <div className="add-on-button">
          <GlassmorphismButton text={"加入此商品"} />
        </div>
      </div>
    ))

  )
}

const ProductInfo = () => {
  return (
    <section className="info-h100-vh" id="product-display-sec">
      <div className="display-area">
        <PicQueue />
        <DescArea />
      </div>

      <div className='add-on-area'>
        <AddOnProduct />
      </div>

    </section>
  )
}

export default ProductInfo