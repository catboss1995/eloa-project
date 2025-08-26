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
// descTab 區
import tabProduct1 from "../assets/images/desc-tab-product-1.svg"
import tabProduct2 from "../assets/images/desc-tab-product-2.svg"
import tabProduct3 from "../assets/images/desc-tab-product-3.svg"
import tabSpec1 from "../assets/images/desc-tab-spec-1.svg"
import tabTeaching1 from "../assets/images/desc-tab-teaching-1.svg"
import tabTeaching2 from "../assets/images/desc-tab-teaching-2.svg"
import tabTeaching3 from "../assets/images/desc-tab-teaching-3.svg"
import tabTeaching4 from "../assets/images/desc-tab-teaching-4.svg"


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
      requestAnimationFrame(() => {
        setPicLoading(false);
      });
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
        <img key={selectedPic.id} src={selectedPic.src} alt={selectedPic.alt} className={picLoading ? "fade-out" : "fade-in"} />
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
      productSubTitle: "適合膚質：所有膚質，特別推薦敏弱肌與乾燥肌",
      productDesc1: "珍稀植萃精華｜溫和調理，改善膚色不均",
      productDesc2: "多重玻尿酸｜深層補水，強化保濕屏障",
      productDesc3: "維他命B5｜修護乾燥，增強肌膚韌性",
      productPrice: "NT$1980"
    },
    {
      id: 2,
      src: gel,
      alt: "Calmie 專用舒緩凝膠",
      productName: "Calmie 專用舒緩凝膠",
      productTitle: "升級舒緩力 x 鎮定加成感",
      productSubTitle: "專為冷敷儀設計的清爽凝膠、敏弱肌可安心使用",
      productDesc1: "洋甘菊、積雪草、玻尿酸",
      productDesc2: "質地：清爽透明凝膠，快速吸收",
      productDesc3: " ",
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
          <p className="price">加購價 {addOnProduct.productPrice}</p>
        </div>
        <div className="add-on-button">
          <GlassmorphismButton text={"加入此商品"} />
        </div>
      </div>
    ))

  )
}
// descTab 區元件
const RenderContent = ({ tabs, tabContent, activeTab }) => {
  const content = tabContent[tabs[activeTab].key];
  if (tabs[activeTab].key === 'specs') {
    return (
      <div className="tab-content specs-content">
        <div className="content-header">
          <h3>{content.title}</h3>
          <p>{content.subTitle}</p>
        </div>
        <div className="specs-layout">
          <div className="specs-image">
            <img src={content.src} alt={content.alt} />
          </div>

          <div className="spec-item">
            {content.spec.map((sp, index) => (
              <p key={index} className="spec-value">
                {sp.specification}
              </p>
            ))}
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="tab-content">
      <div className="content-header">
        <h3>{content.title}</h3>
        <p>{content.subTitle}</p>
      </div>
      <div className="steps-grid">
        {content.steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-img">
              <img src={step.src} alt={step.alt} />
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const DescTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { id: 0, label: "商品介紹", key: "product" },
    { id: 1, label: "規格說明", key: "specs" },
    { id: 2, label: "美容儀教學", key: "teaching" }
  ];

  const tabContent = {
    product: {
      title: "不只是冰敷，ELOA Calmié 能成為妳每日保養的「收尾儀式」。",
      subTitle: "無論是搭配導出後修護、保濕精華滲透後冷鎮，還是單獨舒緩泛紅敏感，都是建立穩定膚況的關鍵步驟。",
      steps: [
        {
          src: tabProduct1,
          alt: "使用順序建議",
          title: "1. 搭配 ELOA Aura Clean 使用順序建議",
          desc: "先使用 Aura Clean 導出清潔毛孔，再以 Calmié 恆溫冷敷舒緩，幫助毛孔收斂、穩定膚況，適合油性肌與粉刺肌日常保養。"
        },
        {
          src: tabProduct2,
          alt: "面膜安瓶並用",
          title: "2. 與面膜或安瓶併用",
          desc: "在冷敷前使用保濕型安瓶或舒緩面膜，冷凝溫度幫助收緊毛孔、鎮定滲透後的活性成分，加速吸收，提升安瓶功效。"
        },
        {
          src: tabProduct3,
          alt: "搭配修護霜",
          title: "3. 日曬後／醫美術後搭配修護霜",
          desc: "用於術後修復初期或戶外曝曬後，即時降低肌膚表溫，減少泛紅與灼熱感，建議搭配無酒精修護型乳霜使用。"
        }
      ]
    },
    specs: {
      title: "不只是冰敷，ELOA Calmié 能成為妳每日保養的「收尾儀式」。",
      subTitle: "無論是搭配導出後修護、保濕精華滲透後冷鎮，還是單獨舒緩泛紅敏感，都是建立穩定膚況的關鍵步驟。",
      src: tabSpec1,
      alt: "規格說明圖示",
      spec: [
        { specification: "冷敷溫度：約10~15°C（自動恆溫）" },
        { specification: "時間設計：5 分鐘智能定時" },
        { specification: "冷凝材質：醫療級鋁合金面板" },
        { specification: "充電方式：USB Type-C" },
        { specification: "重量：約90g，輕巧易攜" }
      ]
    },
    teaching: {
      title: "不只是冰敷，ELOA Calmié 能成為妳每日保養的「收尾儀式」。",
      subTitle: "無論是搭配導出後修護、保濕精華滲透後冷鎮，還是單獨舒緩泛紅敏感，都是建立穩定膚況的關鍵步驟。",
      steps: [
        {
          src: tabTeaching1,
          alt: "搭載智慧恆溫",
          title: "1. ELOA 美容儀搭載智慧恆溫",
          desc: "與安全充電設計，只需插上電源，即可快速進入預熱狀態。無需等待，讓保養從第一刻就有效率又安心"
        },
        {
          src: tabTeaching2,
          alt: "請先取下飾品",
          title: "2. 為確保導入效果，請先取下珠寶飾品",
          desc: "將肌膚清潔乾淨、擦乾，避免保養品殘留影響吸收。"
        },
        {
          src: tabTeaching3,
          alt: "保養步驟",
          title: "3. 建議依照以下四個區域進行保養操作：",
          desc: "左臉頰、右臉頰、額頭與嘴周，分區處理效果更佳。"
        },
        {
          src: tabTeaching4,
          alt: "肌膚升級",
          title: "4. 利用 1MHz 高頻射頻與紅光雙波段",
          desc: "溫和激活肌膚深層修護力，有效撫平細紋、提升緊實度，讓肌膚觸感與光澤同步升級。"
        },
      ]
    }
  }
  return (
    <div className="container">
      <div className="tabs-wrapper">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          <RenderContent tabs={tabs} tabContent={tabContent} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

const ProductInfo = () => {
  return (
    <>
      <section className="info-h100-vh" id="product-display-sec">
        <div className="display-area">
          <PicQueue />
          <DescArea />
        </div>
        <div className='add-on-area'>
          <AddOnProduct />
        </div>
      </section>
      <section className='info-h100-vh' id='desc-tab-sec'>
        <DescTab />
      </section>
    </>
  )
}

export default ProductInfo