import { Link } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import "../scss/styleTopbar.scss"
import "../scss/buttonEffects.scss" 
import topbarLogo from "../assets/images/topbarLogo.png"
import topbarMember from "../assets/images/topbarMember.png"
import topbarBag from "../assets/images/topbarBag.png"
import { useCart } from "../data/CartContext"
import MemberSystem from "../data/MemberSystem"

const Topbar = () => {
  

  // 導航狀態控制
  const currentUser = MemberSystem.getCurrentUser();  
  const { state, dispatch } = useCart();
  const [scrolled, setScrolled] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false) // 新增：專門控制手機版產品選單
  
  // 產品資料
  const products = [
    { id: 1, name: "Master IX - 全效肌膚管理儀", path: "/ProductMasterIX" },
    { id: 2, name: "Calmie - 恆溫冷敷舒緩儀", path: "/ProductCalmie" },
    { id: 3, name: "Aura Clean - 淨膚導出清潔儀", path: "/ProductAuraClean" },
    { id: 4, name: "GlowPen - 智慧亮膚導入筆", path: "/ProductGLowPen" },
    { id: 5, name: "CleanShot - 高效粉刺清潔儀", path: "/ProductCleanShot" }
  ]

  // 事件處理函數
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    setScrolled(scrollPosition > 1)
  }, [])

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest('.dropdown-container')) {
      setIsProductDropdownOpen(false)
    }
    if (!event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
      setIsMobileMenuOpen(false)
      setIsMobileProductOpen(false) // 關閉手機版產品選單
    }
  }, [])

  const handleProductClick = useCallback((e) => {
    e.preventDefault()
    setIsProductDropdownOpen(prev => !prev)
  }, [])

  // 修改：專門處理手機版產品選單的開關
  const handleMobileProductClick = useCallback((e) => {
    e.stopPropagation() // 防止事件冒泡
    setIsMobileProductOpen(prev => !prev)
  }, [])

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
    // 當關閉選單時，也要關閉產品下拉
    if (isMobileMenuOpen) {
      setIsMobileProductOpen(false)
    }
  }, [isMobileMenuOpen])

  const handleMobileNavClick = useCallback(() => {
    setIsMobileMenuOpen(false)
    setIsMobileProductOpen(false)
  }, [])

  const handleCartClick = useCallback(() => {
    dispatch({type: "TOGGLE_CART"})
    setIsMobileMenuOpen(false)
    setIsMobileProductOpen(false)
  }, [dispatch])

  // 事件監聽
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // 計算購物車商品數量
  const cartItemCount = state.items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <nav className={scrolled ? "scroll" : ""}>
      <Link to="/" className="btn-effect">
        <img src={topbarLogo} alt="logo" id="topbar-logo" />
      </Link>

      <button 
        className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenuToggle}
        aria-label="選單"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="nav-right desktop-nav">
        {/* 桌面版選單 - 保持不變 */}
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

      {/* 修改後的手機版選單 */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {/* 1. 標題欄 - Logo 添加連結 */}
          <div className="mobile-menu-header">
            <Link to="/" onClick={handleMobileNavClick}>
              <img src={topbarLogo} alt="logo" className="mobile-logo" />
            </Link>
            {/* 2. 只保留一個關閉按鈕 */}
            <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}></div>
          </div>
            
          {/* 選單主體 */}
          <div className="mobile-menu-body">
            {/* 產品資訊 - 使用專門的狀態控制 */}
            <div className="mobile-menu-item" onClick={handleMobileProductClick}>
              <span>產品資訊</span>
              <span className={`mobile-arrow ${isMobileProductOpen ? 'open' : ''}`}>▼</span>
            </div>
            
            {/* 產品子選單 - 使用專門的狀態控制 */}
            {isMobileProductOpen && (
              <div className="mobile-product-list">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={product.path}
                    className="mobile-product-item"
                    onClick={handleMobileNavClick}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/skin" className="mobile-menu-item" onClick={handleMobileNavClick}>
              <span>我的膚況區</span>
            </Link>
            <Link to="/Article" className="mobile-menu-item" onClick={handleMobileNavClick}>
              <span>肌膚學苑</span>
            </Link>
            <Link to="/FQA" className="mobile-menu-item" onClick={handleMobileNavClick}>
              <span>常見問題</span>
            </Link>
            <Link to="/News" className="mobile-menu-item" onClick={handleMobileNavClick}>
              <span>最新消息</span>
            </Link>
          </div>

          {/* 3. 底部功能按鈕區域 */}
          <div className="mobile-menu-footer">
            <Link to="/Member" className="mobile-function-btn" onClick={handleMobileNavClick}>
              <div className="icon-container">
                <img src={topbarMember} alt="會員" />
              </div>
              <span>會員中心</span>
            </Link>
            <div className="mobile-function-btn" onClick={handleCartClick}>
              <div className="icon-container">
                <img src={topbarBag} alt="購物車" />
              </div>
              <span>購物車 ({cartItemCount})</span>
            </div>
          </div>
        </div>
        
        {/* 背景遮罩 */}
        <div className="mobile-menu-overlay"></div>
      </div>
    </nav>
  )
}

export default Topbar