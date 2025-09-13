import React, { useState, useEffect } from 'react';
import '../../scss/articles/_website-integration.scss';
import ArticleBase from '../../components/article/ArticleBase';
import ArticleIntro from '../../components/article/ArticleIntro';
import ArticleDivider from '../../components/article/ArticleDivider';
import ArticleSection from '../../components/article/ArticleSection';
import ArticleTips from '../../components/article/ArticleTips';
import ArticleConclusion from '../../components/article/ArticleConclusion';

const SensitiveSkinCareGuideMix = () => {
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [articleData, setArticleData] = useState(null);
    const [articleMeta, setArticleMeta] = useState(null);

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

    useEffect(() => {
        fetch('http://localhost:3000/api/articles?where[title]=敏感肌必看：日常護理與產品挑選指南')
            .then(res => res.json())
            .then(data => {
                if (data.docs && data.docs.length > 0) {
                    setArticleData(data.docs[0]);
                    setArticleMeta({
                        category: data.docs[0].category || '膚質類型介紹',
                        publishDate: data.docs[0].publishDate || '2025-09-01',
                        author: data.docs[0].author || { name: 'Eloa小編', image: '' }
                    });
                }
            });
    }, []);

    if (!articleData || !articleMeta) return <div>Loading...</div>;

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
                heroImage={articleData.intro?.img}
            >
                <section className="intro-section">
                    <ArticleIntro>
                        {articleData.intro?.text}
                    </ArticleIntro>
                </section>

                <ArticleDivider text="敏感肌膚的特徵與成因" />
                <section className="features-section">
                    <ArticleSection
                        title={articleData.sections?.[0]?.title}
                        image={articleData.sections?.[0]?.img}
                        questionBox={{
                            title: "常見困擾",
                            content: "泛紅、乾癢、刺痛、易脫皮、接觸某些產品或環境時容易不適。成因：天生皮膚屏障較薄弱、過度清潔、作息不正常、氣候變化、空氣污染、壓力大等。"
                        }}
                    >
                        {articleData.sections?.[0]?.content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌的日常護理原則" />
                <section className="steps-section">
                    <ArticleSection
                        title={articleData.sections?.[1]?.title}
                        image={articleData.sections?.[1]?.img}
                    >
                        {articleData.sections?.[1]?.content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌產品挑選指南" />
                <section className="products-section">
                    <ArticleSection
                        title={articleData.sections?.[2]?.title}
                        image={articleData.sections?.[2]?.img}
                    >
                        {articleData.sections?.[2]?.content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌急救與自我檢測" />
                <section className="tips-section">
                    <ArticleSection
                        title={articleData.sections?.[3]?.title}
                        image={articleData.sections?.[3]?.img}
                    >
                        {articleData.sections?.[3]?.content}
                    </ArticleSection>
                </section>

                <ArticleDivider text="敏感肌日常生活小提醒" />
                <section className="conclusion-section">
                    <ArticleSection
                        title={articleData.sections?.[4]?.title}
                        image={articleData.sections?.[4]?.img}
                    >
                        {articleData.sections?.[4]?.content}
                    </ArticleSection>
                </section>

                <ArticleTips
                    title="敏感肌護理建議"
                    tips={articleData.tips?.map(tip => ({
                        title: tip.icon,
                        description: tip.text
                    }))}
                />

                <ArticleConclusion
                    title="結語"
                    paragraphs={[articleData.conclusion?.text]}
                />
            </ArticleBase>
        </div>
    );
};

export default SensitiveSkinCareGuideMix;