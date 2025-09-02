import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "../scss/styleTopbar.scss"
import "../scss/buttonEffects.scss" // 引入按鈕效果樣式
import topbarLogo from "../assets/images/topbarLogo.png"
import topbarMember from "../assets/images/topbarMember.png"
import topbarBag from "../assets/images/topbarBag.png"
import { useCart } from "../data/CartContext"
import MemberSystem from "../data/MemberSystem"

const Topbar = () => {
  const currentUser = MemberSystem.getCurrentUser();  
  const { state, dispatch } = useCart();
  const [scrolled, setScrolled] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  
  // 產品資料
  const products = [
    { id: 1, name: "Master IX \n全效肌膚管理儀", path: "/ProductMasterIX" },
    { id: 2, name: "Calmie \n恆溫冷敷舒緩儀", path: "/ProductCalmie" },
    { id: 3, name: "Aura Clean \n淨膚導出清潔儀", path: "/ProductAuraClean" },
    { id: 4, name: "GlowPen \n智慧亮膚導入筆", path: "/ProductGLowPen" },
    { id: 5, name: "CleanShot \n 高效粉刺清潔儀", path: "/ProductCleanShot" }
  ]

  useEffect(() => {
    const scrolling = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 1)
    }

    window.addEventListener("scroll", scrolling)
    return () => {
      window.removeEventListener("scroll", scrolling)
    }
  }, [])

  // 處理點擊外部區域關閉下拉菜單
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsProductDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleProductClick = (e) => {
    e.preventDefault() // 防止跳轉
    setIsProductDropdownOpen(!isProductDropdownOpen)
  }

  return (
    <nav className={scrolled ? "scroll" : ""}>
      <Link to="/" className="btn-effect">
        <img src={topbarLogo} alt="logo" id="topbar-logo" />
      </Link>

      <div className="nav-right">
        {/* 產品資訊下拉菜單 */}
        <div className="dropdown-container">
          <div
            className="text-link btn-effect nav-link dropdown-trigger"
            onClick={handleProductClick}
          >
            產品資訊
            <span className={`dropdown-arrow ${isProductDropdownOpen ? 'open' : ''}`}>
              ▼
            </span>
          </div>

          {isProductDropdownOpen && (
            <div className="dropdown-menu">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={product.path}
                  className="dropdown-item"
                  onClick={() => setIsProductDropdownOpen(false)}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/skin" className="text-link btn-effect nav-link">我的膚況區</Link>
        <Link to="/Article" className="text-link btn-effect nav-link">肌膚學苑</Link>
        <Link to="/FQA" className="text-link btn-effect nav-link">常見問題</Link>
        <Link to="/News" className="text-link btn-effect nav-link">最新消息</Link>
        <Link to={currentUser?"/MemberManagement":"/Member"} 
          className="btn-effect function-btn user-btn">
          <img src={topbarMember} alt="memberIcon" id="topbar-member" />
        </Link>
        <div className="btn-effect function-btn cart-btn" onClick={() => { dispatch({ type: "TOGGLE_CART" }) }}>
          <img src={topbarBag} alt="bagIcon" id="topbar-bag" />
          ({state.items.reduce((sum, i) => sum + i.qty, 0)})
        </div>
      </div>
    </nav>
  )
}
export default Topbar