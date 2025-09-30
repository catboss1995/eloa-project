import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Article3 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[2]; // 第三篇文章

	// 導航項目
	const sections = [
		{ id: 'intro', title: '膚質分類', icon: FaInfoCircle },
		{ id: 'types', title: '美容儀種類', icon: FaCheckCircle },
		{ id: 'recommendations', title: '膚質推薦', icon: FaLightbulb },
		{ id: 'tips', title: '選購重點', icon: FaExclamationTriangle },
		{ id: 'usage', title: '使用注意事項', icon: FaUserMd },
		{ id: 'faq', title: '常見問題', icon: FaRegClock }
	];

	// 滾動監聽
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = scrollTop / docHeight;
			setReadingProgress(scrollPercent);
			setShowScrollTop(scrollTop > 300);

			// 自動切換活躍區段
			const sectionElements = sections.map(section => 
				document.getElementById(section.id)
			).filter(Boolean);

			const currentSection = sectionElements.findIndex(section => {
				const rect = section.getBoundingClientRect();
				return rect.top <= 100 && rect.bottom >= 100;
			});

			if (currentSection !== -1 && currentSection !== activeSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [activeSection, sections]);

	// 滾動觸發動畫
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '50px' }
		);

		const animateElements = document.querySelectorAll('.fade-in-up');
		animateElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	// 滾動到指定區段
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	// 分享功能
	const handleShare = (platform) => {
		const url = window.location.href;
		const title = articleData.title;
		
		switch (platform) {
			case 'facebook':
				window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
				break;
			case 'twitter':
				window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
				break;
			case 'linkedin':
				window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
				break;
			case 'line':
				window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
				break;
			case 'copy':
				navigator.clipboard.writeText(url).then(() => {
					alert('連結已複製到剪貼簿！');
				});
				break;
			default:
				break;
		}
		setShowShareMenu(false);
	};

	// 收藏功能
	const toggleBookmark = () => {
		setIsBookmarked(!isBookmarked);
		// 這裡可以添加實際的收藏邏輯
	};

	return (
		useDocumentTitle(articleData.title),
		<article className="elegant-article">
			{/* 進度條 */}
			<div className="progress-indicator">
				<div 
					className="progress-fill" 
					style={{ width: `${readingProgress * 100}%` }}
				/>
			</div>

			{/* 固定側邊目錄導航 */}
			<nav className="table-of-contents fade-in-up">
				<h3>文章目錄</h3>
				<ul>
					{sections.map((section, index) => (
						<li key={section.id}>
							<a 
								href={`#${section.id}`}
								className={activeSection === index ? 'active' : ''}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(section.id);
								}}
							>
								{section.title}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<div className="elegant-container">
				{/* 麵包屑導航 */}
				<nav className="breadcrumb fade-in-up">
					<a href="/" className="breadcrumb-item">
						<FaHome />
						<span>首頁</span>
					</a>
					<FaChevronRight className="breadcrumb-separator" />
					<a href="#/article" className="breadcrumb-item">
						<span>肌膚學院</span>
					</a>
					<FaChevronRight className="breadcrumb-separator" />
					<span className="breadcrumb-current">{articleData.category}</span>
				</nav>

				{/* 文章標題 */}
				<header className="article-header fade-in-up">
					<h1 className="elegant-title">{articleData.title}</h1>
					<p className="elegant-subtitle">{articleData.description}</p>
					
					{/* 文章元信息 */}
					<div className="article-meta">
						<div className="author-info">
							<img 
								src={articleData.author.image} 
								alt={articleData.author.name}
								className="author-avatar"
							/>
							<div className="author-details">
								<div className="author-name">
									<FaUser />
									<span>{articleData.author.name}</span>
								</div>
								<div className="publish-date">
									<FaCalendarAlt />
									<span>{articleData.publishDate}</span>
								</div>
							</div>
						</div>
						
						{/* 分享收藏按鈕 */}
						<div className="article-actions">
							<div className="share-container">
								<button 
									className="action-btn share-btn"
									onClick={() => setShowShareMenu(!showShareMenu)}
								>
									<FaShare />
									<span>分享</span>
								</button>
								{showShareMenu && (
									<div className="share-menu">
										<button onClick={() => handleShare('facebook')}>
											<FaFacebook />
											<span>Facebook</span>
										</button>
										<button onClick={() => handleShare('line')}>
											<FaLine />
											<span>LINE</span>
										</button>
										<button onClick={() => handleShare('copy')}>
											<FaCopy />
											<span>複製連結</span>
										</button>
									</div>
								)}
							</div>
							
							<button 
								className={`action-btn bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
								onClick={toggleBookmark}
							>
								<FaBookmark />
								<span>{isBookmarked ? '已收藏' : '收藏'}</span>
							</button>
						</div>
					</div>
				</header>

				{/* 文章內容 */}
				<main className="article-content">
					{/* 膚質分類 */}
					<section id="intro" className="content-section fade-in-up">
						<h2>一、你的膚質是哪一型？</h2>
						<p>
							選擇美容儀前，先認識自己的膚質很重要。了解自己的膚質特性，才能選擇最適合的美容儀器，
							達到事半功倍的效果。
						</p>
						
						<div className="skin-type-tips">
							<div className="skin-type-card">
								<h4>油性肌膚</h4>
								<p>容易出油、毛孔粗大、粉刺痘痘多。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>乾性肌膚</h4>
								<p>緊繃、脫皮、容易敏感。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>混合性肌膚</h4>
								<p>T字部位油、兩頰乾燥。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>敏感性肌膚</h4>
								<p>容易泛紅、刺癢、對外界刺激反應大。</p>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>如何判斷膚質：</strong>
								洗臉後不塗任何產品，30分鐘後觀察肌膚狀態。若全臉出油是油性肌，全臉緊繃是乾性肌，T字油兩頰乾是混合肌。若經常泛紅、刺痛則可能是敏感肌。
							</div>
						</div>
					</section>

					{/* 美容儀種類 */}
					<section id="types" className="content-section fade-in-up">
						<h2>二、常見家用美容儀種類＆功能</h2>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>超聲波導入儀</h4>
									<p>利用高頻震動，幫助保養品吸收，適合乾性、熟齡肌。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>射頻（RF）美容儀</h4>
									<p>能促進膠原蛋白增生，改善鬆弛、細紋，適合輕熟齡肌或有抗老需求者。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>LED光療儀</h4>
									<p>不同波長有不同效果：紅光促進修護、藍光抑菌消炎，適合敏感肌、痘痘肌。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">4</div>
								<div className="step-content">
									<h4>清潔儀</h4>
									<p>如音波洗臉機、毛孔清潔儀，適合油性、混合性肌膚，用於深層清潔。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">5</div>
								<div className="step-content">
									<h4>微電流美容儀</h4>
									<p>以微弱電流刺激肌肉，提升輪廓緊緻感，適合輕熟齡或希望拉提輪廓者。</p>
								</div>
							</div>
						</div>
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>選購小技巧：</strong>
								初次使用美容儀的人，建議從單一功能的入門款開始嘗試，熟悉後再考慮多功能或高階產品。
							</div>
						</div>
					</section>

					{/* 膚質推薦 */}
					<section id="recommendations" className="content-section fade-in-up">
						<h2>三、依膚質推薦適合的美容儀</h2>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>選擇適合的美容儀很重要：</strong>
								使用不適合自己膚質的美容儀，可能不但沒有效果，還可能造成肌膚問題。
							</div>
						</div>

						<div className="recommendation-table">
							<div className="table-row header">
								<div className="table-cellH3">膚質</div>
								<div className="table-cell">推薦美容儀</div>
								<div className="table-cell">功能/作用</div>
								<div className="table-cell">注意事項</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">油性肌</div>
								<div className="table-cell">清潔儀、藍光LED</div>
								<div className="table-cell">深層清潔、控油、抗痘</div>
								<div className="table-cell">勿過度清潔</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">乾性肌</div>
								<div className="table-cell">超聲波導入、紅光LED</div>
								<div className="table-cell">加強保濕、促進修護</div>
								<div className="table-cell">選低刺激模式</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">混合性肌</div>
								<div className="table-cell">清潔儀+導入儀</div>
								<div className="table-cell">平衡油脂、加強吸收</div>
								<div className="table-cell">分區使用不同模式</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">敏感肌</div>
								<div className="table-cell">LED光療儀</div>
								<div className="table-cell">修護鎮定、減少發炎</div>
								<div className="table-cell">減少高溫或高頻率操作</div>
							</div>
						</div>
					</section>

					{/* 選購重點 */}
					<section id="tips" className="content-section fade-in-up">
						<h2>四、美容儀選購必看重點</h2>
						
						<div className="selection-tips">
							<div className="selection-tip">
								<h4>認明品牌與安全認證</h4>
								<p>選擇有口碑、通過安全檢驗的品牌。</p>
							</div>
							
							<div className="selection-tip">
								<h4>功能是否符合需求</h4>
								<p>不要盲目追求多功能，應以自身肌膚問題為主。</p>
							</div>
							
							<div className="selection-tip">
								<h4>易於清潔保養</h4>
								<p>儀器本身是否好清潔，避免細菌滋生。</p>
							</div>
							
							<div className="selection-tip">
								<h4>操作便利性</h4>
								<p>手感、重量、是否有無線設計等。</p>
							</div>
							
							<div className="selection-tip">
								<h4>售後服務</h4>
								<p>保固、維修是否方便。</p>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>預算考量：</strong>
								美容儀價格從數百元到上萬元不等，建議依照使用頻率和需求設定合理預算。每週使用1-2次的入門者，可先選擇中低價位產品嘗試。
							</div>
						</div>
					</section>

					{/* 使用注意事項 */}
					<section id="usage" className="content-section fade-in-up">
						<h2>五、正確使用美容儀的注意事項</h2>
						<p>
							美容儀雖然方便，但使用不當可能造成肌膚傷害。以下是使用美容儀時的重要注意事項：
						</p>
						
						<div className="aftercare-steps">
							<div className="aftercare-step">
								<h4>清潔第一步</h4>
								<p>使用前後要徹底清潔肌膚與儀器。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>遵循說明書</h4>
								<p>依照說明書設定時間與頻率，避免過度使用。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>後續保養</h4>
								<p>使用後加強保濕、防曬。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>異常處理</h4>
								<p>若出現過敏或不適，應立即停用並諮詢專業醫師。</p>
							</div>
						</div>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>特殊情況禁用：</strong>
								懷孕期間、有心臟病史、臉部有開放性傷口或嚴重痤瘡、近期做過醫美手術等情況，應避免使用美容儀或先諮詢醫師意見。
							</div>
						</div>
					</section>

					{/* 常見問題 */}
					<section id="faq" className="content-section fade-in-up">
						<h2>六、常見QA</h2>
						
						<div className="faq-container">
							<div className="faq-item">
								<h4>Q1：美容儀能天天用嗎？</h4>
								<p>A：依產品設計而異，多數建議每週2-3次。請詳閱說明書。</p>
							</div>
							
							<div className="faq-item">
								<h4>Q2：敏感肌可以用射頻儀嗎？</h4>
								<p>A：建議選擇低溫、低頻模式，並先局部測試。</p>
							</div>
							
							<div className="faq-item">
								<h4>Q3：美容儀可以和一般保養品一起搭配嗎？</h4>
								<p>A：可以，但建議使用無酒精、無香精的溫和產品，避免刺激。</p>
							</div>
						</div>
						
						<div className="conclusion-tips">
							<h4>結語</h4>
							<p>選對美容儀，能讓你的保養事半功倍！記得依膚質、需求慎選產品，養成良好使用習慣，才能真正擁有健康美麗的肌膚。</p>
						</div>
					</section>
				</main>
			</div>

			{/* 返回頂部按鈕 */}
			{showScrollTop && (
				<button 
					className="scroll-to-top visible"
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<FaChevronUp />
				</button>
			)}
		</article>
	);
};

export default Article3;