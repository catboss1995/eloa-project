import "../scss/styleFooter.scss"
import "../scss/buttonEffects.scss" // 引入按鈕效果樣式
import topbarLogo from "../assets/images/topbarLogo.png"
import xIcon from "../assets/images/xVector.svg"
import igIcon from "../assets/images/igVector.svg"
import fbIcon from "../assets/images/fbVector.svg"
import memberIcon from "../assets/images/footerMember.svg"
import shopCartIcon from "../assets/images/shopCart.svg"
import fqa from "../assets/images/fqaVector.svg"
import newsIcon from "../assets/images/news.svg"
import { Link } from "react-router-dom"
import { useCart } from "../data/CartContext"


const Footer = () => {
  const {dispatch} = useCart();
  return (
    <footer>
      <div id="ftrMain">
        <div id="leftArea">
          <img src={topbarLogo} alt="logo" id="logo" />
          <p>我們打造的不只是美容儀，</p>
          <p>而是讓每一次護膚成為進入高效狀態的啟動儀式</p>
          <p>我們相信，真正的優雅，不是妝點出來的外在，</p>
          <p>而是源自於女性對自己狀態的掌握與重視</p>
          <div id="socials">
            {/* 社交媒體圖標 */}
            <img src={xIcon} alt="x" className="socBtn fx xIcon" />
            <img src={igIcon} alt="instagram" className="socBtn fx igIcon" />
            <img src={fbIcon} alt="facebook" className="socBtn fx fbIcon" />
          </div>
        </div>
        <div id="rightArea">
          <h3>網站導覽</h3>
          <ul id="siteMap">
            <li><Link to="/ProductMasterIX" className="fx navLk">全效肌膚管理儀</Link></li>
            <li><Link to="/ProductCalmie" className="fx navLk">恆溫冷敷舒緩儀</Link></li>
            <li><Link to="/ProductAuraClean" className="fx navLk">淨膚導出清潔儀</Link></li>
            <li><Link to="/ProductGlowPen" className="fx navLk">智慧亮膚導入筆</Link></li>
            <li><Link to="/ProductCleanShot" className="fx navLk">高效粉刺清潔儀</Link></li>
            <li><Link to="/SkinTest" className="fx navLk">我的膚況區</Link></li>
            <li><Link to="/Article" className="fx navLk">肌膚知識學苑</Link></li>
          </ul> 
          <div id="tools">
            {/* 功能圖標 */}
            <Link to="/Member">
              <img src={memberIcon} alt="member" className="toolIco fx user" />
            </Link>
            <div className="cart-icon-resize" onClick={() => { dispatch({ type: "TOGGLE_CART" }) }}>
              <img src={shopCartIcon} alt="shopCart" className="toolIco fx cart" />
            </div>
            <Link to="/FQA">
              <img src={fqa} alt="questions" className="toolIco fx msg" />
            </Link>
            <Link to="/News">
              <img src={newsIcon} alt="news" className="toolIco fx news" />
            </Link>
          </div>
        </div>
      </div>
      {/* 3、4放一列：社交媒體和工具圖標在小螢幕上同一行 */}
      <div id="bottomIcons">
        <div id="socialsMobile">
          <img src={xIcon} alt="x" className="socBtn fx xIcon" />
          <img src={igIcon} alt="instagram" className="socBtn fx igIcon" />
          <img src={fbIcon} alt="facebook" className="socBtn fx fbIcon" />
        </div>
        <div id="toolsMobile">
          <Link to="/Member">
            <img src={memberIcon} alt="member" className="toolIco fx user" />
          </Link>
          <div className="cart-icon-resize" onClick={() => { dispatch({ type: "TOGGLE_CART" }) }}>
            <img src={shopCartIcon} alt="shopCart" className="toolIco fx cart" />
          </div>
          <Link to="/FQA">
            <img src={fqa} alt="questions" className="toolIco fx msg" />
          </Link>
          <Link to="/News">
            <img src={newsIcon} alt="news" className="toolIco fx news" />
          </Link>
        </div>
      </div>
      <div id="copyright">
        <p>ELOA © 2025  eloa.com</p>
      </div>
    </footer>
  )
}

export default Footer