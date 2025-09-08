import React, { useState, useEffect, useRef } from 'react'
import { useCart } from '../data/CartContext'
import "../scss/styleProductInfo.scss"
import GlassmorphismButton from '../components/GlassmorphismButton'
// display 區
import calmieFront from "../assets/images/master-front.avif"
import calmieLeft from "../assets/images/info-calmie-left.avif"
import calmieBack from "../assets/images/master-back.avif"
import coupon from "../assets/images/productInfo-coupon.svg"
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
// before-after 區
import beforePic1 from "../assets/images/1before.png"
import beforePic2 from "../assets/images/2before.png"
import beforePic3 from "../assets/images/3before.png"
import afterPic1 from "../assets/images/1after.png"
import afterPic2 from "../assets/images/2after.png"
import afterPic3 from "../assets/images/3after.png"
import beforeScroll from "../assets/images/before-scroll.png"
import afterScroll from "../assets/images/after-scroll.png"
// FAQ 區
import arrowCollapsed from "../assets/images/faq-arrow-collapsed.svg"
import arrowExpanded from "../assets/images/faq-arrow-expanded.svg"
import avatar1 from "../assets/images/feedback-card-avatar1.avif"
import avatar2 from "../assets/images/feedback-card-avatar2.avif"
import avatar3 from "../assets/images/feedback-card-avatar3.avif"
import avatar4 from "../assets/images/feedback-card-avatar4.avif"
import avatar5 from "../assets/images/feedback-card-avatar5.avif"
import avatar6 from "../assets/images/feedback-card-avatar6.avif"
import avatar7 from "../assets/images/feedback-card-avatar7.avif"
import { useNavigate } from 'react-router-dom'

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
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const product = {id:1, name:"Master IX \n 全效肌膚管理儀", price:9980, img:calmieFront, };

  return (
    <div className="product-text-area">
      <h2 className="title">ELOA Master IX  全效肌膚管理儀</h2>
      <p className="subtitle">927人今天瀏覽過</p>
      <div className="review">
        <span>(21) 撰寫評論</span>
        <div className="stars">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="star">★</span>
          ))}
        </div>
      </div>
      <p className="desc">
        每一道紋理，都有被逆轉的可能
        當肌膚逐漸忘記年輕的模樣，
        ELOA Master IX 為您喚醒隱藏在深處的微光能量。
        以獨家脈衝導入、雙頻溫熱、智能微電波六大專業模式，
        由內而外重塑肌底結構，淡化紋理，提升彈性與光澤。
      </p>

      {/* 優惠券 */}
      <div className="coupon" onClick={copyCoupon}>
        <img src={coupon} alt="優惠券" />
      </div>

      <p className="price">售價 NT$9,980</p>
      {/* 購物操作區 */}
      <div className="shopping-actions">
        <div className="quantity">
          <span className="label">數量</span>
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
          <span className="num">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
        </div>
        <div className="buttons">
          <div className="add-item" onClick={()=>{ dispatch ({type: "ADD_ITEM", payload:{...product, qty:quantity} })}}>
            <GlassmorphismButton text={"加入購物車"} className="add-cart" />
          </div>
          <div className="direct-item"  onClick={()=>{
            dispatch({type: "DIRECT_BUY", payload:{...product, qty: quantity}});
            navigate("/CheckOut");
          }}>
            <GlassmorphismButton text={"立即購買"} className="but-now" />
          </div>
        </div>
      </div>
    </div>
  )
}
const AddOnProduct = () => {
  const {dispatch} = useCart();
  const addOnProducts = [
    {
      id: 6,
      src: essence,
      alt: "光彩賦活精華",
      productName: "光彩賦活精華",
      productTitle: "重啟肌膚光澤 x 喚醒穩定能量",
      productSubTitle: "適合膚質：所有膚質，特別推薦敏弱肌與乾燥肌",
      productDesc1: "珍稀植萃精華｜溫和調理，改善膚色不均",
      productDesc2: "多重玻尿酸｜深層補水，強化保濕屏障",
      productDesc3: "維他命B5｜修護乾燥，增強肌膚韌性",
      productPrice: "NT$1980",
      price: 1980
    },
    {
      id: 7,
      src: gel,
      alt: "Calmie 專用舒緩凝膠",
      productName: "Calmie 專用舒緩凝膠",
      productTitle: "升級舒緩力 x 鎮定加成感",
      productSubTitle: "專為冷敷儀設計的清爽凝膠、敏弱肌可安心使用",
      productDesc1: "洋甘菊、積雪草、玻尿酸",
      productDesc2: "質地：清爽透明凝膠，快速吸收",
      productDesc3: " ",
      productPrice: "NT$1980",
      price: 1980
    }
  ];
  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.productName,
        price: product.price,
        img: product.src,
        qty:1
      }
    });
  }
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
        <div className="add-on-button" onClick={()=>handleAddToCart(addOnProduct)}>
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
      <div className="tab-content">
        <div className="content-header">
          <h3>{content.title}</h3>
          <p>{content.subTitle}</p>
        </div>
        <div className="specs-layout">
          <div className="specs-img">
            <img src={content.src} alt={content.alt} />
          </div>

          <div className="spec-desc">
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
      <div className="steps-cards">
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
      title: "Master IX 內建六大專業美膚模式，結合導入、溫熱、電波與智能觸控，讓妳每一天的保養，都擁有如專業沙龍般的質感與儀式感。",
      subTitle: "從日常提亮、深層導入，到高效拉提與全方位修護，滿足不同肌膚狀態、不同時刻的保養需求。",
      steps: [
        {
          src: tabProduct1,
          alt: "使用順序建議",
          title: "1. 深層導入 × 滲透激活",
          desc: "結合 EMS 微電流與中高頻溫熱，\n啟動肌膚吸收能量，讓精華直達肌底。\n提升保養滲透率，\n是每一次亮膚的起點。"
        },
        {
          src: tabProduct2,
          alt: "面膜安瓶並用",
          title: "2. 節奏輕拍 × 彈潤覺醒",
          desc: "模擬美容師手技的節奏感拍打，\n激活肌膚彈性，\n重拾飽滿與元氣光采。"
        },
        {
          src: tabProduct3,
          alt: "搭配修護霜",
          title: "3. 高效合護 × 全面修復",
          desc: "雙頻率高周波技術深入肌底，\n有效緊緻提拉、促進循環。\n溫熱流動間，重拾立體輪廓。"
        }
      ]
    },
    specs: {
      title: "以溫和熱感與微電流活絡肌膚，建立健康穩定肌本，是日常保養不可或缺的輔助能量。",
      subTitle: "輕觸切換六大模式，支援中・英・日語系，附語音音量調整與完整操作說明，新手也能輕鬆上手。",
      src: tabSpec1,
      alt: "規格說明圖示",
      spec: [
        { specification: "護理模式：6 種可切換智能模式" },
        { specification: "操作介面：觸控 + 語音支援（中英日）" },
        { specification: "電流技術：EMS 微電流" },
        { specification: "電池續航：約 1.5 小時連續使用" },
        { specification: "充電方式：USB Type-C" },
        { specification: "重量：約 120g，人體工學握柄設計" },
        { specification: "材質：ABS + 醫療級導電面板" },
      ]
    },
    teaching: {
      title: "Master IX 內建六大專業美膚模式，結合導入、溫熱、電波與智能觸控，讓妳每一天的保養，都擁有如專業沙龍般的質感與儀式感。",
      subTitle: "從日常提亮、深層導入，到高效拉提與全方位修護，滿足不同肌膚狀態、不同時刻的保養需求。",
      steps: [
        {
          src: tabTeaching1,
          alt: "搭載智慧恆溫",
          title: "1. ELOA 美容儀搭載智慧恆溫",
          desc: "與安全充電設計，只需插上電源，\n即可快速進入預熱狀態。\n無需等待，讓保養從第一刻就有效率又安心。"
        },
        {
          src: tabTeaching2,
          alt: "請先取下飾品",
          title: "2. 為確保導入效果，請先取下珠寶飾品",
          desc: "將肌膚清潔乾淨、擦乾，\n避免保養品殘留影響吸收。"
        },
        {
          src: tabTeaching3,
          alt: "保養步驟",
          title: "3. 建議依照以下四個區域進行保養操作：",
          desc: "左臉頰、右臉頰、額頭與嘴周，\n分區處理效果更佳。"
        },
        {
          src: tabTeaching4,
          alt: "肌膚升級",
          title: "4. 利用 1MHz 高頻射頻與紅光雙波段",
          desc: "溫和激活肌膚深層修護力，\n有效撫平細紋、提升緊實度，\n讓肌膚觸感與光澤同步升級。"
        },
      ]
    }
  }
  return (
    <div className="tabs-container">

      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tabs-button ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <RenderContent tabs={tabs} tabContent={tabContent} activeTab={activeTab} />
      </div>

    </div>
  );
}
// before-after 區元件
const BeforeAfterScroll = ({ beforeImg, afterImg, scrollImg }) => {
  const containerRef = useRef(null);
  const [dividerPos, setDividerPos] = useState(50); // 初始位置置中
  const [isDragging, setIsDragging] = useState(false);

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  const handleDrag = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let clientX;

    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const offsetX = clientX - rect.left;
    const newPos = (offsetX / rect.width) * 100;
    setDividerPos(Math.max(0, Math.min(100, newPos)));
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseMove={handleDrag}
      onTouchMove={handleDrag}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onTouchEnd={stopDrag}
    >
      <img src={afterImg} alt="After" className="after-img" />
      <div className="before-wrapper" style={{ width: `${dividerPos}%` }}>
        <img src={beforeImg} alt="Before" className="before-img" />
      </div>
      <div
        className="divider"
        style={{ left: `${dividerPos}%` }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className="handle">
          <img src={scrollImg} alt="handle" />
        </div>
      </div>
    </div>
  );
};
const BeforeAfterContent = ({ bfPic }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const cardRef = useRef();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }

    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 數字動畫
  useEffect(() => {
    if (isVisible) {
      let animationId;
      const duration = 2000;
      const startTime = Date.now();
      const targetValue = bfPic.effectPercent;

      const updateValue = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const newValue = (targetValue * easeProgress).toFixed(1);

        setAnimatedPercent(newValue);

        if (progress < 1) {
          animationId = requestAnimationFrame(updateValue);
        }
      };
      animationId = requestAnimationFrame(updateValue);
      return () => cancelAnimationFrame(animationId);
    } else {
      setAnimatedPercent(0);
    }
  }, [isVisible, bfPic.effectPercent]);

  return (
    <div ref={cardRef} className='effect-card'>
      <div className="effect-title">
        <div className="effect-name">{bfPic.effectName}</div>
        <div className="effect-percent">+<span>{animatedPercent}</span>%</div>
      </div>
      <div className="before-after-pics">
        <div className="before-container">
          <div className="before-title">使用前</div>
          <img src={bfPic.beforePic} alt={bfPic.beforeAlt} />
        </div>
        <div className="after-container">
          <div className="after-title">使用14天後</div>
          <img src={bfPic.afterPic} alt={bfPic.afterAlt} />
        </div>
      </div>
      <p className="bf-desc">{bfPic.bfDesc}</p>
    </div>
  );
};
const BeforeAfterCard = () => {
  const bfPics = [
    {
      id: 1,
      effectName: "水潤度提升",
      effectPercent: 35.7,
      beforePic: beforePic1,
      afterPic: afterPic1,
      beforeAlt: "before",
      afterAlt: "after",
      bfDesc: "膚觸更柔嫩，乾燥細紋不再明顯"
    },
    {
      id: 2,
      effectName: "平滑度提升",
      effectPercent: 18.6,
      beforePic: beforePic2,
      afterPic: afterPic2,
      beforeAlt: "before",
      afterAlt: "after",
      bfDesc: "角質層更新加快，毛孔與粗糙感減少。"
    },
    {
      id: 3,
      effectName: "亮澤度提升",
      effectPercent: 22.4,
      beforePic: beforePic3,
      afterPic: afterPic3,
      beforeAlt: "before",
      afterAlt: "after",
      bfDesc: "暗沉膚色逐漸被喚醒，膚色更均勻，看起來更有光澤。"
    },
  ];
  return (
    <div className="effect-container">
      {bfPics.map((bfPic) => (
        <BeforeAfterContent key={bfPic.id} bfPic={bfPic} />
      ))}
    </div>

  )
}
// qa 區元件
const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 'q1',
      question: '敏感肌可以使用嗎？',
      answer: 'A：Master IX 所使用的微電流與溫熱頻率皆為溫和等級，敏弱膚質可安心使用，建議初期使用先選擇低強度模式。'
    },
    {
      id: 'q2',
      question: '使用時會感到刺痛或不適嗎？',
      answer: 'A：不會。冷感溫度設計在舒適範圍內，不會造成冰凍感或刺痛感，大多數用戶會感到清涼舒緩。'
    },

    {
      id: 'q3',
      question: '可以天天使用嗎？',
      answer: 'A：建議每天 1~2 次，每次約 5 Daily Boost 模式適合日常使用，其餘模式可依肌膚狀況搭配週期使用，達到最佳效果。'
    },
    {
      id: 'q4',
      question: '需要搭配專用保養品嗎？',
      answer: '建議搭配無酒精、無酸類的精華液或凝膠，可提升導入效果並保護肌膚屏障。'
    },
  ];

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <>
      {faqData.map((item, index) => (
        <div key={item.id} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleExpand(item.id)}
          >
            <span className="question-text">Q{index + 1}：{item.question}</span>
            <img
              src={expandedItems[item.id] ? arrowCollapsed : arrowExpanded}
              alt={expandedItems[item.id] ? '收起' : '展開'}
              className={`arrow ${expandedItems[item.id] ? 'expanded' : 'collapsed'}`}
            />
          </div>
          <div className={`faq-answer ${expandedItems[item.id] ? 'expanded' : 'collapsed'}`}>
            <div className="answer-content">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

// feedback 區元件
const FiveStarsMaker = () => {
  return (
    <div className="stars">
      {Array(5).fill(0).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

const FeedbackStars = () => {
  const scores = [5, 4, 3, 2, 1];
  return (
    <>
      {scores.map((score, index) => (
        <div className='star-bar' key={index}>
          <div className="stars" key={index}>
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="star">
                {i < score ? "★" : "☆"}
              </span>
            ))}
          </div>
          <div className="bar" key={`${index}1`}>
          </div>
        </div>
      ))}
    </>
  )
}

const FeedbackMessage = () => {
  const customersMessages = [
    {
      id: 1,
      avatar: avatar1,
      name: "小青子",
      date: "July 7, 2025",
      feedback: "用起來超像高級美容沙龍，皮膚吸收力真的明顯提升。"
    },
    {
      id: 2,
      avatar: avatar2,
      name: "小李子",
      date: "Ausgust 8, 2025",
      feedback: "模式多但操作簡單，保養變得更有儀式感也不懶了！"
    },
    {
      id: 3,
      avatar: avatar3,
      name: "小安子",
      date: "June 6, 2025",
      feedback: "最喜歡深熱拉提的感覺，明顯感覺輪廓有提升！"
    },
    {
      id: 4,
      avatar: avatar4,
      name: "小京子",
      date: "May 20, 2025",
      feedback: "操作簡單又方便，手感剛剛好，不會太重。"
    },
    {
      id: 5,
      avatar: avatar5,
      name: "小木子",
      date: "April 4, 2025",
      feedback: "如果可以有更多顏色選擇就更好啦～"
    },
    {
      id: 6,
      avatar: avatar6,
      name: "小亮子",
      date: "March 15, 2025",
      feedback: "小巧好收納，晚上追劇的時候邊用邊放空很療癒。"
    },
    {
      id: 7,
      avatar: avatar7,
      name: "戴玉晴雯子",
      date: "January 26, 2025",
      feedback: "用了一週後，臉真的有比較亮，尤其敷完面膜再搭配這台，吸收感覺更好！"
    }

  ];
  return (
    <>
      {
        customersMessages.map((message) => (
          <div key={message.id} className="message-card">
            <img src={message.avatar} alt="會員頭像" />
            <div className="message-info">
              <p>{message.name}</p>
              <p>{message.date}</p>
            </div>
            <FiveStarsMaker />
            <p>{message.feedback}</p>
          </div>
        ))
      }
    </>
  )
}

const ProductInfo = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section:not(#product-display-sec)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);
  

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
      <section className="info-h100-vh" id="before-after-sec">
        <div className="bf-text-area">
          <p className="bf-title">美容儀使用後臉部對比</p>
          <p className="bf-desc">立即啟動肌膚逆轉計畫，緊緻、提亮一機完成。<br />14天看見效果，數萬用戶一致推薦！</p>
        </div>
        <div className="bf-effect-area">
          <BeforeAfterCard />
        </div>
      </section>
      <section className='info-h100-vh' id="bf-effect-days-sec">
        <BeforeAfterScroll beforeImg={beforeScroll} afterImg={afterScroll} scrollImg={calmieBack} />
        <div className="text-area">
          <p>皮膚由暗沉、痘疤明顯→均勻透亮，煥發健康光澤</p>
          <p>僅<span>14</span>天</p>
          <p>*ai效果圖，請勿認真</p>
        </div>
      </section>
      <section className="info-h100-vh" id="faq-sec">
        <h2>常見問題</h2>
        <FAQ />
      </section>
      <section className="info-h100-vh" id="feedback-grade-sec">
        <h2>顧客評論</h2>
        <div className='feedback-grade'>
          <FeedbackStars />
        </div>
        <GlassmorphismButton text={"登入留評價"} />
        <div className='feedback-message-area'>
          <FeedbackMessage />
        </div>
      </section>
    </>
  )
}

export default ProductInfo