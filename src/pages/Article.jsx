// src/pages/Article.jsx
import { animate, scroll, inView, stagger } from "motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
// 引入 SCSS 樣式
import "../scss/styleAcademy.scss";
// 引入文章數據
import articlesData from '../data/articlesData';

// 檢查環境變量和瀏覽器支援
const isProduction = import.meta.env.PROD;
const enableAnimations = import.meta.env.VITE_ENABLE_ANIMATIONS !== 'false';
const animationDelay = parseInt(import.meta.env.VITE_ANIMATION_DELAY || '100');
const debugMode = import.meta.env.VITE_DEBUG_MODE === 'true';
const isBrowser = typeof window !== 'undefined';
const isMotionSupported = isBrowser && typeof animate === 'function';
const useMotionFallback = false || !isMotionSupported; // 如果不支持 Motion 庫，則啟用備用方案

// 調試日誌函數
const log = (...args) => {
  if (debugMode) {
    console.log('[Animation Debug]', ...args);
  }
};

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
  const [animationsInitialized, setAnimationsInitialized] = useState(false);
  const [useFallbackAnimations, setUseFallbackAnimations] = useState(useMotionFallback);
  
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
      className={`articleCard ${article.reverse ? 'reverse' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`}
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

  // 安全的動畫函數
  const safeAnimate = (element, keyframes, options) => {
    if (!enableAnimations || useFallbackAnimations) {
      // 如果動畫被禁用或需要使用備用方案，直接應用備用動畫
      if (element) {
        if (Array.isArray(element)) {
          element.forEach(el => {
            if (el) el.classList.add('animate-fallback');
          });
        } else {
          element.classList.add('animate-fallback');
        }
      }
      return null;
    }
    
    try {
      log(`Animating element:`, element);
      return animate(element, keyframes, options);
    } catch (error) {
      console.error('Animation error:', error);
      setUseFallbackAnimations(true);
      
      // 如果啟用了備用方案，則使用基本的 CSS 類
      if (element) {
        if (Array.isArray(element)) {
          element.forEach(el => {
            if (el) el.classList.add('animate-fallback');
          });
        } else {
          element.classList.add('animate-fallback');
        }
      }
      return null;
    }
  };

  // 初始化動畫
  const initializeAnimations = () => {
    log('Initializing animations');
    
    if (animationsInitialized) {
      log('Animations already initialized, skipping');
      return;
    }
    
    // 如果需要使用備用方案，直接應用備用動畫
    if (useFallbackAnimations) {
      log('Using fallback animations');
      
      // 應用備用動畫類
      if (centerBoxRef.current) centerBoxRef.current.classList.add('animate-fallback');
      if (leftTextRef.current) leftTextRef.current.classList.add('animate-fallback');
      if (rightTextRef.current) rightTextRef.current.classList.add('animate-fallback');
      
      if (navWrapRef.current) {
        const navButtons = navWrapRef.current.querySelectorAll('.navBtn');
        navButtons.forEach((btn, index) => {
          btn.classList.add('animate-fallback');
          btn.style.animationDelay = `${0.6 + (index * 0.1)}s`;
        });
      }
      
      setAnimationsInitialized(true);
      return;
    }
    
    try {
      // 嘗試使用 Motion 庫動畫
      // 中央標題動畫 - 使用絕對定位確保初始位置
      if (centerBoxRef.current) {
        // 先重置可能的偏移
        centerBoxRef.current.style.transform = 'translateY(-80px)';
        centerBoxRef.current.style.opacity = '0';
        
        // 使用單一動畫同時處理透明度和位置，避免多個動畫互相干擾
        safeAnimate(
          centerBoxRef.current, 
          { 
            opacity: [0, 1],
            transform: ['translateY(-80px)', 'translateY(0)'] 
          }, 
          { 
            duration: 1.2, 
            easing: [0.17, 0.55, 0.55, 1] 
          }
        );
      }

      // 左側文字動畫
      if (leftTextRef.current) {
        leftTextRef.current.style.transform = 'translateX(-50px)';
        leftTextRef.current.style.opacity = '0';
        
        safeAnimate(
          leftTextRef.current, 
          { opacity: [0, 1], transform: ['translateX(-50px)', 'translateX(0)'] }, 
          { duration: 1, delay: 0.3 }
        );
      }

      // 右側文字動畫
      if (rightTextRef.current) {
        rightTextRef.current.style.transform = 'translateX(50px)';
        rightTextRef.current.style.opacity = '0';
        
        safeAnimate(
          rightTextRef.current, 
          { opacity: [0, 1], transform: ['translateX(50px)', 'translateX(0)'] }, 
          { duration: 1, delay: 0.3 }
        );
      }

      // 導航按鈕動畫
      if (navWrapRef.current) {
        const navButtons = navWrapRef.current.querySelectorAll('.navBtn');
        navButtons.forEach(btn => {
          btn.style.opacity = '0';
          btn.style.transform = 'translateY(20px)';
        });
        
        safeAnimate(
          navButtons, 
          { opacity: [0, 1], transform: ['translateY(20px)', 'translateY(0)'] }, 
          { 
            delay: stagger(0.1, { start: 0.6 }), 
            duration: 0.7,
            easing: "ease-out"
          }
        );
      }
    } catch (error) {
      console.error('Failed to initialize animations with Motion library:', error);
      setUseFallbackAnimations(true);
      
      // 應用備用動畫類
      if (centerBoxRef.current) centerBoxRef.current.classList.add('animate-fallback');
      if (leftTextRef.current) leftTextRef.current.classList.add('animate-fallback');
      if (rightTextRef.current) rightTextRef.current.classList.add('animate-fallback');
      
      if (navWrapRef.current) {
        const navButtons = navWrapRef.current.querySelectorAll('.navBtn');
        navButtons.forEach((btn, index) => {
          btn.classList.add('animate-fallback');
          btn.style.animationDelay = `${0.6 + (index * 0.1)}s`;
        });
      }
    }
    
    setAnimationsInitialized(true);
    log('Animations initialized successfully');
  };

  // 頁面載入動畫
  useEffect(() => {
    log('Setting up page load animations');
    
    // 如果文檔已經加載完成，直接初始化
    if (document.readyState === 'complete') {
      log('Document already loaded');
      setTimeout(initializeAnimations, animationDelay);
    } else {
      // 否則等待 window.onload 事件
      log('Waiting for window load event');
      const handleLoad = () => {
        log('Window loaded');
        setTimeout(initializeAnimations, animationDelay);
      };
      
      window.addEventListener('load', handleLoad);
      
      // 清理函數
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  // 設置滾動觸發動畫
  useEffect(() => {
    if (!enableAnimations) return;
    
    log('Setting up scroll animations');
    
    if (useFallbackAnimations) {
      // 使用 Intersection Observer 作為備用
      try {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fallback');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        
        // 觀察卡片和標題
        articleCardsRef.current.forEach(card => observer.observe(card));
        sectionHeadersRef.current.forEach(header => observer.observe(header));
        
        return () => observer.disconnect();
      } catch (error) {
        console.error('Error setting up Intersection Observer:', error);
      }
    } else {
      // 為文章卡片設置滾動動畫
      articleCardsRef.current.forEach((card, index) => {
        try {
          inView(card, () => {
            safeAnimate(
              card, 
              { opacity: [0, 1], transform: ['scale(0.95) translateY(70px)', 'scale(1) translateY(0)'] }, 
              { 
                duration: 1.5, 
                delay: 0.1 * index,
                easing: "ease-out" 
              }
            );
          }, { margin: "-10% 0px -10% 0px", amount: 0.001 });
        } catch (error) {
          console.error('Error setting up card scroll animation:', error);
          card.classList.add('animate-fallback');
        }
      });

      // 為區塊標題設置滾動動畫
      sectionHeadersRef.current.forEach((header) => {
        try {
          inView(header, () => {
            safeAnimate(
              header, 
              { opacity: [0, 1], transform: ['translateX(-30px)', 'translateX(0)'] }, 
              { duration: 0.8, easing: "ease-out" }
            );
          }, { margin: "-15% 0px -15% 0px" });
        } catch (error) {
          console.error('Error setting up header scroll animation:', error);
          header.classList.add('animate-fallback');
        }
      });
    }

    // 設置滾動視差效果
    try {
      const imgOverflows = document.querySelectorAll('.imgOverflow');
      
      if (imgOverflows.length > 0) {
        log(`Setting up parallax for ${imgOverflows.length} images`);
        
        if (useFallbackAnimations) {
          // 簡單的視差效果
          const handleScroll = () => {
            const scrollY = window.scrollY;
            imgOverflows.forEach((img) => {
              try {
                const imgTop = img.getBoundingClientRect().top + scrollY;
                const offset = (scrollY - imgTop) * 0.1;
                img.style.transform = `translateY(${Math.min(Math.max(offset, -20), 20)}px)`;
              } catch (error) {
                console.error('Error in parallax effect:', error);
              }
            });
          };
          
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        } else {
          const scrollHandler = scroll(
            ({ y }) => {
              const scrollY = window.scrollY;
              imgOverflows.forEach((img) => {
                try {
                  const imgTop = img.getBoundingClientRect().top + scrollY;
                  const offset = (scrollY - imgTop) * 0.1;
                  img.style.transform = `translateY(${Math.min(Math.max(offset, -20), 20)}px)`;
                } catch (error) {
                  console.error('Error in parallax effect:', error);
                }
              });
            }
          );
          
          // 返回清理函數
          return () => {
            if (scrollHandler && typeof scrollHandler.cancel === 'function') {
              scrollHandler.cancel();
            }
          };
        }
      }
    } catch (error) {
      console.error('Error setting up parallax effect:', error);
    }
  }, [isSearching, filteredArticles, useFallbackAnimations]);

  // 搜尋輸入框動畫
  useEffect(() => {
    if (!enableAnimations) return;
    
    if (showSearchInput) {
      const searchInput = document.querySelector('.searchInputWrap');
      if (searchInput) {
        if (useFallbackAnimations) {
          searchInput.classList.add('animate-fallback');
        } else {
          safeAnimate(
            searchInput, 
            { opacity: [0, 1], width: ["0%", "100%"] }, 
            { duration: 0.8, easing: "ease-out" }
          );
        }
      }
    }
  }, [showSearchInput, useFallbackAnimations]);

  // 修復標題初始顯示問題
  useEffect(() => {
    // 確保初始渲染時標題是可見的
    if (!animationsInitialized) {
      // 確保標題在動畫初始化前是可見的
      if (centerBoxRef.current) {
        centerBoxRef.current.style.opacity = '1';
        centerBoxRef.current.style.transform = 'translateY(0)';
      }
      
      if (leftTextRef.current) {
        leftTextRef.current.style.opacity = '1';
        leftTextRef.current.style.transform = 'translateX(0)';
      }
      
      if (rightTextRef.current) {
        rightTextRef.current.style.opacity = '1';
        rightTextRef.current.style.transform = 'translateX(0)';
      }
    }
  }, []);

  return (
    <div className="acadPage">
      {/* 主視覺區塊 */}
      <section className="hero">
        <div 
          className={`leftText ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
          ref={leftTextRef}
        >
          變美的地圖
        </div>
        <div 
          className={`rightText ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
          ref={rightTextRef}
        >
          從理解肌膚開始。
        </div>
        <div 
          className={`centerBox ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
          ref={centerBoxRef}
          style={{ textAlign: 'center' }} // 確保文字居中
        >
          <h2 className="mainTitle">肌膚知識學苑</h2>
          <p className="subTitle">Your Skin Intelligence Space</p>
        </div>
        <div className="navWrap" ref={navWrapRef}>
          <div ref={searchRef} className="searchContainer">
            <div 
              className={`navBtn searchBtn ${showSearchInput ? 'active' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
              onClick={handleSearchClick}
            >
              <span className="searchIcon">⌕</span>
              <span>關鍵字搜尋</span>
            </div>
            {showSearchInput && (
              <div className={`searchInputWrap ${useFallbackAnimations ? 'animate-fallback' : ''}`}>
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
            className={`navBtn ${activeFilter === '膚質類型介紹' ? 'active' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
            onClick={() => handleFilterClick('膚質類型介紹')}
          >
            膚質類型介紹
          </div>
          <div 
            className={`navBtn ${activeFilter === '美容儀使用知識' ? 'active' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
            onClick={() => handleFilterClick('美容儀使用知識')}
          >
            美容儀使用知識
          </div>
          <div 
            className={`navBtn ${activeFilter === '教學影片' ? 'active' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
            onClick={() => handleFilterClick('教學影片')}
          >
            教學影片
          </div>
          <div 
            className={`navBtn ${activeFilter === '專家專欄' ? 'active' : ''} ${useFallbackAnimations ? 'animate-fallback' : ''}`} 
            onClick={() => handleFilterClick('專家專欄')}
          >
            專家專欄
          </div>
        </div>
      </section>

      {/* 搜尋結果 */}
      {isSearching && (
        <section className="contentSec">
          <div className={`secHeader ${useFallbackAnimations ? 'animate-fallback' : ''}`} ref={addToHeaderRefs}>
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
            <div className={`secHeader ${useFallbackAnimations ? 'animate-fallback' : ''}`} ref={addToHeaderRefs}>
              <h3 className="secTitle">保養科學堂</h3>
            </div>
            
            <div className="articleList">
              {articles.map(article => renderArticleCard(article))}
            </div>
          </section>

          {/* 模式教學室 */}
          <section className="contentSec beigeBg">
            <div className={`secHeader ${useFallbackAnimations ? 'animate-fallback' : ''}`} ref={addToHeaderRefs}>
              <h3 className="secTitle">模式教學室</h3>
            </div>
            
            <div className="articleList">
              {articles02.map(article => renderArticleCard(article))}
            </div>
          </section>

          {/* 問題肌研究所 */}
          <section className="contentSec">
            <div className={`secHeader ${useFallbackAnimations ? 'animate-fallback' : ''}`} ref={addToHeaderRefs}>
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