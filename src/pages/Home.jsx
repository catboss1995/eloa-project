import { Link } from "react-router-dom"
import "../scss/styleHome.scss"
import { useState } from "react"
// 共用元件區
import ButtonStyle from "../components/ButtonStyle"
// primary 區
import primaryVideo from "../assets/video/bennerMv.Mp4"
import primarybg1 from "../assets/images/banner_1.png"
import primarybg2 from "../assets/images/banner2.png"
import primarybg3 from "../assets/images/banner_3.png"
import primarybg4 from "../assets/images/banner4.png"
import primarypd1 from "../assets/images/primary-1-product1.svg"
import primarypd2 from "../assets/images/primary-1-product2.svg"
import primarypd3 from "../assets/images/primary-1-product3.svg"
import primarypd4 from "../assets/images/primary-1-product4.svg"
import logo from "../assets/images/topbarlogo.png"
// promote 區
import promoteSecBg from "../assets/images/promoteSec-bg.svg"
import frontPic from "../assets/images/frontPic.svg"
import backPic from "../assets/images/backPic.svg"
// product 區
import decorate1 from "../assets/images/product-sec-bg-decorate.svg"
import decorateHuman from "../assets/images/product-sec-bg-decorate-human.svg"
import decorateProducts from "../assets/images/product-sec-bg-decorate-products.svg"
import cardProduct1 from "../assets/images/product-sec-card-product1.svg"
import cardProduct2 from "../assets/images/product-sec-card-product2.svg"
import cardProduct3 from "../assets/images/product-sec-card-product3.svg"
import cardProduct4 from "../assets/images/product-sec-card-product4.svg"
import sensitiveSkin from "../assets/images/SensitiveSkinIcon.svg"
import oilySkin from "../assets/images/OilySkinIcon.svg"
import drySkin from "../assets/images/DrySkinIcon.svg"
import combinationSkin from "../assets/images/CombinationSkinIcon.svg"
import acneSkin from "../assets/images/AcneSkinIcon.svg"
import hotSkin from "../assets/images/HotIcon.svg"
import newArrivalSkin from "../assets/images/NewArrivalIcon.svg"
import nextVector from "../assets/images/nextVector.svg"
import prevVector from "../assets/images/prevVector.svg"
// feedback 區
import avatar1 from "../assets/images/feedback-card-avatar1.svg"
import avatar2 from "../assets/images/feedback-card-avatar2.svg"
import avatar3 from "../assets/images/feedback-card-avatar3.svg"
import avatar4 from "../assets/images/feedback-card-avatar4.svg"
import avatar5 from "../assets/images/feedback-card-avatar5.svg"
import avatar6 from "../assets/images/feedback-card-avatar6.svg"
import avatar7 from "../assets/images/feedback-card-avatar7.svg"
// knowledge 區
import KnowledgeCardBG1 from "../assets/images/knowledgeCard1bg.svg"
import KnowledgeCardBG2 from "../assets/images/knowledgeCard2bg.svg"
import KnowledgeCardBG3 from "../assets/images/knowledgeCard3bg.svg"
import KnowledgeCardBG4 from "../assets/images/knowledgeCard4bg.svg"
// app 區
import appBG from "../assets/images/app-sec-bg.svg"
import appHuman from "../assets/images/app-sec-human.svg"
// campaign 區
import campaginCarousel1 from "../assets/images/campaign-carousel-1.png"
import campaginCarousel2 from "../assets/images/campaign-carousel-2.png"
import campaginCarousel3 from "../assets/images/campaign-carousel-3.jpg"



// 產品卡片區元件
const ProductSecCardButton = ({ iconUrl, iconDesc }) =>{
  return (
    <div className='product-sec-card-button'>
      <img src={iconUrl} alt="icon" className='product-sec-card-icon' />
      <div className='product-sec-card-icon-text'>{iconDesc}</div>
    </div>
  )
}

const ProductSecCard = ({ picUrl, picNameEn, picNameZh, picNameDesc1, picNameDesc2, iconUrl1, iconDesc1, iconUrl2, iconDesc2, iconUrl3, iconDesc3 })=> {
  return (
    <div className="product-sec-card">
      <div className="product-card-bg">
        <img src={picUrl} alt="product-card-pic" className="product-card-pic" />
      </div>
      <div className="product-card-desc">
        <p className="product-card-desc-en">{picNameEn}</p>
        <p className="product-card-desc-zh">{picNameZh}</p>
        <div className="product-card-buttons">
          <ProductSecCardButton iconUrl={iconUrl1} iconDesc={iconDesc1} />
          <ProductSecCardButton iconUrl={iconUrl2} iconDesc={iconDesc2} />
          <ProductSecCardButton iconUrl={iconUrl3} iconDesc={iconDesc3} />
        </div>
        <p className="product-card-desc-text">{picNameDesc1}</p>
        <p className="product-card-desc-text">{picNameDesc2}</p>
        <div className="next-buttom"><img src={nextVector} alt="next" /></div>
      </div>
    </div>
  )
}

