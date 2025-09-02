import React, { useState, useEffect } from 'react';
import "../../scss/articles/_website-integration.scss";

const SensitiveSkinCareGuide = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [isVisible, setIsVisible] = useState({});
    const [hoveredTip, setHoveredTip] = useState(null);

    // 滾動動畫效果
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id^="section-"]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="articleContentPage modern-design">
            {/* 頂部進度條 - 貼在 topbar 下面 */}
            <div className="top-progress-bar">
                <div className="progress-fill" style={{width: `${(activeStep / 4) * 100}%`}}></div>
            </div>

            {/* 浮動導航小球 */}
            <div className="floating-nav">
                <div className="nav-dot" onClick={() => document.getElementById('hero').scrollIntoView({behavior: 'smooth'})}>
                    <span className="tooltip">開始</span>
                </div>
                <div className="nav-dot" onClick={() => document.getElementById('section-features').scrollIntoView({behavior: 'smooth'})}>
                    <span className="tooltip">特徵</span>
                </div>
                <div className="nav-dot" onClick={() => document.getElementById('section-steps').scrollIntoView({behavior: 'smooth'})}>
                    <span className="tooltip">步驟</span>
                </div>
                <div className="nav-dot" onClick={() => document.getElementById('section-ingredients').scrollIntoView({behavior: 'smooth'})}>
                    <span className="tooltip">成分</span>
                </div>
            </div>

            {/* 背景裝飾元素 */}
            <div className="bg-decorations">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
                <div className="decoration-circle circle-3"></div>
                <div className="decoration-wave wave-1"></div>
                <div className="decoration-wave wave-2"></div>
    </div>
    {/* 頂部導航 - 大膽設計 */}
    <div className="breadcrumb artistic-nav" id="hero">
                <div className="nav-bg-gradient"></div>
                <a href="/#/article" className="breadcrumbLink interactive-link">
                    <span>肌膚知識學苑</span>
                    <div className="link-underline"></div>
                </a>
                <span className="separator animated-arrow">→</span>
                <a href="#" className="breadcrumbLink interactive-link">
                    <span>膚質類型介紹</span>
                    <div className="link-underline"></div>
                </a>
                <span className="separator animated-arrow">→</span>
                <span className="currentPage highlight-text">敏感肌必看：日常護理與產品挑選指南</span>
            </div>

            {/* 文章標題區 - 藝術化設計 */}
            <div className="articleHeader hero-section">
                <div className="title-container">
                    <div className="title-decoration left"></div>
                    <h1 className="articleTitle mega-title">
                        <span className="title-line">敏感肌必看</span>
                        <span className="title-line accent">日常護理與產品挑選指南</span>
                        <div className="title-glow"></div>
                    </h1>
                    <div className="title-decoration right"></div>
                </div>
                <div className="articleMeta enhanced-meta">
                    <div className="authorInfo premium-author">
                        <div className="author-avatar-container">
                            <img src="https://cdn.pixabay.com/photo/2013/01/24/12/26/cat-75985_640.jpg" alt="作者頭像" className="authorImage" />
                            <div className="avatar-ring"></div>
                            <div className="avatar-pulse"></div>
                        </div>
                        <div className="authorDetails">
                            <span className="authorName">皮膚科醫師 王曉明</span>
                            <div className="author-badges">
                                <span className="badge expert">專家</span>
                                <span className="badge verified">認證</span>
                            </div>
                            <span className="publishDate">2025/06/10</span>
                        </div>
                    </div>
                    <div className="engagement-stats">
                        <div className="stat-item" onClick={() => alert('感謝您的喜歡！')}>
                            <span className="stat-icon">❤️</span>
                            <span className="stat-number">1.2K</span>
                        </div>
                        <div className="stat-item" onClick={() => alert('已收藏到您的列表')}>
                            <span className="stat-icon">🔖</span>
                            <span className="stat-number">856</span>
                        </div>
                        <div className="stat-item" onClick={() => navigator.share ? navigator.share({title: document.title, url: window.location.href}) : alert('已複製連結')}>
                            <span className="stat-icon">📤</span>
                            <span className="stat-number">分享</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 主視覺圖片 - 3D效果 */}
            <div className="heroImageContainer immersive-hero">
                <div className="image-3d-wrapper">
                    <img src="https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg" alt="敏感肌膚護理" className="heroImage" />
                    <div className="image-overlay-gradient"></div>
                    <div className="image-particles">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                    </div>
                </div>
                <div className="hero-quote">
                    <blockquote>"了解你的肌膚，就是愛護自己的開始"</blockquote>
                </div>
            </div>

            {/* 文章內容 */}
            <div className="articleContent interactive-content">
                {/* 文章簡介 - 大膽排版 */}
                <div className="article-intro modern-intro" id="section-intro">
                    <div className={`intro-content ${isVisible['section-intro'] ? 'animate-in' : ''}`}>
                        <div className="intro-icon-large">🌸</div>
                        <p className="intro-text-large">敏感肌膚容易<mark className="highlight-pink">泛紅、刺痛、乾癢</mark>，遇到換季、空氣污染或保養品成分不合時，狀況更明顯。只要掌握正確的護理原則與產品選擇，<mark className="highlight-mint">敏感肌也能穩定健康</mark>！</p>
                        <div className="intro-decorative-line"></div>
                    </div>
                </div>

                {/* 圖文並茂的段落 - 3D 卡片效果 */}
                <div className="article-image-section premium-section" id="section-definition">
                    <div className={`image-content-wrapper card-3d ${isVisible['section-definition'] ? 'animate-in' : ''}`}>
                        <div className="image-container round-image floating-image">
                            <img src="https://images.pexels.com/photos/3762891/pexels-photo-3762891.jpeg" alt="敏感肌膚護理" />
                            <div className="image-glow"></div>
                            <div className="floating-elements">
                                <div className="floating-dot dot-1">✨</div>
                                <div className="floating-dot dot-2">🌟</div>
                                <div className="floating-dot dot-3">💫</div>
                            </div>
                        </div>
                        <div className="content-text enhanced-content">
                            <div className="section-number">01</div>
                            <h2 className="section-title">什麼是敏感肌膚？</h2>
                            <div className="content-cards">
                                <div className="content-card">
                                    <div className="card-icon">🛡️</div>
                                    <p>敏感肌膚是指<strong>皮膚屏障功能較弱</strong>，容易受到外界刺激而產生不適反應的膚質類型。這種膚質的人通常對化妝品、環境變化、甚至輕微的摩擦都可能產生過敏反應。</p>
                                </div>
                                <div className="content-card">
                                    <div className="card-icon">🔍</div>
                                    <p>敏感肌膚可能是<strong>先天性的</strong>，也可能是後天因素如過度使用刺激性產品、環境污染、壓力等導致的。了解自己的肌膚狀況，採取適當的護理措施，可以有效改善敏感症狀。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 分隔線 - 藝術化 */}
                <div className="article-divider artistic-divider">
                    <div className="divider-icon">🌺</div>
                    <span className="divider-text">敏感肌膚的常見特徵</span>
                    <div className="divider-line"></div>
                </div>

                {/* 特徵提示卡片 - 互動懸浮效果 */}
                <div className="article-tips interactive-tips" id="section-features">
                    <div className={`tips-container ${isVisible['section-features'] ? 'animate-in' : ''}`}>
                        <div className="section-header">
                            <div className="section-number large">02</div>
                            <h3 className="section-subtitle">認識敏感肌的四大特徵</h3>
                        </div>
                        <div className="tips-grid premium-grid">
                            {[
                                { icon: '🔴', title: '容易發紅', desc: '接觸熱水、摩擦或某些產品後，皮膚會迅速發紅並持續較長時間。', color: 'red' },
                                { icon: '⚡', title: '刺痛感', desc: '使用護膚品時經常感到刺痛或灼熱，特別是含有酒精、香料的產品。', color: 'yellow' },
                                { icon: '🌵', title: '乾燥緊繃', desc: '皮膚容易感到乾燥、緊繃，甚至出現細小的皮屑。', color: 'green' },
                                { icon: '🌡️', title: '對環境敏感', desc: '溫度變化、空氣污染或紫外線暴露後容易出現不適反應。', color: 'blue' }
                            ].map((tip, index) => (
                                <div 
                                    key={index}
                                    className={`tip-item interactive-card ${tip.color}`}
                                    onMouseEnter={() => setHoveredTip(index)}
                                    onMouseLeave={() => setHoveredTip(null)}
                                    style={{
                                        transform: hoveredTip === index ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                >
                                    <div className="tip-icon-container">
                                        <div className="tip-icon">{tip.icon}</div>
                                        <div className="icon-glow"></div>
                                    </div>
                                    <h3>{tip.title}</h3>
                                    <p>{tip.desc}</p>
                                    <div className="card-shine"></div>
                                    {hoveredTip === index && <div className="hover-particles">
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                        <div className="particle"></div>
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 問答框 - 互動式 */}
                <div className="article-question-box interactive-question" id="section-fact">
                    <div className={`question-container ${isVisible['section-fact'] ? 'animate-in' : ''}`}>
                        <div className="question-icon-large">💡</div>
                        <h3 className="question-title">你知道嗎？</h3>
                        <div className="question-content">
                            <p className="question-desc">研究表明，約有<span className="stat-highlight">50%</span>的人認為自己有敏感肌膚，但實際上只有約<span className="stat-highlight">15-20%</span>的人真正符合敏感肌膚的臨床特徵。</p>
                            <div className="fact-visualization">
                                <div className="fact-bar">
                                    <div className="bar-segment perceived" style={{width: '50%'}}>
                                        <span>認為自己敏感肌 50%</span>
                                    </div>
                                    <div className="bar-segment actual" style={{width: '20%'}}>
                                        <span>實際敏感肌 20%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 分隔線 */}
                <div className="article-divider artistic-divider major">
                    <div className="divider-icon">🌟</div>
                    <span className="divider-text">敏感肌膚日常護理步驟</span>
                    <div className="divider-line gradient"></div>
                </div>

                {/* 步驟流程 - 互動式時間軸 */}
                <div className="stepFlow interactive-timeline" id="section-steps">
                    <div className={`timeline-container ${isVisible['section-steps'] ? 'animate-in' : ''}`}>
                        <div className="section-header">
                            <div className="section-number large">03</div>
                            <h3 className="section-subtitle">四步護理法則</h3>
                            <p className="section-description">跟著專家的建議，建立屬於敏感肌的完美護理流程</p>
                        </div>
                        
                        <div className="timeline-nav">
                            {[1, 2, 3, 4].map(num => (
                                <button 
                                    key={num}
                                    className={`timeline-nav-btn ${activeStep === num ? 'active' : ''}`}
                                    onClick={() => setActiveStep(num)}
                                >
                                    <span className="nav-number">{num}</span>
                                    <span className="nav-label">步驟 {num}</span>
                                </button>
                            ))}
                        </div>

                        {/* 移除這裡的 timeline-line，改用頂部進度條 */}

                        {[
                            {
                                number: 1,
                                title: '溫和清潔',
                                subtitle: 'Gentle Cleansing',
                                description: '選擇無香料、無皂鹼的溫和潔面產品。使用溫水（不超過37°C）輕柔清潔，避免過度搓揉。每日清潔次數不超過2次，早晚各一次即可。',
                                image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=600',
                                tips: ['使用泡沫豐富的潔面產品', '清潔時間控制在60秒內', '用柔軟毛巾輕拍乾燥'],
                                color: 'blue'
                            },
                            {
                                number: 2,
                                title: '充分保濕',
                                subtitle: 'Deep Moisturizing',
                                description: '清潔後立即使用保濕產品，趁皮膚還有些濕潤時塗抹，能更好地鎖住水分。選擇含有神經醯胺、透明質酸等成分的產品。',
                                image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=600',
                                tips: ['3分鐘內完成保濕', '使用按壓式包裝更衛生', '選擇質地清爽的保濕霜'],
                                color: 'mint'
                            },
                            {
                                number: 3,
                                title: '防曬保護',
                                subtitle: 'Sun Protection',
                                description: '無論季節和天氣，每天都需要使用SPF30以上的物理防曬霜（含氧化鋅、二氧化鈦）。選擇專為敏感肌設計的無香料配方。',
                                image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
                                tips: ['出門前30分鐘塗抹', '每2小時補擦一次', '選擇物理性防曬成分'],
                                color: 'orange'
                            },
                            {
                                number: 4,
                                title: '避免刺激',
                                subtitle: 'Avoid Irritation',
                                description: '遠離含有酒精、香料、防腐劑過多的產品。新產品使用前先在手腕內側或耳後測試48小時，確認無過敏反應再使用於面部。',
                                image: 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&w=600',
                                tips: ['48小時貼膚測試', '逐一導入新產品', '記錄過敏反應'],
                                color: 'pink'
                            }
                        ].map((step, index) => (
                            <div 
                                key={step.number}
                                className={`stepItem premium-step ${step.number === activeStep ? 'active' : ''} ${step.color}`}
                                style={{
                                    opacity: step.number === activeStep ? 1 : 0.7,
                                    transform: step.number === activeStep ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <div className="step-timeline-marker">
                                    <div className="marker-number">{step.number}</div>
                                    <div className="marker-glow"></div>
                                </div>
                                
                                <div className={`stepImage enhanced-image ${step.number % 2 === 0 ? 'reverse' : ''}`}>
                                    <div className="image-3d-container">
                                        <img src={step.image} alt={step.title} />
                                        <div className="image-overlay"></div>
                                        <div className="step-badge">
                                            <span className="badge-icon">✨</span>
                                            <span className="badge-text">步驟 {step.number}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="stepContent enhanced-content">
                                    <div className="content-header">
                                        <h3 className="stepTitle">{step.title}</h3>
                                        <p className="stepSubtitle">{step.subtitle}</p>
                                    </div>
                                    <p className="stepDesc">{step.description}</p>
                                    
                                    <div className="step-tips">
                                        <h4>💡 專家建議</h4>
                                        <ul className="tips-list">
                                            {step.tips.map((tip, tipIndex) => (
                                                <li key={tipIndex} className="tip-item-small">
                                                    <span className="tip-bullet">•</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <button 
                                        className="step-action-btn"
                                        onClick={() => alert(`了解更多關於${step.title}的知識`)}
                                    >
                                        <span>了解更多</span>
                                        <span className="btn-arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 分隔線 */}
                <div className="article-divider">
                    <span>成分避雷指南</span>
                </div>

                {/* 圖文並茂的段落 - 反向佈局 */}
                <div className="article-image-section reverse">
                    <div className="image-content-wrapper">
                        <div className="image-container">
                            <img src="https://images.pexels.com/photos/3737605/pexels-photo-3737605.jpeg" alt="敏感肌膚護理產品" />
                        </div>
                        <div className="content-text">
                            <h2>選擇合適的產品</h2>
                            <p>選擇專為敏感肌膚設計的產品是關鍵。這些產品通常不含香精、酒精和其他常見的致敏成分。</p>
                            <p>在使用新產品前，建議先在手腕內側進行48小時貼膚測試，確認無過敏反應後再使用於臉部。</p>
                            <p>產品成分列表中，優先選擇含有神經醯胺、玻尿酸、尿囊素等修護保濕成分的產品。</p>
                        </div>
                    </div>
                </div>

                {/* 應避免成分的提示卡片 */}
                <div className="article-tips danger">
                    <h3>敏感肌應避免的成分</h3>
                    <div className="tips-grid">
                        <div className="tip-item">
                            <div className="tip-icon">🚫</div>
                            <h4>酒精</h4>
                            <p>特別是變性酒精(SD Alcohol, Alcohol Denat)，會帶走皮膚表面的水分，破壞皮膚屏障。</p>
                        </div>
                        <div className="tip-item">
                            <div className="tip-icon">🌸</div>
                            <h4>香料</h4>
                            <p>人工香料是敏感肌常見的刺激源，即使是標榜「天然香料」的產品也可能引起不適。</p>
                        </div>
                        <div className="tip-item">
                            <div className="tip-icon">🧪</div>
                            <h4>高濃度果酸</h4>
                            <p>AHA、BHA等酸類成分對敏感肌來說可能過於刺激，特別是高濃度或pH值過低的產品。</p>
                        </div>
                        <div className="tip-item">
                            <div className="tip-icon">🌿</div>
                            <h4>精油</h4>
                            <p>某些精油如薄荷、檸檬、薰衣草等可能引起敏感反應，敏感肌應謹慎使用。</p>
                        </div>
                    </div>
                </div>

                {/* 推薦成分圖片網格 */}
                <div className="article-image-grid">
                    <h3>推薦成分</h3>
                    <div className="image-grid">
                        <div className="grid-item square">
                            <img src="https://images.pexels.com/photos/3762894/pexels-photo-3762894.jpeg?auto=compress&cs=tinysrgb&w=600" alt="神經醯胺" />
                            <div className="caption">神經醯胺：修復屏障</div>
                        </div>
                        <div className="grid-item rounded">
                            <img src="https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600" alt="透明質酸" />
                            <div className="caption">透明質酸：深層保濕</div>
                        </div>
                        <div className="grid-item square">
                            <img src="https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=600" alt="菸鹼醯胺" />
                            <div className="caption">菸鹼醯胺：強化屏障</div>
                        </div>
                    </div>
                </div>                {/* 結論 */}
                <div className="article-conclusion premium-conclusion" id="section-conclusion">
                    <div className={`conclusion-content ${isVisible['section-conclusion'] ? 'animate-in' : ''}`}>
                        <div className="conclusion-icon">✨</div>
                        <h2>總結</h2>
                        <div className="conclusion-cards">
                            <div className="conclusion-card">
                                <div className="card-icon">💡</div>
                                <p>敏感肌膚的護理需要耐心和細心。了解自己的肌膚需求，選擇合適的產品，堅持溫和護理原則，是敏感肌護理的關鍵。</p>
                            </div>
                            <div className="conclusion-card">
                                <div className="card-icon">🎯</div>
                                <p>記住，簡單有時候是最好的。護膚步驟和產品不必複雜，找到適合自己的基礎產品並堅持使用，比頻繁嘗試新產品更有效。</p>
                            </div>
                            <div className="conclusion-card">
                                <div className="card-icon">👩‍⚕️</div>
                                <p>如果皮膚持續出現嚴重的敏感反應，建議諮詢皮膚科醫生，可能需要專業的診斷和治療方案。</p>
                            </div>
                        </div>
                        
                        {/* 互動式CTA按鈕 */}
                        <div className="cta-section">
                            <button className="cta-button primary" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                                <span>重新閱讀</span>
                                <div className="button-glow"></div>
                            </button>
                            <button className="cta-button secondary" onClick={() => window.history.back()}>
                                <span>返回列表</span>
                                <div className="button-glow"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SensitiveSkinCareGuide;
