import React, { useState, useEffect } from 'react';
import '../../scss/articles/_website-integration.scss';
import ArticleBase from '../../components/article/ArticleBase';
import ArticleIntro from '../../components/article/ArticleIntro';
import ArticleDivider from '../../components/article/ArticleDivider';
import ArticleSection from '../../components/article/ArticleSection';
import ArticleTips from '../../components/article/ArticleTips';
import ArticleConclusion from '../../components/article/ArticleConclusion';
import articlesData from '../../data/articlesData';

// 融合新版內容與舊版動畫、浮動導航、卡片、時間軸
const SensitiveSkinCareGuideMix = () => {
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrolled / maxHeight, 1);
            setReadingProgress(progress);

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

    const scrollToSection = (index) => {
        const sections = document.querySelectorAll('.intro-section, .features-section, .steps-section, .products-section, .tips-section, .conclusion-section');
        if (sections[index]) {
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 文章資料
    const articleData = {
        title: '敏感肌必看：日常護理與產品挑選指南',
        intro: {
            text: '敏感肌膚容易泛紅、刺痛、乾癢，遇到換季、空氣污染或保養品成分不合時，狀況更明顯。只要掌握正確的護理原則與產品選擇，敏感肌也能穩定健康！',
            img: '/src/assets/images/yeee.jpeg'
        },
        sections: [
            {
                title: '1. 敏感肌膚的特徵與成因',
                content: (
                    <>
                        <ul>
                            <li><b>常見特徵：</b>泛紅、乾癢、刺痛、易脫皮、接觸某些產品或環境時容易不適。</li>
                            <li><b>成因：</b>天生皮膚屏障較薄弱、過度清潔、作息不正常、氣候變化、空氣污染、壓力大等。</li>
                        </ul>
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
                        <div className="img-hint">
                            <img src="/src/assets/images/yeee.jpeg" alt="敏感肌特徵對比圖" />
                            <div className="img-caption">配圖建議：正常肌膚 vs 敏感肌膚臉部特寫</div>
                        </div>
                    </>
                ),
                img: '/src/assets/images/yeee.jpeg'
            },
            {
                title: '2. 敏感肌的日常護理原則',
                content: (
                    <>
                        <ol>
                            <li>簡化保養程序：減少步驟，避免肌膚負擔。</li>
                            <li>選用溫和潔面產品：無皂基、無酒精、無香精的潔面乳。</li>
                            <li>加強保濕修護：選擇含有神經醯胺、玻尿酸、燕麥等舒緩成分的保濕產品。</li>
                            <li>避免過度去角質與高濃度酸類：這類產品容易破壞皮膚屏障。</li>
                            <li>防曬不可少：選擇物理性防曬，減少化學刺激。</li>
                        </ol>
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
                        <div className="img-hint">
                            <img src="/src/assets/images/yeee.jpeg" alt="護理步驟插畫" />
                            <div className="img-caption">配圖建議：潔面、保濕、防曬等護理步驟插畫</div>
                        </div>
                    </>
                ),
                img: '/src/assets/images/yeee.jpeg'
            },
            {
                title: '3. 敏感肌產品挑選指南',
                content: (
                    <>
                        <ul>
                            <li>無添加配方：無香精、無酒精、無色素、無防腐劑。</li>
                            <li>標榜敏感肌適用／醫美品牌：選擇通過皮膚科測試、專為敏感肌設計的產品。</li>
                            <li>成分單純：主打神經醯胺、燕麥、積雪草、洋甘菊等舒緩修護成分。</li>
                            <li>試用測試：購買新產品前，先在耳後或手腕內側試用，觀察24小時無異狀再使用於臉部。</li>
                        </ul>
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
                        <div className="img-hint">
                            <img src="/src/assets/images/yeee.jpeg" alt="敏感肌專用產品包裝照" />
                            <div className="img-caption">配圖建議：產品包裝、成分圖解、試用測試步驟</div>
                        </div>
                    </>
                ),
                img: '/src/assets/images/yeee.jpeg'
            },
            {
                title: '4. 敏感肌急救與自我檢測',
                content: (
                    <>
                        <ul>
                            <li><b>急救步驟：</b>
                                <ol>
                                    <li>立即停用所有新產品</li>
                                    <li>以冷毛巾濕敷鎮定泛紅</li>
                                    <li>使用單純溫和的保濕乳液</li>
                                    <li>若嚴重紅腫刺痛，應諮詢皮膚科醫師</li>
                                </ol>
                            </li>
                            <li><b>自我檢測：</b>每次換季、壓力大或用新產品就反覆發作，建議尋求專業診斷。</li>
                        </ul>
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
                        <div className="img-hint">
                            <img src="/src/assets/images/yeee.jpeg" alt="急救護理插畫" />
                            <div className="img-caption">配圖建議：冷敷、急救護理、醫師諮詢情境</div>
                        </div>
                    </>
                ),
                img: '/src/assets/images/yeee.jpeg'
            },
            {
                title: '5. 敏感肌日常生活小提醒',
                content: (
                    <>
                        <ul>
                            <li>避免過熱水洗臉、避免長時間待在冷氣房</li>
                            <li>保持充足睡眠、減壓</li>
                            <li>飲食均衡，多補充維生素C、E和Omega-3</li>
                            <li>保持居家環境清潔，減少塵蟎和過敏原</li>
                        </ul>
                        <div className="img-hint">
                            <img src="/src/assets/images/yeee.jpeg" alt="健康生活插畫" />
                            <div className="img-caption">配圖建議：飲食、睡眠、運動、潔淨居家</div>
                        </div>
                    </>
                ),
                img: '/src/assets/images/yeee.jpeg'
            }
        ],
        tips: [
            { icon: '💡', text: '新產品使用前，建議先在耳後或手腕內側進行過敏測試。' },
            { icon: '🌡️', text: '避免使用過熱的水洗臉，溫涼水是最佳選擇。' },
            { icon: '⏰', text: '建立規律的護膚習慣，避免頻繁更換產品。' },
            { icon: '👩‍⚕️', text: '若症狀持續或加重，建議諮詢皮膚科醫師。' }
        ],
        conclusion: {
            text: '敏感肌雖然脆弱，但只要用對方法，肌膚一樣可以穩定健康。記得從簡化保養、挑選適合產品做起，並留意生活細節，讓肌膚遠離敏感困擾。',
            img: '/src/assets/images/yeee.jpeg'
        }
    };

    const articleMeta = articlesData.find(article => article.slug === "sensitive-skin-care-guide") || {
        category: "膚質類型介紹",
        publishDate: "2025-09-01",
        author: { name: "Eloa小編", image: "/src/assets/images/yeee.jpeg" }
    };

    return (
        <div className="sensitive-skincare-guide">
            {/* 右側浮動導航 */}
            <nav className="floating-nav">
                <div className="nav-progress">
                    <div className="progress-bar" style={{ width: `${readingProgress * 100}%` }}></div>
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

            {/* 美麗的背景動畫 */}
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
            <ArticleBase
                title={articleData.title}
                category={articleMeta.category}
                publishDate={articleMeta.publishDate}
                author={articleMeta.author}
                heroImage={articleData.intro.img}
            >
                <section className="intro-section">
                    <ArticleIntro>
                        {articleData.intro.text}
                    </ArticleIntro>
                </section>

                <ArticleDivider text="敏感肌膚的特徵與成因" />
                <section className="features-section">
                    <ArticleSection
                        title={articleData.sections[0].title}
                        image={articleData.sections[0].img}
                        questionBox={{
                            title: "常見困擾",
                            content: "泛紅、乾癢、刺痛、易脫皮、接觸某些產品或環境時容易不適。成因：天生皮膚屏障較薄弱、過度清潔、作息不正常、氣候變化、空氣污染、壓力大等。"
                        }}
                    >
                        {articleData.sections[0].content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌的日常護理原則" />
                <section className="steps-section">
                    <ArticleSection
                        title={articleData.sections[1].title}
                        image={articleData.sections[1].img}
                    >
                        {articleData.sections[1].content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌產品挑選指南" />
                <section className="products-section">
                    <ArticleSection
                        title={articleData.sections[2].title}
                        image={articleData.sections[2].img}
                    >
                        {articleData.sections[2].content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌急救與自我檢測" />
                <section className="tips-section">
                    <ArticleSection
                        title={articleData.sections[3].title}
                        image={articleData.sections[3].img}
                    >
                        {articleData.sections[3].content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌日常生活小提醒" />
                <section className="conclusion-section">
                    <ArticleSection
                        title={articleData.sections[4].title}
                        image={articleData.sections[4].img}
                    >
                        {articleData.sections[4].content}
                    </ArticleSection>
                </section>

                <ArticleTips
                    title="敏感肌護理建議"
                    tips={articleData.tips.map(tip => ({
                        title: tip.icon,
                        description: tip.text
                    }))}
                />

                <ArticleConclusion
                    title="結語"
                    paragraphs={[articleData.conclusion.text]}
                />
            </ArticleBase>
        </div>
    );
};

export default SensitiveSkinCareGuideMix;
