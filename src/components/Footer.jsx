import "../scss/styleFooter.scss"
import topbarLogo from "../assets/images/topbarLogo.png"
import xIcon from "../assets/images/xVector.svg"
import igIcon from "../assets/images/igVector.svg"
import fbIcon from "../assets/images/fbVector.svg"
import memberIcon from "../assets/images/footerMember.svg"
import shopCartIcon from "../assets/images/shopCart.svg"
import fqa from "../assets/images/fqaVector.svg"
import newsIcon from "../assets/images/news.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div id="footer-main">
        <div id="footer-left">
          <img src={topbarLogo} alt="logo" id="footer-logo" />
          <p>我們打造的不只是美容儀，</p>
          <p>而是讓每一次護膚成為進入高效狀態的啟動儀式</p>
          <p>我們相信，真正的優雅，不是妝點出來的外在，</p>
          <p>而是源自於女性對自己狀態的掌握與重視</p>
          <div id="footer-social-media">
            <img src={xIcon} alt="x" className="social-media-icon" />
            <img src={igIcon} alt="instagram" className="social-media-icon" />
            <img src={fbIcon} alt="facebook" className="social-media-icon" />
          </div>
        </div>
        <div id="footer-right">
          <h3>網站地圖</h3>
          <ul id="site-map-connect">
            {/* <Link to="/ProductInfo">產品資訊</Link> */}
            <li><Link to="/ProductInfo">恆溫冷敷舒緩儀</Link></li>
            <li><Link to="/ProductInfo">淨膚導出清潔儀</Link></li>
            <li><Link to="/ProductInfo">智慧亮膚導入筆</Link></li>
            <li><Link to="/ProductInfo">高效粉刺清潔儀</Link></li>
            <li><Link to="/SkinTest">我的膚況區</Link></li>
            <li><Link to="/Article">肌膚知識學苑</Link></li>
          </ul> 
          <div id="footer-sitemap">
            <Link to="/Member"><img src={memberIcon} alt="member" className="footer-sitemap-icon" /></Link>
            <Link to="/ShopCart"><img src={shopCartIcon} alt="shopCart" className="footer-sitemap-icon" /></Link>
            <Link to="/FQA"><img src={fqa} alt="questions" className="footer-sitemap-icon" /></Link>
            <Link to="/News"><img src={newsIcon} alt="news" className="footer-sitemap-icon" /></Link>
          </div>
        </div>
      </div>
      <div id="footer-copyright">
        <p>ELOA © 2025  eloa.com</p>
      </div>
      

    </footer>
  )
}

export default Footer