// 顧客回應區元件
const FeedbackCard = ({ customer }) => {
  return (
    <div className="feedback-card">
      <div className="customer-info">
        <img src={customer.avatar} alt={customer.name} className="customer-avatar" />
        <p className="customer-name">{customer.name}</p>
      </div>
      <div className="customer-feedback">
        <p className="feedback-text">{customer.feedback}</p>
      </div>
    </div>
  )
}

const CustomerFeedbackCarousel = () =>{
  const customers = [
    {
      id: 1,
      avatar: avatar1,
      name: "許佳琪",
      feedback: "造型簡約又時尚，放在化妝桌上像精品一樣。每天保養變成一種享受，真的值得投資！"
    },
    {
      id: 2,
      avatar: avatar2,
      name: "吳宛蓉",
      feedback: "從沒想過家用美容儀效果可以這麼明顯！用完皮膚摸起來超滑嫩，妝也更服貼，超愛！"
    },
    {
      id: 3,
      avatar: avatar3,
      name: "張子涵",
      feedback: "剛開始只是跟風，沒想到用了之後回不去！操作直覺，效果明顯，連媽媽都想搶著用。"
    },
    {
      id: 4,
      avatar: avatar4,
      name: "林尹純",
      feedback: "操作簡單又方便，手感剛剛好，不會太重。金棕色細節超有質感，每次保養都覺得像在做高級SPA。"
    },
    {
      id: 5,
      avatar: avatar5,
      name: "李雪玲",
      feedback: "朋友推薦才下手，剛開始覺得有點貴，但用了兩週後皮膚摸起來真的細緻很多。最喜歡它的按摩模式，感覺臉變緊實了！如果可以有更多顏色選擇就更好啦～"
    },
    {
      id: 6,
      avatar: avatar6,
      name: "陳裕雯",
      feedback: "一開始只是抱著試試看的心情買，沒想到用起來比想像中方便。小巧好收納，晚上追劇的時候邊用邊放空很療癒。唯一小小缺點是充電有點慢，不過效果真的有感，妝前用完比較不會脫妝。"
    },
    {
      id: 7,
      avatar: avatar7,
      name: "王怡婷",
      feedback: "剛拿到的時候還研究了一下怎麼用，覺得說明書可以再寫得更清楚一點（笑）。但用了一週後，臉真的有比較亮，尤其敷完面膜再搭配這台，吸收感覺更好！現在我媽也會來借用，感覺快要被搶走了。"
    }

  ]
  const arrCustomers = [...customers, ...customers]
  return (
    <div className="feedback-carousel-wrapper">
      <div className="feedback-carousel-track">
        {arrCustomers.map((customer, index) => (
          <div key={`${customer.id}-${index}`} className="feedback-carousel-item">
            <FeedbackCard customer={customer} />
          </div>
        ))}
      </div>
    </div>
  )
}
// 肌膚知識區元件
const KnowledgeCard = ({content}) => {
  return (
    <div className="knowledge-card">
      <img src={content.background} alt="backgroundPicture" />
      <div className="card-text-area">
        <p className="card-text-small">{content.small}</p>
        <p className="card-text-title">{content.title}</p>
      </div>
    </div>
  )
}

