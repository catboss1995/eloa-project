import "../scss/styleHome.scss"
import promoteSecBg from "../assets/images/promoteSec-bg.svg"
import frontPic from "../assets/images/frontPic.svg"
import backPic from "../assets/images/backPic.svg"
import ButtonStyle from "../components/ButtonStyle"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section className='h100-vh'></section>
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