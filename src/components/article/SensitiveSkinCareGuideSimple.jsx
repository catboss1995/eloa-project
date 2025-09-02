import React, { useState, useEffect } from 'react';
import '../../scss/articles/_website-integration.scss';

const SensitiveSkinCareGuideSimple = () => {
  // 狀態管理
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  // 滾動監聽和區段偵測
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxHeight, 1);
      setReadingProgress(progress);

      // 偵測當前活動區段
      const sections = document.querySelectorAll('.intro-section, .features-section, .steps-section, .products-section, .tips-section, .conclusion-section');
      let currentSection = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = index;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 區段導航功能
  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.intro-section, .features-section, .steps-section, .products-section, .tips-section, .conclusion-section');
    if (sections[index]) {
      sections[index].scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="sensitive-skincare-guide">
      {/* 右側浮動導航 - 不會擋到 logo */}
      <nav className="floating-nav">
        <div className="nav-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${readingProgress * 100}%` }}
          ></div>
        </div>
        <div className="nav-items">
          {[
            { name: '介紹', icon: '🌸' },
            { name: '特徵', icon: '🔍' },
            { name: '步驟', icon: '📋' },
            { name: '產品', icon: '💎' },
            { name: '建議', icon: '💡' },
            { name: '結論', icon: '✨' }
          ].map((item, index) => (
            <button
              key={index}
              className={`nav-item ${activeSection === index ? 'active' : ''}`}
              onClick={() => scrollToSection(index)}
              title={item.name}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* 美麗的背景動畫 - 不會擋到主要內容 */}
      <div className="artistic-background">
        <div className="bg-gradient"></div>
        <div className="floating-particles">
          <div className="particle particle-0"></div>
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>

      {/* 主要內容區域 */}
      <article className="article-container">
        {/* 標題區段 */}
        <section className="intro-section">
          <div className="content-wrapper">
            <h1 className="article-title">敏感肌膚護理完整指南</h1>
            <p className="intro-text">
              敏感肌膚需要特別溫和的護理，讓我們一起探索如何為您的珍貴肌膚提供最適合的呵護。
            </p>
          </div>
        </section>

        {/* 敏感肌特徵說明 */}
        <section className="features-section">
          <div className="content-wrapper">
            <h2 className="section-title">敏感肌膚的特徵</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔴</div>
                <h3>容易泛紅</h3>
                <p>遇到刺激性成分或環境變化時，肌膚容易出現紅腫現象。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>刺痛感</h3>
                <p>使用某些護膚品時可能會感到刺痛、灼熱或不適。</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🌿</div>
                <h3>反應敏感</h3>
                <p>對香料、酒精、某些防腐劑等成分容易產生過敏反應。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 護理步驟 */}
        <section className="steps-section">
          <div className="content-wrapper">
            <h2 className="section-title">敏感肌護理步驟</h2>
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>溫和清潔</h3>
                  <p>選擇無香料、低刺激性的潔面產品，避免過度清潔。</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>保濕滋潤</h3>
                  <p>使用溫和的保濕產品，維持肌膚屏障功能。</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>防曬保護</h3>
                  <p>選擇物理性防曬產品，避免化學性防曬可能造成的刺激。</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>避免刺激</h3>
                  <p>遠離含酒精、香料等刺激性成分的產品。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 推薦產品 */}
        <section className="products-section">
          <div className="content-wrapper">
            <h2 className="section-title">推薦產品</h2>
            <div className="products-grid">
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/images/aura-clean-front.avif" alt="AURA CLEAN 潔面慕斯" />
                </div>
                <div className="product-info">
                  <h3>AURA CLEAN 潔面慕斯</h3>
                  <p>溫和清潔，適合敏感肌膚日常使用</p>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image">
                  <img src="/src/assets/images/clean-shot-front.avif" alt="Clean Shot 精華液" />
                </div>
                <div className="product-info">
                  <h3>Clean Shot 精華液</h3>
                  <p>舒緩修護，強化肌膚屏障功能</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 護理建議 */}
        <section className="tips-section">
          <div className="content-wrapper">
            <h2 className="section-title">護理小撇步</h2>
            <div className="tips-container">
              <div className="tip-item">
                <div className="tip-icon">💡</div>
                <p>新產品使用前，建議先在耳後或手腕內側進行過敏測試。</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">🌡️</div>
                <p>避免使用過熱的水洗臉，溫涼水是最佳選擇。</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">⏰</div>
                <p>建立規律的護膚習慣，避免頻繁更換產品。</p>
              </div>
              <div className="tip-item">
                <div className="tip-icon">👩‍⚕️</div>
                <p>若症狀持續或加重，建議諮詢皮膚科醫師。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 結論 */}
        <section className="conclusion-section">
          <div className="content-wrapper">
            <h2 className="section-title">結論</h2>
            <p className="conclusion-text">
              敏感肌膚的護理需要耐心和細心。選擇溫和的產品，建立簡單有效的護膚程序，
              並持之以恆地呵護您的肌膚。記住，每個人的肌膚都是獨特的，
              找到最適合自己的護理方式是最重要的。
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default SensitiveSkinCareGuideSimple;