const KnowledgeCardContent = () =>{
  const cardContent = [
    {
      id: 1,
      background: KnowledgeCardBG1,
      small: "不同季節環境變化大，保養方式也要跟著調整",
      title: "換季保養：秋冬、春夏肌膚護理"
    },
    {
      id: 2,
      background: KnowledgeCardBG2,
      small: "臉部按摩是最簡單、最划算的肌膚保養投資",
      title: "臉部按摩的好處與正確手法教學"
    },
    {
      id: 3,
      background: KnowledgeCardBG3,
      small: "分享正確洗臉流程、適合各膚質的洗面產品挑選",
      title: "每天洗臉的正確步驟與常見錯誤解析"
    },
    {
      id: 4,
      background: KnowledgeCardBG4,
      small: "只要掌握正確的護理原則與產品選擇",
      title: "敏感肌必看日常護理與產品挑選指南"
    },
  ]
  return (
    cardContent.map((content)=>{
      return(
        <KnowledgeCard key={content.id} content={content}/>
      )
    })    
  )
}
// 活動區元件
const ImageCarousel = () => {
  // 圖片數據
  const images = [
    {
      id: 1,
      src: campaginCarousel1,
      alt: 'ELOA Award Image',
      title: '這是什麼?'
    },
    {
      id: 2,
      src: campaginCarousel2,
      alt: 'ELOA Exhibition',
      title: '我是誰我在哪?'
    },
    {
      id: 3,
      src: campaginCarousel3,
      alt: 'ELOA Team',
      title: '你們看是傻X'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 處理輪播邏輯
  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // 計算圖片位置
  const getImagePosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(images.length - 1)) return 'right';
    if (diff === -1 || diff === images.length - 1) return 'left';
    return 'hidden';
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* 左側控制按鈕 */}
        <button 
          className="carousel-control carousel-control--left"
          onClick={goToPrev}
          disabled={isTransitioning}
        >
          <img src={prevVector} alt="nextPic" />
        </button>

        {/* 圖片容器 */}
        <div className="carousel-track">
          {images.map((image, index) => {
            const position = getImagePosition(index);
            return (
              <div
                key={image.id}
                className={`carousel-slide carousel-slide--${position} ${
                  isTransitioning ? 'carousel-slide--transitioning' : ''
                }`}
              >
                <div className="image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                  />
                  <div className="image-overlay">
                    <h3 className="image-title">{image.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 右側控制按鈕 */}
        <button 
          className="carousel-control carousel-control--right"
          onClick={goToNext}
          disabled={isTransitioning}
        >
          <img src={nextVector} alt="nextPic" />
        </button>
      </div>

      {/* 指示器 */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'indicator--active' : ''}`}
            id={`indicator${index}`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <>
      <section className='h100-vh' id="primary-sec">
        <div className="primary-1">
          <img src={logo} alt="logo" id="primary-logo" />
          <video src={primaryVideo} id="primary-video" autoPlay muted loop playsInline preload="auto"></video>
        </div>
        <div className="primary-2">
          <img src={primarybg1} alt="carousalBackground" className="primary-caroual2" />
          <article className="product-slogan">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
          <img src={primarypd1} alt="primary-product1" className="primary-product" />
        </div>
        <div className="primary-3">
          <img src={primarybg2} alt="carousalBackground" className="primary-caroual2" />
          <img src={primarypd2} alt="primary-product1" className="primary-product-left" />
          <article className="product-slogan-right">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
        </div>
        <div className="primary-4">
          <img src={primarybg3} alt="carousalBackground" className="primary-caroual2" />
          <article className="product-slogan">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
          <img src={primarypd3} alt="primary-product1" className="primary-product" />
        </div>
        <div className="primary-5">
          <img src={primarybg4} alt="carousalBackground" className="primary-caroual2" />
          <img src={primarypd4} alt="primary-product1" className="primary-product-left" />
          <article className="product-slogan-right">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
        </div>
        {/* 加加看指示器 */}
        <div className="carousel-indicators">
          <div className="indicator indicator-1"></div>
          <div className="indicator indicator-2"></div>
          <div className="indicator indicator-3"></div>
          <div className="indicator indicator-4"></div>
          <div className="indicator indicator-5"></div>
        </div>
      </section>
      <section className='h100-vh' id="promote-sec" >
        <img src={promoteSecBg} alt="promoteSecBg" id="promote-sec-bg" />
        <div className="container">
          <div className="productPic">
            <img src={backPic} alt="Master IX backPic" id="backPic" />
            <img src={frontPic} alt="Master IX frontPIc" id="frontPic" />
          </div>
          <div className="productDesc">
            <h2>Master IX</h2>
            <h3>每一道紋理，都有被逆轉的可能</h3>
            <p>當肌膚逐漸忘記年輕的模樣，</p>
            <p>ELOA Master IX 為您喚醒隱藏在深處的微光能量。</p>
            <p>以獨家脈衝導入、雙頻溫熱、智能微電波六大專業模式，</p>
            <p>由內而外重塑肌底結構，淡化紋理，提升彈性與光澤。</p>
            <Link to="/ProductInfo">
              <ButtonStyle text="了解更多"></ButtonStyle>
            </Link>
          </div>
        </div>

      </section>
      <section className="h100-vh" id="product-sec">
        <img src={decorate1} alt="bg-decorate" className="decorate" />
        <img src={decorateHuman} alt="bg-decorate-human" className="decorate" id="decorate-human" />
        <img src={decorateProducts} alt="bg-decorate-products" className="decorate" id="decorate-products" />
        <div className="product-sec-layout">
          <div className="product-sec-desc">
            <p id="product-sec-desc-sm">找出你的肌膚節奏</p>
            <p id="product-sec-desc-md">由科技引導，挑選適合你的保養儀器 <br /></p>
            <p id="product-sec-desc-xs">只需幾分鐘，透過 ELOA 肌膚檢測系統，深入了解你的肌膚狀況與保養需求。<br />我們會根據你的膚質類型、敏感程度與困擾重點，智慧推薦最適合的美容儀產品。<br /> 讓每一筆投資，都更準確有效。</p>
            <Link to="/SkinTest">
              <ButtonStyle text="立即開始分析"></ButtonStyle>
            </Link>
          </div>
          <div className="product-sec-cards-container">
            <ProductSecCard picUrl={cardProduct1} picNameEn={"ELOA Calmie"} picNameZh={"恆溫冷敷舒緩儀"} picNameDesc1={"即刻舒緩，重啟膚觸平衡。"} picNameDesc2={"智能冷凝技術改善泛紅、刺激與緊繃。"} iconUrl1={sensitiveSkin} iconDesc1={"敏感肌"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={drySkin} iconDesc3={"乾性肌"} />
            <ProductSecCard picUrl={cardProduct2} picNameEn={"ELOA Aura Clean"} picNameZh={"淨膚導出清潔儀"} picNameDesc1={"結合微震導出與淨化循環技術，"} picNameDesc2={"清除毛孔內部油脂與老廢角質，改善粉刺與粗糙膚況。"} iconUrl1={combinationSkin} iconDesc1={"混合肌"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={hotSkin} iconDesc3={"熱銷款"} />
            <ProductSecCard picUrl={cardProduct3} picNameEn={"ELOA GlowPen"} picNameZh={"智慧亮膚導入筆"} picNameDesc1={"採用微電流與紅光同步導入技術，"} picNameDesc2={"提升精華吸收效率，改善暗沉、膚色不均與乾燥細紋。"} iconUrl1={newArrivalSkin} iconDesc1={"新上市"} iconUrl2={drySkin} iconDesc2={"乾性肌"} iconUrl3={combinationSkin} iconDesc3={"混合肌"} />
            <ProductSecCard picUrl={cardProduct4} picNameEn={"ELOA CleanShot"} picNameZh={"高效粉刺清潔儀"} picNameDesc1={"結合震動吸附與熱循環深導功能，"} picNameDesc2={"迅速帶走黑白頭與油脂堆積，暢通毛孔、減少粉刺生成。"} iconUrl1={newArrivalSkin} iconDesc1={"新上市"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={acneSkin} iconDesc3={"痘痘肌"} />
          </div>
        </div>
      </section>
      <section className="h100-vh" id="feedback-sec">
        <div id="feedback-container">
          <p className="feedback-zh">”每一份美麗，都有她的故事”</p>
          <p className="feedback-en">— Behind every beauty, there's her own story.  —</p>
          <CustomerFeedbackCarousel/>
          <CustomerFeedbackCarousel/>
        </div>
      </section>
      <section className="h100-vh" id="knowledge-sec">
        <div className="text-decorate-container">
          <p className="text-decorate">Let Light Stay</p>
          <p className="text-decorate">Let Time Retreat</p>
        </div>
        <div className="knowledge-content">
          <div className="knowledge-title">
            <div className="knowledge-title-slogan">
              <p>科技再高，</p>
              <p>也要您聽得懂。</p>
            </div>
            <div className="knowledge-title-desc">
              <p>ELOA 相信，只有理解自己的肌膚與保養方式，才能真正掌握屬於妳的美肌節奏。</p>
              <p>在這裡，我們拆解專業術語、解釋使用邏輯，讓妳從知識開始，擁有可見的改變。</p>
            </div>
          </div>
          <div className="knowledge-cards">
            <KnowledgeCardContent/>
          </div>          
        </div>
        <div className="knowledge-connect">
            <Link to="/Article">
                <ButtonStyle text="肌膚知識學苑"></ButtonStyle>
            </Link>
        </div>
      </section>
      <section className="h100-vh" id="app-sec">
        <div className="text-decorate-container">
          <p className="text-decorate">Supervised & Endorsed</p>
          <p className="text-decorate">by Skin Professionals. </p>
        </div>
        <img id="app-bg" src={appBG} alt="appBackground"/>
        <div className="app-content">
          <div className="app-text-area">
            <p id="app-text-title">專業醫師 x 智慧演算</p>
            <div className="app-text-content">
              <p>我們不只製造儀器，更建立了一套由醫師與顧問監修的智慧保養系統。</p>
              <p>透過 ELOA App，將膚況與保養細節化為每日可執行的專屬建議，</p>
              <p>每一次使用，都是更理解自己肌膚的過程。</p>
            </div>
          </div>
          <div className="app-img">
            <img id="app-human" src={appHuman} alt="appDecorateHuman" />
          </div>
        </div>
      </section> 
      <section className="h100-vh" id="campaign-sec">
        <ImageCarousel/>
      </section>
    </>
  )
}

export default Home