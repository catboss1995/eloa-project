import "../scss/styleTopbar.scss"
import "../scss/buttonEffects.scss" // 引入按鈕效果樣式
import topbarLogo from "../assets/images/topbarLogo.png"
import topbarMember from "../assets/images/topbarMember.png"
import topbarBag from "../assets/images/topbarBag.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const Topbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const scrolling = () => {
      const scrollPosition = window.scrollY
      // 一往下滾動就改變
      setScrolled(scrollPosition > 1)
    }

    window.addEventListener("scroll", scrolling)
    return () => {
      window.removeEventListener("scroll", scrolling)
    }
  }, [])
  return (
    <nav className={scrolled ? "scroll" : ""}>
      <Link to="/" className="btn-effect">
        <img src={topbarLogo} alt="logo" id="topbar-logo" />
      </Link>

      <div className="nav-right">
        <Link to="/ProductInfo" className="text-link btn-effect nav-link">產品資訊</Link>
        <Link to="/skin" className="text-link btn-effect nav-link">我的膚況區</Link>
        <Link to="/Article" className="text-link btn-effect nav-link">肌膚學苑</Link>
        <Link to="/FQA" className="text-link btn-effect nav-link">常見問題</Link>
        <Link to="/News" className="text-link btn-effect nav-link">最新消息</Link>
        <Link to="/Member" className="btn-effect function-btn user-btn">
          <img src={topbarMember} alt="memberIcon" id="topbar-member" />
        </Link>
        <Link to="/ShopCart" className="btn-effect function-btn cart-btn">
          <img src={topbarBag} alt="bagIcon" id="topbar-bag" />
        </Link>
      </div>
    </nav>
  )
}

export default Topbar