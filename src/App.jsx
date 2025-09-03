// App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Article from "./pages/Article";
import ArticleRouter from "./pages/ArticleRouter"
import FQA from "./pages/FQA";
import Member from "./pages/Member";
import News from "./pages/News";
import NewsList from "./pages/NewsList";
import ProductCalmie from "./pages/ProductCalmie";
import ProductAuraClean from "./pages/ProductAuraClean";
import ProductCleanShot from "./pages/ProductCleanShot";
import ProductGlowPen from "./pages/ProductGlowPen";
import ProductMasterIX from "./pages/ProductMasterIX";
import ShopCart from "./components/ShopCart";
import CheckOut from "./pages/CheckOut";
import MemberManagement from "./pages/MemberManagement";

import SkinRouter from "./skin/SkinRouter";
import { useEffect } from "react";
import { CartProvider, useCart } from "./data/CartContext";

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
        <Route path="/Article" element={<Article />} />
        <Route path='/article/:slug' element={<ArticleRouter/>}/>
        <Route path="/FQA" element={<FQA />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/MemberManagement" element={<MemberManagement/>}></Route>
        <Route path="/News" element={<News />} />
        <Route path="/ProductCalmie" element={<ProductCalmie />} />
        <Route path="/ProductAuraClean" element={<ProductAuraClean />} />
        <Route path="/ProductCleanShot" element={<ProductCleanShot />} />
        <Route path="/ProductGlowPen" element={<ProductGlowPen />} />
        <Route path="/ProductMasterIX" element={<ProductMasterIX />} />
        <Route path="/ShopCart" element={<ShopCart />} />
        <Route path="/Checkout" element={<CheckOut/>} />
        <Route path="/skin/*" element={<SkinRouter />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
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
