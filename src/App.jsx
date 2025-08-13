import { Route, Routes } from 'react-router-dom'

import './App.css'
import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Article from "./pages/Article"
import FQA from "./pages/FQA"
import Member from "./pages/Member"
import News from "./pages/News"
import ProductInfo from "./pages/ProductInfo"
import ShopCart from "./pages/ShopCart"
import SkinTest from "./pages/SkinTest"

function App() {
  return (
    <>    
      <Topbar></Topbar>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Article' element={<Article/>}></Route>
        <Route path='/FQA' element={<FQA/>}></Route>
        <Route path='/Member' element={<Member/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/ProductInfo' element={<ProductInfo/>}></Route>
        <Route path='/ShopCart' element={<ShopCart/>}></Route>
        <Route path='/SkinTest' element={<SkinTest/>}></Route>
      </Routes>

    </>
  )
}

export default App
