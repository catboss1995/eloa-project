import React from 'react'
import faqBG from '../assets/images/FAQ-BG.svg' // 匯入 SVG
import faqSearchBar from '../assets/images/FAQ-Search-bar.svg' // 匯入搜尋列 SVG
const FQA = () => {
  return (
    <div>
      <h2>我是常見問題</h2>
     
      {/* 方法 2：背景圖片 */}
      <div style={{ 
        width: '300px', 
        height: '200px', 
        backgroundImage: `url(${faqBG})`, 
        backgroundSize: 'cover' 
      }}></div>
    </div>
  )
}

export default FQA