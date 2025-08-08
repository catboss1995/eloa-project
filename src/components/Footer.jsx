import "../css/styleFooter.css"
import topbarLogo from "../images/topbarLogo.png"

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
            <img src="" alt="x" className="social-media-icon" />
            <img src="" alt="instagram" className="social-media-icon" />
            <img src="" alt="facebook" className="social-media-icon" />
          </div>
        </div>
        <div id="footer-right">
          <h3>網站地圖</h3>
          <a href="#">恆溫冷敷舒緩儀</a>
          <a href="#">淨膚導出清潔儀</a>
          <a href="#">智慧亮膚導入筆</a>
          <a href="#">高效粉刺清潔儀</a>
          <a href="#">肌膚知識學苑</a>
          <div id="footer-sitemap">
            <img src="" alt="member" className="footer-sitemap-icon" />
            <img src="" alt="shopCart" className="footer-sitemap-icon" />
            <img src="" alt="questions" className="footer-sitemap-icon" />
            <img src="" alt="news" className="footer-sitemap-icon" />
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