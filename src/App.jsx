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
import ProductInfo from "./pages/ProductInfo";
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
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          <Route path="/skin/*" element={<SkinRouter />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </>
  );
}
export default App;
