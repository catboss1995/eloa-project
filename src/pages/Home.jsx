import { Link } from "react-router-dom"
import "../scss/styleHome.scss"
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
import ButtonStyle from "../components/ButtonStyle"
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


function ProductSecCardButton ({iconUrl, iconDesc}) {
  return (
    <div className='product-sec-card-button'>
      <img src={iconUrl} alt="icon" className='product-sec-card-icon' />
      <div className='product-sec-card-icon-text'>{iconDesc}</div>
    </div>
  )
}

function ProductSecCard ({picUrl, picNameEn, picNameZh, picNameDesc1, picNameDesc2,iconUrl1, iconDesc1,iconUrl2, iconDesc2,iconUrl3, iconDesc3}) {
  return(
    <div className="product-sec-card">
      <div className="product-card-bg">
        <img src={picUrl} alt="product-card-pic" className="product-card-pic" />
      </div>
      <div className="product-card-desc">
        <p className="product-card-desc-en">{picNameEn}</p>
        <p className="product-card-desc-zh">{picNameZh}</p>
        <div className="product-card-buttons">
          <ProductSecCardButton iconUrl={iconUrl1} iconDesc={iconDesc1}/>
          <ProductSecCardButton iconUrl={iconUrl2} iconDesc={iconDesc2}/>
          <ProductSecCardButton iconUrl={iconUrl3} iconDesc={iconDesc3}/>
        </div>
        <p className="product-card-desc-text">{picNameDesc1}</p>
        <p className="product-card-desc-text">{picNameDesc2}</p>
        <div className="next-buttom"><img src={nextVector} alt="next" /></div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <>
      <section className='h100-vh' id="primary-sec">
        <div className="primary-1">
          <img src={logo} alt="logo" id="primary-logo" />
          <video src={primaryVideo} id="primary-video" autoPlay muted loop playsInline preload="auto"></video>
        </div>
        <div className="primary-2">
          <img src={primarybg1} alt="carousalBackground" className="primary-caroual2"/>
          <article className="product-slogan">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
          <img src={primarypd1} alt="primary-product1" className="primary-product" />
        </div>
        <div className="primary-3">
          <img src={primarybg2} alt="carousalBackground" className="primary-caroual2"/>
          <img src={primarypd2} alt="primary-product1" className="primary-product-left" />
          <article className="product-slogan-right">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
        </div>
        <div className="primary-4">
          <img src={primarybg3} alt="carousalBackground" className="primary-caroual2"/>
          <article className="product-slogan">
            <p className="slogan-en" id="slogan-en-1">The Future of Skincare Begins With Light.</p>
            <p className="slogan-zh" id="slogan-zh-1">改寫肌膚的節奏，從這一束光開始。</p>
          </article>
          <img src={primarypd3} alt="primary-product1" className="primary-product" />
        </div>
        <div className="primary-5">
          <img src={primarybg4} alt="carousalBackground" className="primary-caroual2"/>
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
        <img src={promoteSecBg} alt="promoteSecBg" id="promote-sec-bg"/>
        <div className="container">
          <div className="productPic">
            <img src={backPic} alt="Master IX backPic" id="backPic"/>
            <img src={frontPic} alt="Master IX frontPIc" id="frontPic"/>
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
            <ProductSecCard picUrl={cardProduct1} picNameEn={"ELOA Calmie"} picNameZh={"恆溫冷敷舒緩儀"} picNameDesc1={"即刻舒緩，重啟膚觸平衡。"} picNameDesc2={"智能冷凝技術改善泛紅、刺激與緊繃。"} iconUrl1={sensitiveSkin} iconDesc1={"敏感肌"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={drySkin} iconDesc3={"乾性肌"}/>
            <ProductSecCard picUrl={cardProduct2} picNameEn={"ELOA Aura Clean"} picNameZh={"淨膚導出清潔儀"} picNameDesc1={"結合微震導出與淨化循環技術，"} picNameDesc2={"清除毛孔內部油脂與老廢角質，改善粉刺與粗糙膚況。"} iconUrl1={combinationSkin} iconDesc1={"混合肌"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={hotSkin} iconDesc3={"熱銷款"}/>
            <ProductSecCard picUrl={cardProduct3} picNameEn={"ELOA GlowPen"} picNameZh={"智慧亮膚導入筆"} picNameDesc1={"採用微電流與紅光同步導入技術，"} picNameDesc2={"提升精華吸收效率，改善暗沉、膚色不均與乾燥細紋。"} iconUrl1={newArrivalSkin} iconDesc1={"新上市"} iconUrl2={drySkin} iconDesc2={"乾性肌"} iconUrl3={combinationSkin} iconDesc3={"混合肌"}/>
            <ProductSecCard picUrl={cardProduct4} picNameEn={"ELOA CleanShot"} picNameZh={"高效粉刺清潔儀"} picNameDesc1={"結合震動吸附與熱循環深導功能，"} picNameDesc2={"迅速帶走黑白頭與油脂堆積，暢通毛孔、減少粉刺生成。"} iconUrl1={newArrivalSkin} iconDesc1={"新上市"} iconUrl2={oilySkin} iconDesc2={"油性肌"} iconUrl3={acneSkin} iconDesc3={"痘痘肌"}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home