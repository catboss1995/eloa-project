import { Link } from "react-router-dom"
import "../scss/styleHome.scss"
// primary 區
import primaryVideo from "../assets/video/bennerMv.Mp4"
import primarybg1 from "../assets/images/primary-1-bg1.svg"
import primarybg2 from "../assets/images/primary-1-bg2.svg"
import primarybg3 from "../assets/images/primary-1-bg3.svg"
import primarybg4 from "../assets/images/primary-1-bg4.svg"
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
          <article className="product-slogan">
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
          <article className="product-slogan">
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

    </>
  )
}

export default Home