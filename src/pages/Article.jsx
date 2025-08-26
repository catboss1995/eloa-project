import { animate, scroll, inView, stagger } from "motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
// 引入 SCSS 樣式
import "../scss/styleAcademy.scss";
// 引入文章數據
import articlesData from '../data/articlesData';

// 直接使用 CDN URL 替代本地圖片路徑
const articlesPic01 = "https://ik.imagekit.io/8sle6rwoo/articlesPic01.png";
const articlesPic02 = "https://ik.imagekit.io/8sle6rwoo/articlesPic02.png";
const articlesPic03 = "https://ik.imagekit.io/8sle6rwoo/articlesPic03.png";
const articlesPic04 = "https://ik.imagekit.io/8sle6rwoo/articlesPic04.png";
const articlesPic05 = "https://ik.imagekit.io/8sle6rwoo/articlesPic05.png";
const articlesPic06 = "https://ik.imagekit.io/8sle6rwoo/articlesPic06.png";

// 圖片映射表
const imageMap = {
  1: articlesPic01,
  2: articlesPic02,
  3: articlesPic03,
  4: articlesPic04,
  5: articlesPic05,
  6: articlesPic06
};

const Article = () => {
  // 搜尋相關狀態
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // 創建引用來追蹤DOM元素
  const searchRef = useRef(null);
  const centerBoxRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const navWrapRef = useRef(null);
  const articleCardsRef = useRef([]);
  const sectionHeadersRef = useRef([]);

  // 重置引用數組
  articleCardsRef.current = [];
  sectionHeadersRef.current = [];

  // 使用從數據文件導入的文章數據
  const allArticles = articlesData.map(article => ({
    ...article,
    imgUrl: imageMap[article.id],
    reverse: article.id % 2 === 0 // 偶數ID的文章使用反向佈局
  }));

  // 根據分類分組文章
  const articles = allArticles.filter(article => article.id <= 2);
  const articles02 = allArticles.filter(article => article.id > 2 && article.id <= 4);
  const articles03 = allArticles.filter(article => article.id > 4);

  // 搜尋和篩選功能
  useEffect(() => {
    if (searchTerm || activeFilter) {
      setIsSearching(true);
      
      let results = allArticles;
      
      // 關鍵字搜尋
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        results = results.filter(article => 
          article.title.toLowerCase().includes(term) || 
          article.description.toLowerCase().includes(term) ||
          article.keywords.some(keyword => keyword.toLowerCase().includes(term))
        );
      }
      
      // 分類篩選
      if (activeFilter) {
        results = results.filter(article => article.category === activeFilter);
      }
      
      setFilteredArticles(results);
    } else {
      setIsSearching(false);
    }
  }, [searchTerm, activeFilter]);

  // 處理點擊外部區域收起搜尋框
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target) && showSearchInput) {
        setShowSearchInput(false);
        if (searchTerm === '') {
          setIsSearching(false);
        }
      }
    }
    
    // 添加全局點擊事件監聽器
    document.addEventListener("mousedown", handleClickOutside);
    
    // 清理函數
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearchInput, searchTerm]);

  // 處理搜尋按鈕點擊
  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
    if (!showSearchInput) {
      setActiveFilter('');
    } else {
      setSearchTerm('');
    }
  };

  // 處理分類篩選點擊
  const handleFilterClick = (category) => {
    if (activeFilter === category) {
      setActiveFilter('');
    } else {
      setActiveFilter(category);
      setShowSearchInput(false);
      setSearchTerm('');
    }
  };

  // 處理搜尋輸入
  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // 如果搜尋詞被清空，自動收起搜尋框
    if (value === '') {
      // 設置一個短暫的延遲，讓用戶有時間看到輸入框被清空
      setTimeout(() => {
        setShowSearchInput(false);
      }, 300);
    }
  };

  // 添加卡片引用的函數
  const addToRefs = (el) => {
    if (el && !articleCardsRef.current.includes(el)) {
      articleCardsRef.current.push(el);
    }
  };

  // 添加區塊標題引用的函數
  const addToHeaderRefs = (el) => {
    if (el && !sectionHeadersRef.current.includes(el)) {
      sectionHeadersRef.current.push(el);
    }
  };

  // 渲染文章卡片
  const renderArticleCard = (article) => (
    <div 
      key={article.id} 
      className={`articleCard ${article.reverse ? 'reverse' : ''}`}
      ref={addToRefs}
    >
      <div className="cardText">
        <h4 className="cardTitle">{article.title}</h4>
        <p className="cardDesc">{article.description}</p>
        <Link to={`/article/${article.slug}`} className="readBtn">閱讀文章</Link>
      </div>
      <div className="cardImg" style={{"--bg-image": `url(${article.imgUrl})`}}>
        <div className="imgOverflow" style={{backgroundImage: `url(${article.imgUrl})`}}></div>
      </div>
    </div>
  );

  // 頁面載入動畫
  useEffect(() => {
    // 中央標題動畫
    if (centerBoxRef.current) {
      animate(
        centerBoxRef.current, 
        { opacity: [0, 1], y: [-80, 0] }, 
        { duration: 1.2, easing: [0.17, 0.55, 0.55, 1] }
      );
    }

    // 左側文字動畫
    if (leftTextRef.current) {
      animate(
        leftTextRef.current, 
        { opacity: [0, 1], x: [-50, 0] }, 
        { duration: 1, delay: 0.3 }
      );
    }

    // 右側文字動畫
    if (rightTextRef.current) {
      animate(
        rightTextRef.current, 
        { opacity: [0, 1], x: [50, 0] }, 
        { duration: 1, delay: 0.3 }
      );
    }

    // 導航按鈕動畫
    if (navWrapRef.current) {
      const navButtons = navWrapRef.current.querySelectorAll('.navBtn');
      animate(
        navButtons, 
        { opacity: [0, 1], y: [20, 0] }, 
        { 
          delay: stagger(0.1, { start: 0.6 }), 
          duration: 0.7,
          easing: "ease-out"
        }
      );
    }
  }, []);

  // 設置滾動觸發動畫
  useEffect(() => {
    // 為文章卡片設置滾動動畫
    articleCardsRef.current.forEach((card, index) => {
      inView(card, () => {
        animate(
          card, 
          { opacity: [0, 1], y: [50, 0] }, 
          { 
            duration: 0.8, 
            delay: 0.1 * index,
            easing: "ease-out" 
          }
        );
      }, { margin: "-10% 0px -10% 0px", amount: 0.3 });
    });

    // 為區塊標題設置滾動動畫
    sectionHeadersRef.current.forEach((header) => {
      inView(header, () => {
        animate(
          header, 
          { opacity: [0, 1], x: [-30, 0] }, 
          { duration: 0.8, easing: "ease-out" }
        );
      }, { margin: "-15% 0px -15% 0px" });
    });

    // 設置滾動視差效果
    const imgOverflows = document.querySelectorAll('.imgOverflow');
    scroll(
      ({ y }) => {
        const scrollY = window.scrollY;
        imgOverflows.forEach((img) => {
          const imgTop = img.getBoundingClientRect().top + scrollY;
          const offset = (scrollY - imgTop) * 0.1;
          img.style.transform = `translateY(${Math.min(Math.max(offset, -20), 20)}px)`;
        });
      }
    );
  }, [isSearching, filteredArticles]);

  // 搜尋輸入框動畫
  useEffect(() => {
    if (showSearchInput) {
      const searchInput = document.querySelector('.searchInputWrap');
      if (searchInput) {
        animate(
          searchInput, 
          { opacity: [0, 1], width: ["0%", "100%"] }, 
          { duration: 0.3, easing: "ease-out" }
        );
      }
    }
  }, [showSearchInput]);

  return (
    <div className="acadPage">
      {/* 主視覺區塊 */}
      <section className="hero">
        <div 
          className="leftText" 
          ref={leftTextRef} 
          style={{ opacity: 0, transform: "translateX(-50px)" }}
        >
          變美的地圖
        </div>
        <div 
          className="rightText" 
          ref={rightTextRef} 
          style={{ opacity: 0, transform: "translateX(50px)" }}
        >
          從理解肌膚開始。
        </div>
        <div 
          className="centerBox" 
          ref={centerBoxRef} 
          style={{ opacity: 0, transform: "translateY(-80px)" }}
        >
          <h2 className="mainTitle">肌膚知識學苑</h2>
          <p className="subTitle">Your Skin Intelligence Space</p>
        </div>
        <div className="navWrap" ref={navWrapRef}>
          <div ref={searchRef} className="searchContainer">
            <div 
              className={`navBtn searchBtn ${showSearchInput ? 'active' : ''}`} 
              onClick={handleSearchClick}
            >
              <span className="searchIcon">⌕</span>
              <span>關鍵字搜尋</span>
            </div>
            {showSearchInput && (
              <div className="searchInputWrap">
                <input 
                  type="text" 
                  className="searchInput" 
                  placeholder="輸入關鍵字..." 
                  value={searchTerm}
                  onChange={handleSearchInput}
                  autoFocus
                />
              </div>
            )}
          </div>
          <div 
            className={`navBtn ${activeFilter === '膚質類型介紹' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('膚質類型介紹')}
          >
            膚質類型介紹
          </div>
          <div 
            className={`navBtn ${activeFilter === '美容儀使用知識' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('美容儀使用知識')}
          >
            美容儀使用知識
          </div>
          <div 
            className={`navBtn ${activeFilter === '教學影片' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('教學影片')}
          >
            教學影片
          </div>
          <div 
            className={`navBtn ${activeFilter === '專家專欄' ? 'active' : ''}`} 
            onClick={() => handleFilterClick('專家專欄')}
          >
            專家專欄
          </div>
        </div>
      </section>

      {/* 搜尋結果 */}
      {isSearching && (
        <section className="contentSec">
          <div className="secHeader" ref={addToHeaderRefs}>
            <h3 className="secTitle">
              {activeFilter ? `${activeFilter}` : '搜尋結果'}
              {searchTerm && `: "${searchTerm}"`}
            </h3>
          </div>
          
          <div className="articleList">
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => renderArticleCard(article))
            ) : (
              <div className="noResults">
                <p>沒有找到符合條件的文章，請嘗試其他關鍵字。</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 當沒有搜尋時顯示原本的內容 */}
      {!isSearching && (
        <>
          {/* 保養科學堂 */}
          <section className="contentSec">
            <div className="secHeader" ref={addToHeaderRefs}>
              <h3 className="secTitle">保養科學堂</h3>
            </div>
            
            <div className="articleList">
              {articles.map(article => renderArticleCard(article))}
            </div>
          </section>

          {/* 模式教學室 */}
          <section className="contentSec beigeBg">
            <div className="secHeader" ref={addToHeaderRefs}>
              <h3 className="secTitle">模式教學室</h3>
            </div>
            
            <div className="articleList">
              {articles02.map(article => renderArticleCard(article))}
            </div>
          </section>

          {/* 問題肌研究所 */}
          <section className="contentSec">
            <div className="secHeader" ref={addToHeaderRefs}>
              <h3 className="secTitle">問題肌研究所</h3>
            </div>
            
            <div className="articleList">
              {articles03.map(article => renderArticleCard(article))}
            </div>
          </section>
        </>
      )}

      {/* 底部圓弧裝飾 */}
      <div className="bottomCurve"></div>
    </div>
  );
};

export default Article;