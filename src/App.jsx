// App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom"; // 引入路由相關組件
import "./App.css"; // 引入全局樣式

import Topbar from "./components/Topbar"; // 頂部導航欄組件
import Footer from "./components/Footer"; // 頁腳組件
import ScrollToTop from "./components/ScrollToTop"; // 回到頂部按鈕組件

import Home from "./pages/Home"; // 首頁
import Article from "./pages/Article"; // 文章列表頁面
import ArticleRouter from "./pages/ArticleRouter" // 文章路由器組件
import FQA from "./pages/FQA"; // 常見問題頁面
import Member from "./pages/Member"; // 會員頁面
import News from "./pages/News"; // 新聞頁面
import NewsRouter from "./pages/NewsRouter"; // 新聞列表頁面
import ProductCalmie from "./pages/ProductCalmie"; // Calmie 產品頁面
import ProductAuraClean from "./pages/ProductAuraClean"; // Aura Clean 產品頁面
import ProductCleanShot from "./pages/ProductCleanShot"; // Clean Shot 產品頁面
import ProductGlowPen from "./pages/ProductGlowPen"; // Glow Pen 產品頁面
import ProductMasterIX from "./pages/ProductMasterIX"; // Master IX 產品頁面
import ShopCart from "./components/ShopCart"; // 購物車組件
import CheckOut from "./pages/CheckOut"; // 結帳頁面
import MemberManagement from "./pages/MemberManagement"; // 會員管理頁面
import TestPreview from "./pages/TestPreview"; // 測試用組件
import SkinRouter from "./skin/SkinRouter"; // 皮膚測試路由器組件
import { useEffect } from "react"; // 引入 useEffect 
import { CartProvider, useCart } from "./data/CartContext"; // 引入購物車上下文

// 主應用內容組件
function AppContent() {
  const { pathname } = useLocation();
  const { dispatch } = useCart();
  useEffect (()=>{
    window.scrollTo(0,0);
  },[pathname]);
  useEffect (()=>{
    dispatch({type: "CLOSE_CART"});
  },[pathname, dispatch])
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Article" element={<Article />} /> {/* 文章列表頁面 */ }
        <Route path='/article/:slug' element={<ArticleRouter/>}/> {/* 動態文章頁面 */}
        <Route path="/FQA" element={<FQA />} /> {/* 常見問題頁面 */}
        <Route path="/Member" element={<Member />} /> {/* 會員頁面 */}
        <Route path="/MemberManagement" element={<MemberManagement/>} /> {/*會員管理頁面*/}
        <Route path="/News" element={<News />} /> {/* 新聞頁面 */}
        <Route path="/news/:slug" element={<NewsRouter />} />
        <Route path="/ProductCalmie" element={<ProductCalmie />} /> {/* Calmie 產品頁面 */}
        <Route path="/ProductAuraClean" element={<ProductAuraClean />} /> {/* Aura Clean 產品頁面 */}
        <Route path="/ProductCleanShot" element={<ProductCleanShot />} /> {/* Clean Shot 產品頁面 */}
        <Route path="/ProductGlowPen" element={<ProductGlowPen />} /> {/* Glow Pen 產品頁面 */}
        <Route path="/ProductMasterIX" element={<ProductMasterIX />} /> {/* Master IX 產品頁面 */}
        <Route path="/ShopCart" element={<ShopCart />} /> {/* 購物車頁面 */}
        <Route path="/Checkout" element={<CheckOut/>} /> {/* 結帳頁面 */}
        <Route path="/skin/*" element={<SkinRouter />} /> {/* 皮膚測試路由 */}
        <Route path="/testview" element={<TestPreview />} /> {/* 測試用路由 */}
        <Route path="*" element={<Navigate to="/" replace />} /> {/* 未匹配路由重定向到首頁 */}
      </Routes>
      <Footer />
      <ScrollToTop />
      <ShopCart/>
    </>
  );
}
function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
export default App;
