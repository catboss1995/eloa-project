import { Link } from "react-router-dom"
import "../scss/styleHome.scss"
import { useEffect, useState } from "react"
// 共用元件區
import ButtonStyle from "../components/ButtonStyle"
// primary 區
const primaryVideo = "https://res.cloudinary.com/dmfzxhrua/video/upload/v1756198688/bennerMv_nv0tq1.mp4"
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
import frontPic from "../assets/images/frontPic.avif"
import backPic from "../assets/images/backPic.avif"
// product 區
import decorate1 from "../assets/images/product-sec-bg-decorate.svg"
import decorateHuman from "../assets/images/product-sec-bg-decorate-human.svg"
import decorateProducts from "../assets/images/product-sec-bg-decorate-products.webp"
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
import avatar1 from "../assets/images/feedback-card-avatar1.avif"
import avatar2 from "../assets/images/feedback-card-avatar2.avif"
import avatar3 from "../assets/images/feedback-card-avatar3.avif"
import avatar4 from "../assets/images/feedback-card-avatar4.avif"
import avatar5 from "../assets/images/feedback-card-avatar5.avif"
import avatar6 from "../assets/images/feedback-card-avatar6.avif"
import avatar7 from "../assets/images/feedback-card-avatar7.avif"
// knowledge 區
import KnowledgeCardBG1 from "../assets/images/knowledgeCard1bg.avif"
import KnowledgeCardBG2 from "../assets/images/knowledgeCard2bg.svg"
import KnowledgeCardBG3 from "../assets/images/knowledgeCard3bg.avif"
import KnowledgeCardBG4 from "../assets/images/knowledgeCard4bg.avif"
// app 區
import appBG from "../assets/images/app-sec-bg.svg"
import appHuman from "../assets/images/app-sec-human.svg"
// campaign 區
import campaginCarousel1 from "../assets/images/campaign-carousel-1.png"
import campaginCarousel2 from "../assets/images/campaign-carousel-2.png"
import campaginCarousel3 from "../assets/images/campaign-carousel-3.jpg"
// news & stores 區
import decorate2 from "../assets/images/news-store-decorate1.svg"
import decorate3 from "../assets/images/news-store-decorate2.svg"
import decorate4 from "../assets/images/news-store-decorate3.svg"
import decorate5 from "../assets/images/news-store-decorate4.svg"
import storeMap1 from "../assets/images/stores-map.svg"
// service 區
import circleIcon1 from "../assets/images/service-icon1.svg"
import circleIcon2 from "../assets/images/service-icon2.svg"
import circleIcon3 from "../assets/images/service-icon3.svg"
import circleIcon4 from "../assets/images/service-icon4.svg"
import circleIcon5 from "../assets/images/service-icon5.svg"
import circleIcon6 from "../assets/images/service-icon6.svg"

// 產品卡片區元件
const ProductSecCardButton = ({ iconUrl, iconDesc }) => {
  return (
    <div className='product-sec-card-button'>
      <img src={iconUrl} alt="icon" className='product-sec-card-icon' />
      <div className='product-sec-card-icon-text'>{iconDesc}</div>
    </div>
  )
}

