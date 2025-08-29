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
import ProductCalmie from "./pages/ProductCalmie";
import ProductAuraClean from "./pages/ProductAuraClean";
import ProductCleanShot from "./pages/ProductCleanShot";
import ProductGlowPen from "./pages/ProductGlowPen";
import ProductMasterIX from "./pages/ProductMasterIX";
import ShopCart from "./pages/ShopCart";

import SkinRouter from "./skin/SkinRouter";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect (()=>{
    window.scrollTo(0,0);
  },[pathname]);
  return (
    <>

      <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Article" element={<Article />} />
          <Route path='/article/:slug' element={<ArticleRouter/>}/>
          <Route path="/FQA" element={<FQA />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/News" element={<News />} />
          <Route path="/ProductCalmie" element={<ProductCalmie />} />
          <Route path="/ProductAuraClean" element={<ProductAuraClean />} />
          <Route path="/ProductCleanShot" element={<ProductCleanShot />} />
          <Route path="/ProductGlowPen" element={<ProductGlowPen />} />
          <Route path="/ProductMasterIX" element={<ProductMasterIX />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          <Route path="/skin/*" element={<SkinRouter />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;
