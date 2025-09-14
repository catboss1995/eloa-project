import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';

const Article4 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[3]; // 第四篇文章

	// 導航項目
	const sections = [
		{ id: 'intro', title: '換季肌膚問題', icon: FaInfoCircle },
		{ id: 'spring-summer', title: '春夏保養重點', icon: FaThermometerHalf },
		{ id: 'fall-winter', title: '秋冬保養重點', icon: FaThermometerHalf },
		{ id: 'transition', title: '換季過渡期', icon: FaExclamationTriangle },
		{ id: 'tips', title: '加分小習慣', icon: FaLightbulb },
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
					<h1 className="elegant-title">換季保養：秋冬、春夏肌膚護理重點一次看懂</h1>
					<p className="elegant-subtitle">每到季節交替，肌膚就容易出現乾癢、脫皮、泛紅、油水失衡等問題。不同季節環境變化大，保養方式也要跟著調整，才能讓你的臉一年四季都水嫩有光澤！</p>
					
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
					{/* 為什麼換季肌膚特別脆弱 */}
					<section id="intro" className="content-section fade-in-up">
						<h2>一、為什麼換季肌膚特別脆弱？</h2>
						<p>
							氣溫、濕度、紫外線強度等環境變化，會讓皮脂膜失衡、角質層受損。加上冷氣、暖氣、空污等人為因素，肌膚屏障更容易被破壞，導致敏感、乾燥、甚至冒痘。
						</p>
						
						<div className="image-section">
							<img src="https://via.placeholder.com/800x400" alt="四季變化與肌膚狀態對比插畫" />
							<p className="image-caption">四季變化與肌膚狀態對比（春夏水嫩、秋冬乾裂、泛紅）</p>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>肌膚小知識：</strong>
								季節交替時，皮膚需要約2-4週的時間來適應新環境。這段期間內，肌膚特別容易出現問題，需要更細心的呵護。
							</div>
						</div>
					</section>

					{/* 春夏保養重點 */}
					<section id="spring-summer" className="content-section fade-in-up">
						<h2>二、春夏保養重點</h2>
						<h3>2-1. 清爽控油，防曬最重要</h3>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>選擇輕盈型保濕產品</h4>
									<p>避免厚重乳霜阻塞毛孔，建議用凝膠、精華液等質地清爽產品。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>加強防曬</h4>
									<p>紫外線強烈，防曬乳必不可少，記得即使室內也要補擦。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>適度控油</h4>
									<p>油性肌可選用控油化妝水，保持毛孔暢通。</p>
								</div>
							</div>
						</div>
						
						<div className="image-section">
							<img src="https://via.placeholder.com/800x400" alt="春夏輕薄型保養品" />
							<p className="image-caption">春夏輕薄型保養品產品照＋防曬乳、控油水等實拍或插畫</p>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>春夏保養小技巧：</strong>
								可將保養品放入冰箱冷藏10-15分鐘後再使用，有助於舒緩夏季肌膚泛紅、降溫消暑。
							</div>
						</div>
					</section>

					{/* 秋冬保養重點 */}
					<section id="fall-winter" className="content-section fade-in-up">
						<h2>三、秋冬保養重點</h2>
						<h3>3-1. 深層保濕，修護屏障</h3>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>高滋潤度乳霜或油類產品</h4>
									<p>幫助鎖水、修護乾燥脫皮。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>溫和清潔</h4>
									<p>避免過度去角質，選用溫和型潔面產品。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>加強修護</h4>
									<p>可搭配修護精華、面膜，提升屏障力。</p>
								</div>
							</div>
						</div>

						<div className="image-section">
							<img src="https://via.placeholder.com/800x400" alt="秋冬厚重型保養品" />
							<p className="image-caption">秋冬厚重型保養品產品照（乳霜、油類）、女性臉部乾裂特寫</p>
						</div>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>秋冬保養注意事項：</strong>
								室內暖氣會加速肌膚水分流失，可使用加濕器增加環境濕度，或在保養程序中加入保濕噴霧，隨時補充水分。
							</div>
						</div>
					</section>

					{/* 換季過渡期怎麼辦 */}
					<section id="transition" className="content-section fade-in-up">
						<h2>四、換季過渡期怎麼辦？</h2>
						
						<div className="recommendation-table">
							<div className="table-row header">
								<div className="table-cellH3">步驟</div>
								<div className="table-cell">方法</div>
								<div className="table-cell">建議</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">觀察肌膚狀態</div>
								<div className="table-cell">如出現泛紅、緊繃，先減少保養步驟</div>
								<div className="table-cell">選擇低敏溫和產品</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">逐步調整保養品</div>
								<div className="table-cell">從輕薄轉厚重（或反之）</div>
								<div className="table-cell">讓肌膚慢慢適應</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">加強保濕與修護</div>
								<div className="table-cell">可多加一層保濕精華或使用舒緩面膜</div>
								<div className="table-cell">每週2-3次</div>
							</div>
						</div>
						
						<div className="image-section">
							<img src="https://via.placeholder.com/800x400" alt="換季時女性臉部泛紅" />
							<p className="image-caption">換季時女性臉部泛紅、乾裂的細節特寫＋舒緩面膜情境照</p>
						</div>
					</section>

					{/* 加分Tips */}
					<section id="tips" className="content-section fade-in-up">
						<h2>五、加分Tips：讓肌膚更健康的小習慣</h2>
						
						<div className="selection-tips">
							<div className="selection-tip">
								<h4>定期去角質</h4>
								<p>一週1-2次，幫助老廢角質代謝，但勿過度。</p>
							</div>
							
							<div className="selection-tip">
								<h4>補充維他命</h4>
								<p>多攝取維他命C、E，有助抗氧化與修護。</p>
							</div>
							
							<div className="selection-tip">
								<h4>適度按摩</h4>
								<p>促進循環，提升保養品吸收。</p>
							</div>
							
							<div className="selection-tip">
								<h4>保持作息、喝足水</h4>
								<p>內外兼顧，才能真正養出好膚質。</p>
							</div>
						</div>
						
						<div className="image-section">
							<img src="https://via.placeholder.com/800x400" alt="保養步驟流程圖" />
							<p className="image-caption">保養步驟流程圖（如去角質→保濕→防曬）＋健康飲食與作息插畫</p>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>季節保養小秘訣：</strong>
								可根據季節調整保養品的使用順序。春夏可先使用精華再用乳液；秋冬則可先用乳液再疊加精華，最後鎖上乳霜，增加保濕效果。
							</div>
						</div>
					</section>

					{/* 常見問題 */}
					<section id="faq" className="content-section fade-in-up">
						<h2>六、常見Q&A</h2>
						
						<div className="faq-container">
							<div className="faq-item">
								<h4>Q1：換季時可以同時用多種保養品嗎？</h4>
								<p>A：建議簡化步驟，選擇溫和、保濕、修護為主的產品，避免過度疊加造成負擔。</p>
							</div>
							
							<div className="faq-item">
								<h4>Q2：秋冬一定要用油嗎？</h4>
								<p>A：不一定，但乾性肌膚可適度加入油類產品，加強鎖水；油性肌則以保濕精華為主。</p>
							</div>
							
							<div className="faq-item">
								<h4>Q3：春夏保養品秋冬還能用嗎？</h4>
								<p>A：可視狀況調整，若覺得保濕不夠可逐步換成滋潤型產品。</p>
							</div>
						</div>
						
						<div className="conclusion-tips">
							<h4>結語</h4>
							<p>換季時適時調整保養程序，選對產品、養成良好習慣，才能讓肌膚穩定不鬧脾氣。一年四季都能擁有健康水嫩的好膚質！</p>
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

export default Article4;