const ProductSecCard = ({ picUrl, picNameEn, picNameZh, picNameDesc1, picNameDesc2, iconUrl1, iconDesc1, iconUrl2, iconDesc2, iconUrl3, iconDesc3 }) => {
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

const CustomerFeedbackCarousel = ({sortNum}) => {
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
      <div className="feedback-carousel-track" id={`sort-num${sortNum}`}>
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
const KnowledgeCard = ({ content }) => {
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

const KnowledgeCardContent = () => {
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
    cardContent.map((content) => {
      return (
        <KnowledgeCard key={content.id} content={content} />
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
                className={`carousel-slide carousel-slide--${position} ${isTransitioning ? 'carousel-slide--transitioning' : ''
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
            className={`indicator ${index === currentIndex ? 'indicator-active' : ''}`}
            // id={`indicator${index}`}
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

// 最新消息區與店舖資訊區元件
const NewsStrip = ({ item }) => {
  return (
    <div className="news-content">
      <div className="news-date">{item.date}</div>
      <div className="news-desc">{item.desc}</div>
    </div>
  )
}

const NewsContent = () => {
  const newsArr = [
    {
      id: 1,
      date: "2024.7.1",
      desc: "【ELOA官網會員日 獨家福利開放中】加入會員即可抽ELOA高效美容儀新品，消費滿$3,000再享專屬折扣與禮物包，快來搶先入手！"
    },
    {
      id: 2,
      date: "2024.7.1",
      desc: "【ELOA官網會員日 獨家福利開放中】加入會員即可抽ELOA高效美容儀新品，消費滿$3,000再享專屬折扣與禮物包，快來搶先入手！"
    },
    {
      id: 3,
      date: "2024.7.1",
      desc: "【ELOA官網會員日 獨家福利開放中】加入會員即可抽ELOA高效美容儀新品，消費滿$3,000再享專屬折扣與禮物包，快來搶先入手！"
    },
    {
      id: 4,
      date: "2024.7.1",
      desc: "【ELOA官網會員日 獨家福利開放中】加入會員即可抽ELOA高效美容儀新品，消費滿$3,000再享專屬折扣與禮物包，快來搶先入手！"
    },
    {
      id: 5,
      date: "2024.7.1",
      desc: "【ELOA官網會員日 獨家福利開放中】加入會員即可抽ELOA高效美容儀新品，消費滿$3,000再享專屬折扣與禮物包，快來搶先入手！"
    }
  ]

  return (
    newsArr.map((item) => {
      return (
        <NewsStrip key={item.id} item={item} />
      )
    })
  )
}

const StoreInfo = ({ storeMap, storeName, storeAddress }) => {
  return (
    <div className="store-info">
      <div className="store-map">
        <img src={storeMap} alt="storeGoogleMap" />
      </div>
      <p className="store-name">{storeName}</p>
      <p className="store-address">{storeAddress}</p>
    </div>
  )
}

// 服務保障區元件
const CircleBoxes = ({circlePath}) => {
  return (
    <div className="service-sec-icon-area">
      <svg className="draw-line" width="250" height="250" viewBox="0 0 297 297" fill="none" xmlns="http://www.w3.org/2000/svg">
        {circlePath.path1}
        {circlePath.path2}
      </svg>
      <div className="service-icon-container">
        <img src={circlePath.icon} alt="icon" className="service-icon"/>
        <p>{circlePath.desc}</p>
      </div>
    </div>
  )
}

const CircleItems = () => {
  const circlePaths = [
    {
      id : 1,
      path1 : (<path pathLength="1" d="M79.7324 54.027C78.6623 54.027 77.7509 53.7358 76.998 53.1534C76.2452 52.5663 75.6699 51.7164 75.2722 50.6037C74.8745 49.4863 74.6756 48.1368 74.6756 46.5554C74.6756 44.9834 74.8745 43.6411 75.2722 42.5284C75.6747 41.411 76.2523 40.5587 77.0051 39.9716C77.7627 39.3797 78.6718 39.0838 79.7324 39.0838C80.793 39.0838 81.6998 39.3797 82.4526 39.9716C83.2102 40.5587 83.7878 41.411 84.1855 42.5284C84.588 43.6411 84.7892 44.9834 84.7892 46.5554C84.7892 48.1368 84.5904 49.4863 84.1926 50.6037C83.7949 51.7164 83.2196 52.5663 82.4668 53.1534C81.714 53.7358 80.8025 54.027 79.7324 54.027ZM79.7324 52.4645C80.793 52.4645 81.6169 51.9531 82.204 50.9304C82.7911 49.9077 83.0847 48.4493 83.0847 46.5554C83.0847 45.2959 82.9498 44.2235 82.6799 43.3381C82.4147 42.4527 82.0312 41.7779 81.5293 41.3139C81.0321 40.8499 80.4332 40.6179 79.7324 40.6179C78.6813 40.6179 77.8598 41.1364 77.2679 42.1733C76.6761 43.2055 76.3801 44.6662 76.3801 46.5554C76.3801 47.8149 76.5127 48.8849 76.7779 49.7656C77.043 50.6463 77.4242 51.3163 77.9213 51.7756C78.4232 52.2348 79.0269 52.4645 79.7324 52.4645ZM92.6017 39.2827V53.8281H90.8404V41.1293H90.7551L87.204 43.4872V41.6974L90.8404 39.2827H92.6017Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M122.213 26.2414C151.554 19.9414 182.181 24.4071 208.502 38.8228C234.822 53.2384 255.077 76.6417 265.568 104.758C276.059 132.873 276.085 163.825 265.641 191.958C255.197 220.092 234.981 243.529 208.685 257.988C182.389 272.448 151.768 276.965 122.417 270.714C93.0663 264.463 66.9437 247.861 48.8214 223.942C30.6991 200.022 21.7869 170.382 23.7126 140.434C25.6384 110.487 38.2737 82.2317 59.3103 60.8303" fill="#5B4C39"/>),
      icon : circleIcon1,
      desc : "一年保固"
    },
    {
      id : 2,
      path1 : (<path pathLength="1" d="M80.248 54.2008C79.178 54.2008 78.2665 53.9096 77.5137 53.3272C76.7608 52.7401 76.1855 51.8902 75.7878 50.7775C75.3901 49.6601 75.1912 48.3107 75.1912 46.7292C75.1912 45.1573 75.3901 43.8149 75.7878 42.7022C76.1903 41.5848 76.7679 40.7325 77.5208 40.1454C78.2783 39.5536 79.1874 39.2576 80.248 39.2576C81.3087 39.2576 82.2154 39.5536 82.9682 40.1454C83.7258 40.7325 84.3034 41.5848 84.7012 42.7022C85.1036 43.8149 85.3049 45.1573 85.3049 46.7292C85.3049 48.3107 85.106 49.6601 84.7083 50.7775C84.3105 51.8902 83.7353 52.7401 82.9824 53.3272C82.2296 53.9096 81.3181 54.2008 80.248 54.2008ZM80.248 52.6383C81.3087 52.6383 82.1325 52.127 82.7196 51.1042C83.3068 50.0815 83.6003 48.6232 83.6003 46.7292C83.6003 45.4698 83.4654 44.3973 83.1955 43.5119C82.9303 42.6265 82.5468 41.9518 82.0449 41.4877C81.5478 41.0237 80.9488 40.7917 80.248 40.7917C79.1969 40.7917 78.3754 41.3102 77.7836 42.3471C77.1917 43.3793 76.8958 44.84 76.8958 46.7292C76.8958 47.9887 77.0284 49.0588 77.2935 49.9395C77.5587 50.8201 77.9398 51.4901 78.437 51.9494C78.9389 52.4087 79.5426 52.6383 80.248 52.6383ZM88.0037 54.002V52.7235L92.8049 47.4679C93.3683 46.8523 93.8323 46.3173 94.1969 45.8627C94.5615 45.4035 94.8314 44.9726 95.0066 44.5701C95.1865 44.1629 95.2765 43.7368 95.2765 43.2917C95.2765 42.7804 95.1534 42.3377 94.9071 41.9636C94.6657 41.5895 94.3342 41.3007 93.9128 41.0971C93.4914 40.8935 93.0179 40.7917 92.4924 40.7917C91.9337 40.7917 91.446 40.9077 91.0293 41.1397C90.6174 41.367 90.2978 41.6866 90.0705 42.0985C89.848 42.5105 89.7367 42.9934 89.7367 43.5474H88.0605C88.0605 42.6951 88.257 41.947 88.65 41.3031C89.043 40.6591 89.5781 40.1573 90.2551 39.7974C90.937 39.4376 91.7016 39.2576 92.5492 39.2576C93.4015 39.2576 94.1567 39.4376 94.8148 39.7974C95.473 40.1573 95.9891 40.6426 96.3631 41.2534C96.7372 41.8642 96.9242 42.5436 96.9242 43.2917C96.9242 43.8268 96.8271 44.35 96.633 44.8613C96.4436 45.368 96.1122 45.9338 95.6387 46.5588C95.1699 47.179 94.5189 47.9366 93.6855 48.8315L90.4185 52.3258V52.4395H97.1799V54.002H88.0037Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M123.125 26.2414C152.466 19.9414 183.094 24.4071 209.414 38.8228C235.734 53.2384 255.989 76.6417 266.48 104.758C276.971 132.873 276.997 163.825 266.553 191.958C256.109 220.092 235.893 243.529 209.597 257.988C183.301 272.448 152.68 276.965 123.329 270.714C93.9784 264.463 67.8558 247.861 49.7335 223.942C31.6112 200.022 22.699 170.382 24.6247 140.434C26.5505 110.487 39.1858 82.2317 60.2224 60.8303" fill="#5B4C39"/>),
      icon : circleIcon2,
      desc: "免費配送"
    },
    {
      id : 3,
      path1 : (<path pathLength="1" d="M80.248 54.1989C79.178 54.1989 78.2665 53.9077 77.5137 53.3253C76.7608 52.7382 76.1855 51.8883 75.7878 50.7756C75.3901 49.6581 75.1912 48.3087 75.1912 46.7273C75.1912 45.1553 75.3901 43.813 75.7878 42.7003C76.1903 41.5829 76.7679 40.7306 77.5208 40.1435C78.2783 39.5516 79.1874 39.2557 80.248 39.2557C81.3087 39.2557 82.2154 39.5516 82.9682 40.1435C83.7258 40.7306 84.3034 41.5829 84.7012 42.7003C85.1036 43.813 85.3049 45.1553 85.3049 46.7273C85.3049 48.3087 85.106 49.6581 84.7083 50.7756C84.3105 51.8883 83.7353 52.7382 82.9824 53.3253C82.2296 53.9077 81.3181 54.1989 80.248 54.1989ZM80.248 52.6364C81.3087 52.6364 82.1325 52.125 82.7196 51.1023C83.3068 50.0795 83.6003 48.6212 83.6003 46.7273C83.6003 45.4678 83.4654 44.3954 83.1955 43.5099C82.9303 42.6245 82.5468 41.9498 82.0449 41.4858C81.5478 41.0218 80.9488 40.7898 80.248 40.7898C79.1969 40.7898 78.3754 41.3082 77.7836 42.3452C77.1917 43.3774 76.8958 44.8381 76.8958 46.7273C76.8958 47.9867 77.0284 49.0568 77.2935 49.9375C77.5587 50.8182 77.9398 51.4882 78.437 51.9474C78.9389 52.4067 79.5426 52.6364 80.248 52.6364ZM92.9185 54.1989C91.981 54.1989 91.1453 54.0379 90.4114 53.7159C89.6822 53.3939 89.1022 52.9465 88.6713 52.3736C88.2452 51.7959 88.0132 51.1259 87.9753 50.3636H89.7651C89.803 50.8324 89.964 51.2372 90.248 51.5781C90.5321 51.9143 90.9038 52.1747 91.3631 52.3594C91.8224 52.544 92.3314 52.6364 92.8901 52.6364C93.5151 52.6364 94.0691 52.5275 94.552 52.3097C95.035 52.0919 95.4138 51.7888 95.6884 51.4006C95.963 51.0123 96.1003 50.5625 96.1003 50.0511C96.1003 49.5161 95.9677 49.045 95.7026 48.6378C95.4374 48.2259 95.0492 47.9039 94.5378 47.6719C94.0265 47.4399 93.4015 47.3239 92.6628 47.3239H91.498V45.7614H92.6628C93.2405 45.7614 93.7471 45.6572 94.1827 45.4489C94.623 45.2405 94.9663 44.947 95.2125 44.5682C95.4635 44.1894 95.589 43.7443 95.589 43.233C95.589 42.7405 95.4801 42.312 95.2623 41.9474C95.0444 41.5829 94.7367 41.2988 94.339 41.0952C93.946 40.8916 93.4819 40.7898 92.9469 40.7898C92.445 40.7898 91.9715 40.8821 91.5265 41.0668C91.0861 41.2467 90.7263 41.5095 90.4469 41.8551C90.1676 42.196 90.016 42.608 89.9924 43.0909H88.2878C88.3162 42.3286 88.5459 41.661 88.9767 41.0881C89.4076 40.5104 89.9711 40.0606 90.6671 39.7386C91.3678 39.4167 92.1373 39.2557 92.9753 39.2557C93.8749 39.2557 94.6467 39.438 95.2907 39.8026C95.9346 40.1624 96.4294 40.6383 96.775 41.2301C97.1207 41.822 97.2935 42.4612 97.2935 43.1477C97.2935 43.9669 97.0781 44.6652 96.6472 45.2429C96.2211 45.8205 95.641 46.2206 94.9071 46.4432V46.5568C95.8257 46.7083 96.543 47.099 97.0591 47.7287C97.5752 48.3537 97.8333 49.1278 97.8333 50.0511C97.8333 50.8419 97.6178 51.5521 97.187 52.1818C96.7608 52.8068 96.1784 53.2992 95.4398 53.6591C94.7012 54.0189 93.8607 54.1989 92.9185 54.1989Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M123.037 26.2414C152.378 19.9414 183.006 24.4071 209.326 38.8228C235.646 53.2384 255.901 76.6417 266.392 104.758C276.883 132.873 276.909 163.825 266.465 191.958C256.021 220.092 235.805 243.529 209.509 257.988C183.213 272.448 152.593 276.965 123.242 270.714C93.8905 264.463 67.7679 247.861 49.6456 223.942C31.5234 200.022 22.6111 170.382 24.5369 140.434C26.4626 110.487 39.0979 82.2317 60.1345 60.8303" fill="#5B4C39"/>),
      icon : circleIcon3,
      desc : "七天免理由退款"
    },
    {
      id : 4,
      path1 : (<path pathLength="1" d="M80.25 54.1989C79.1799 54.1989 78.2685 53.9077 77.5156 53.3253C76.7628 52.7382 76.1875 51.8883 75.7898 50.7756C75.392 49.6581 75.1932 48.3087 75.1932 46.7273C75.1932 45.1553 75.392 43.813 75.7898 42.7003C76.1922 41.5829 76.7699 40.7306 77.5227 40.1435C78.2803 39.5516 79.1894 39.2557 80.25 39.2557C81.3106 39.2557 82.2173 39.5516 82.9702 40.1435C83.7277 40.7306 84.3054 41.5829 84.7031 42.7003C85.1056 43.813 85.3068 45.1553 85.3068 46.7273C85.3068 48.3087 85.108 49.6581 84.7102 50.7756C84.3125 51.8883 83.7372 52.7382 82.9844 53.3253C82.2315 53.9077 81.3201 54.1989 80.25 54.1989ZM80.25 52.6364C81.3106 52.6364 82.1345 52.125 82.7216 51.1023C83.3087 50.0795 83.6023 48.6212 83.6023 46.7273C83.6023 45.4678 83.4673 44.3954 83.1974 43.5099C82.9323 42.6245 82.5488 41.9498 82.0469 41.4858C81.5497 41.0218 80.9508 40.7898 80.25 40.7898C79.1989 40.7898 78.3774 41.3082 77.7855 42.3452C77.1937 43.3774 76.8977 44.8381 76.8977 46.7273C76.8977 47.9867 77.0303 49.0568 77.2955 49.9375C77.5606 50.8182 77.9418 51.4882 78.4389 51.9474C78.9408 52.4067 79.5445 52.6364 80.25 52.6364ZM87.6648 51.017V49.5682L94.0568 39.4545H95.108V41.6989H94.3977L89.5682 49.3409V49.4545H98.1761V51.017H87.6648ZM94.5114 54V50.5767V49.902V39.4545H96.1875V54H94.5114Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M122.951 26.2414C152.292 19.9414 182.92 24.4071 209.24 38.8228C235.56 53.2384 255.815 76.6417 266.306 104.758C276.797 132.873 276.823 163.825 266.379 191.958C255.935 220.092 235.719 243.529 209.423 257.988C183.127 272.448 152.507 276.965 123.156 270.714C93.8046 264.463 67.682 247.861 49.5597 223.942C31.4374 200.022 22.5251 170.382 24.4509 140.434C26.3767 110.487 39.012 82.2317 60.0486 60.8303" fill="#5B4C39"/>),
      icon : circleIcon4,
      desc :"24小時發貨"
    },
    {
      id : 5,
      path1 : (<path pathLength="1" d="M80.248 54.1969C79.178 54.1969 78.2665 53.9057 77.5137 53.3233C76.7608 52.7362 76.1855 51.8863 75.7878 50.7736C75.3901 49.6562 75.1912 48.3068 75.1912 46.7253C75.1912 45.1533 75.3901 43.811 75.7878 42.6983C76.1903 41.5809 76.7679 40.7286 77.5208 40.1415C78.2783 39.5497 79.1874 39.2537 80.248 39.2537C81.3087 39.2537 82.2154 39.5497 82.9682 40.1415C83.7258 40.7286 84.3034 41.5809 84.7012 42.6983C85.1036 43.811 85.3049 45.1533 85.3049 46.7253C85.3049 48.3068 85.106 49.6562 84.7083 50.7736C84.3105 51.8863 83.7353 52.7362 82.9824 53.3233C82.2296 53.9057 81.3181 54.1969 80.248 54.1969ZM80.248 52.6344C81.3087 52.6344 82.1325 52.123 82.7196 51.1003C83.3068 50.0776 83.6003 48.6193 83.6003 46.7253C83.6003 45.4658 83.4654 44.3934 83.1955 43.508C82.9303 42.6226 82.5468 41.9479 82.0449 41.4838C81.5478 41.0198 80.9488 40.7878 80.248 40.7878C79.1969 40.7878 78.3754 41.3063 77.7836 42.3432C77.1917 43.3754 76.8958 44.8361 76.8958 46.7253C76.8958 47.9848 77.0284 49.0549 77.2935 49.9355C77.5587 50.8162 77.9398 51.4862 78.437 51.9455C78.9389 52.4048 79.5426 52.6344 80.248 52.6344ZM92.5492 54.1969C91.7158 54.1969 90.9654 54.0312 90.2978 53.6998C89.6301 53.3683 89.0951 52.9138 88.6926 52.3361C88.2902 51.7585 88.07 51.1003 88.0321 50.3617H89.7367C89.803 51.0198 90.1013 51.5643 90.6316 51.9952C91.1666 52.4213 91.8058 52.6344 92.5492 52.6344C93.1458 52.6344 93.6761 52.4947 94.1401 52.2154C94.6088 51.936 94.9758 51.5525 95.2409 51.0648C95.5108 50.5724 95.6458 50.016 95.6458 49.3958C95.6458 48.7613 95.5061 48.1955 95.2267 47.6983C94.9521 47.1964 94.5733 46.8011 94.0904 46.5123C93.6074 46.2234 93.0558 46.0766 92.4355 46.0719C91.9905 46.0672 91.5336 46.1358 91.0648 46.2779C90.5961 46.4152 90.2102 46.5927 89.9071 46.8105L88.2594 46.6117L89.1401 39.4526H96.6969V41.0151H90.6174L90.106 45.3049H90.1912C90.4895 45.0681 90.8636 44.8716 91.3134 44.7154C91.7632 44.5591 92.2319 44.481 92.7196 44.481C93.6098 44.481 94.4029 44.6941 95.0989 45.1202C95.7997 45.5416 96.3489 46.1193 96.7466 46.8532C97.1491 47.5871 97.3503 48.4251 97.3503 49.3674C97.3503 50.2954 97.142 51.124 96.7253 51.8532C96.3134 52.5776 95.7452 53.1505 95.0208 53.5719C94.2963 53.9886 93.4725 54.1969 92.5492 54.1969Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M122.864 26.2414C152.204 19.9414 182.832 24.4071 209.152 38.8228C235.472 53.2384 255.728 76.6417 266.218 104.758C276.709 132.873 276.735 163.825 266.291 191.958C255.847 220.092 235.631 243.529 209.335 257.988C183.039 272.448 152.419 276.965 123.068 270.714C93.7167 264.463 67.5941 247.861 49.4718 223.942C31.3495 200.022 22.4372 170.382 24.363 140.434C26.2888 110.487 38.9241 82.2317 59.9607 60.8303" fill="#5B4C39"/>),
      icon : circleIcon5,
      desc : "上門換貨"
    },
    {
      id : 6,
      path1 : (<path pathLength="1" d="M80.248 54.2008C79.178 54.2008 78.2665 53.9096 77.5137 53.3272C76.7608 52.7401 76.1855 51.8902 75.7878 50.7775C75.3901 49.6601 75.1912 48.3107 75.1912 46.7292C75.1912 45.1573 75.3901 43.8149 75.7878 42.7022C76.1903 41.5848 76.7679 40.7325 77.5208 40.1454C78.2783 39.5536 79.1874 39.2576 80.248 39.2576C81.3087 39.2576 82.2154 39.5536 82.9682 40.1454C83.7258 40.7325 84.3034 41.5848 84.7012 42.7022C85.1036 43.8149 85.3049 45.1573 85.3049 46.7292C85.3049 48.3107 85.106 49.6601 84.7083 50.7775C84.3105 51.8902 83.7353 52.7401 82.9824 53.3272C82.2296 53.9096 81.3181 54.2008 80.248 54.2008ZM80.248 52.6383C81.3087 52.6383 82.1325 52.127 82.7196 51.1042C83.3068 50.0815 83.6003 48.6232 83.6003 46.7292C83.6003 45.4698 83.4654 44.3973 83.1955 43.5119C82.9303 42.6265 82.5468 41.9518 82.0449 41.4877C81.5478 41.0237 80.9488 40.7917 80.248 40.7917C79.1969 40.7917 78.3754 41.3102 77.7836 42.3471C77.1917 43.3793 76.8958 44.84 76.8958 46.7292C76.8958 47.9887 77.0284 49.0588 77.2935 49.9395C77.5587 50.8201 77.9398 51.4901 78.437 51.9494C78.9389 52.4087 79.5426 52.6383 80.248 52.6383ZM92.8333 54.2008C92.2367 54.1913 91.6401 54.0777 91.0435 53.8599C90.4469 53.6421 89.9024 53.2752 89.41 52.7591C88.9176 52.2382 88.5222 51.5351 88.2239 50.6497C87.9256 49.7595 87.7765 48.6421 87.7765 47.2974C87.7765 46.0095 87.8972 44.8684 88.1387 43.8741C88.3801 42.8751 88.7305 42.0346 89.1898 41.3528C89.6491 40.6663 90.2031 40.1454 90.8517 39.7903C91.5051 39.4352 92.2414 39.2576 93.0605 39.2576C93.8749 39.2576 94.5994 39.421 95.2338 39.7477C95.873 40.0697 96.3939 40.5195 96.7963 41.0971C97.1988 41.6748 97.4592 42.34 97.5776 43.0929H95.8446C95.6837 42.4395 95.3712 41.8973 94.9071 41.4664C94.4431 41.0356 93.8276 40.8201 93.0605 40.8201C91.9337 40.8201 91.0459 41.3102 90.3972 42.2903C89.7533 43.2704 89.4289 44.6459 89.4242 46.4167H89.5378C89.803 46.0143 90.1178 45.671 90.4824 45.3869C90.8517 45.0981 91.2589 44.8755 91.704 44.7193C92.1491 44.563 92.6202 44.4849 93.1174 44.4849C93.9507 44.4849 94.713 44.6932 95.4043 45.1099C96.0956 45.5218 96.6496 46.0924 97.0662 46.8216C97.4829 47.546 97.6912 48.377 97.6912 49.3145C97.6912 50.2141 97.49 51.0379 97.0875 51.786C96.6851 52.5294 96.1193 53.1213 95.3901 53.5616C94.6657 53.9972 93.8134 54.2103 92.8333 54.2008ZM92.8333 52.6383C93.4299 52.6383 93.9649 52.4892 94.4384 52.1909C94.9166 51.8926 95.293 51.4925 95.5676 50.9906C95.847 50.4887 95.9867 49.93 95.9867 49.3145C95.9867 48.7131 95.8517 48.1663 95.5819 47.6738C95.3167 47.1767 94.9498 46.7813 94.481 46.4877C94.017 46.1942 93.4867 46.0474 92.8901 46.0474C92.4403 46.0474 92.0212 46.1374 91.633 46.3173C91.2447 46.4925 90.9038 46.734 90.6103 47.0417C90.3214 47.3495 90.0942 47.7022 89.9284 48.1C89.7627 48.493 89.6799 48.9073 89.6799 49.3429C89.6799 49.9205 89.8148 50.4603 90.0847 50.9622C90.3593 51.4641 90.7334 51.8689 91.2069 52.1767C91.6851 52.4844 92.2272 52.6383 92.8333 52.6383Z" fill="#5B4C39"/>),
      path2 : (<path pathLength="1" d="M122.776 26.2414C152.116 19.9414 182.744 24.4071 209.064 38.8228C235.384 53.2384 255.64 76.6417 266.131 104.758C276.621 132.873 276.647 163.825 266.203 191.958C255.76 220.092 235.543 243.529 209.247 257.988C182.951 272.448 152.331 276.965 122.98 270.714C93.6288 264.463 67.5062 247.861 49.3839 223.942C31.2616 200.022 22.3494 170.382 24.2751 140.434C26.2009 110.487 38.8362 82.2317 59.8728 60.8303" fill="#5B4C39"/>),
      icon : circleIcon6,
      desc : "刷卡零率"
    },
  ]
  return (
    circlePaths.map((circlePath)=>{
      return(
        <CircleBoxes key={circlePath.id} circlePath={circlePath} />
      )
    })
  )
}



const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section:not(#primary-sec)");
  
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
          <CustomerFeedbackCarousel sortNum={1}/>
          <CustomerFeedbackCarousel sortNum={2}/>
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
            <KnowledgeCardContent />
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
        <img id="app-bg" src={appBG} alt="appBackground" />
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
        <div className="campaign-text-area">
          <p className="text-decorate">CAMPAIGN</p>
          <p className="text-decorate" id="text-decorate-zh">活動</p>
        </div>
        <ImageCarousel />
        <div className="campaign-button-area">
          <Link to="/News">
            <ButtonStyle text="點我觀看"></ButtonStyle>
          </Link>
        </div>
      </section>
      <section className="h100-vh" id="news-store-sec">
        <div className="news-text-area">
          <p className="text-decorate">INFOMATION</p>
          <p className="text-decorate" id="text-decorate-zh">最新消息</p>
        </div>
        <div className="news-container">
          <NewsContent />
        </div>
        <div className="stores-container">
          <StoreInfo storeMap={storeMap1} storeName={"南京店"} storeAddress={"台南市大安區忠孝東路十段88號"} />
          <StoreInfo storeMap={storeMap1} storeName={"東京店"} storeAddress={"台東市大安區忠孝東路十段88號"} />
          <div className="store-info">
            <div className="info-container">
              <div className="info-title-box">
                <p className="info-title">店鋪情報</p>
              </div>
              <p className="info-content">歡迎前往實體銷售據點<br />
                親自體驗、諮詢、購買</p>
            </div>
          </div>
        </div>
        <div className="news-store-decorate">
          <img src={decorate2} alt="decorate" />
          <img src={decorate3} alt="decorate" />
          <img src={decorate4} alt="decorate" />
          <img src={decorate5} alt="decorate" />
          <div id="store-area">
            <p className="text-decorate">ELOA</p>
            <p className="text-decorate">STORE</p>
          </div>
        </div>

      </section>
      <section className="h100-vh" id="service-sec">
        <div className="service-sec-text-area">
          <p>服務保障</p>
          <p>您的安心，是我們的承諾</p>
          <p>SERVICE GUARANTEE</p>
        </div>
        <div className="service-sec-icon-container">
          <CircleItems/>   
        </div>
      </section>
    </>
  )
}

export default Home