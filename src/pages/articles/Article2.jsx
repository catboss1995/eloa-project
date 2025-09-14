import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';

const Article2 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[1]; // 第二篇文章

	// 導航項目
	const sections = [
		{ id: 'intro', title: '洗臉前的準備', icon: FaInfoCircle },
		{ id: 'steps', title: '正確洗臉步驟', icon: FaCheckCircle },
		{ id: 'mistakes', title: '常見洗臉錯誤', icon: FaExclamationTriangle },
		{ id: 'tips', title: '膚質洗臉技巧', icon: FaLightbulb },
		{ id: 'aftercare', title: '洗臉後護膚', icon: FaUserMd },
		{ id: 'conclusion', title: '結語', icon: FaRegClock }
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
					{/* 洗臉前的準備 */}
					<section id="intro" className="content-section fade-in-up">
						<h2>一、洗臉前的準備</h2>
						<p>
							在洗臉前，請務必先洗手，避免手上的髒汙、細菌沾到臉上。準備好適合自己膚質的洗面乳，
							並用溫水將臉部打濕，這樣有助於打開毛孔，讓清潔更徹底。
						</p>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>洗臉前準備清單：</strong>
								<ul>
									<li>潔淨的洗手台</li>
									<li>乾淨的毛巾</li>
									<li>適合膚質的洗面乳</li>
									<li>溫水（不冷不熱）</li>
								</ul>
							</div>
						</div>
					</section>

					{/* 正確洗臉的五大步驟 */}
					<section id="steps" className="content-section fade-in-up">
						<h2>二、正確洗臉的五大步驟</h2>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>取適量洗面乳</h4>
									<p>擠出約一顆櫻桃大小的洗面乳於掌心，不要過多也不要太少。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>搓出細緻泡沫</h4>
									<p>用雙手加水搓揉，直到起出細緻泡沫。泡沫越細緻，越能深入毛孔帶走髒汙。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>輕柔按摩臉部</h4>
									<p>將泡沫均勻塗抹於臉上，以畫圓的方式輕輕按摩，特別是T字部位、鼻翼兩側、下巴等容易出油的區域。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">4</div>
								<div className="step-content">
									<h4>用溫水徹底沖洗</h4>
									<p>用溫水將泡沫徹底沖乾淨，不可殘留，否則容易造成毛孔阻塞。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">5</div>
								<div className="step-content">
									<h4>用乾淨毛巾輕壓吸乾</h4>
									<p>用乾淨柔軟的毛巾輕壓臉部吸乾水分，避免用力摩擦，以免拉扯肌膚。</p>
								</div>
							</div>
						</div>
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>洗臉小技巧：</strong>
								洗臉時間控制在30秒～1分鐘內最為適當，過長或過短都不利於肌膚健康。
							</div>
						</div>
					</section>

					{/* 常見的洗臉錯誤 */}
					<section id="mistakes" className="content-section fade-in-up">
						<h2>三、常見的洗臉錯誤，你中了幾項？</h2>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>錯誤洗臉習慣會導致：</strong>
								肌膚乾燥、泛紅、敏感、長粉刺、加速老化等問題。
							</div>
						</div>

						<h3>常見洗臉錯誤</h3>
						<ul>
							<li><strong>用冷水或熱水洗臉：</strong> 冷水無法有效清潔油脂，熱水則會帶走過多皮脂，建議使用溫水。</li>
							<li><strong>過度用力搓揉或用毛巾大力擦拭：</strong> 這樣容易傷害肌膚角質層，導致泛紅或敏感。</li>
							<li><strong>洗臉時間過長或過短：</strong> 時間太短清潔不徹底，太長則會過度清潔。</li>
							<li><strong>一天洗臉超過兩次：</strong> 過度清潔會破壞肌膚天然保護屏障。</li>
							<li><strong>使用不適合的洗面乳：</strong> 選擇不符合膚質的產品會造成肌膚問題。</li>
							<li><strong>洗完臉不立即保養：</strong> 洗臉後肌膚水分快速流失，需要立即補充保濕。</li>
						</ul>
					</section>

					{/* 不同膚質的洗臉技巧 */}
					<section id="tips" className="content-section fade-in-up">
						<h2>四、不同膚質的洗臉技巧</h2>
						
						<div className="skin-type-tips">
							<div className="skin-type-card">
								<h4>油性肌膚</h4>
								<p>選擇控油效果佳的洗面乳，可以一天洗兩次臉，但避免過度清潔。重點清潔T字部位，使用溫水洗臉。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>乾性肌膚</h4>
								<p>選擇溫和保濕的洗面乳，避免含皂基成分的產品。洗臉時間要短，動作要輕柔，洗後立即保濕。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>混合性肌膚</h4>
								<p>T字部位可以稍微加強清潔，兩頰則要溫和對待。可以使用不同的洗面乳分區清潔。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>敏感性肌膚</h4>
								<p>選擇無香料、無酒精的溫和洗面乳。洗臉動作要非常輕柔，避免過度摩擦，水溫要適中。</p>
							</div>
						</div>
					</section>

					{/* 洗臉後的護膚步驟 */}
					<section id="aftercare" className="content-section fade-in-up">
						<h2>五、洗臉後的護膚步驟</h2>
						<p>
							洗臉只是護膚的第一步，洗臉後的保養更是關鍵。正確的後續護理能讓洗臉的效果事半功倍。
						</p>
						
						<div className="aftercare-steps">
							<div className="aftercare-step">
								<h4>化妝水</h4>
								<p>洗臉後立即使用化妝水，幫助肌膚調理pH值，為後續保養做準備。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>精華液</h4>
								<p>根據肌膚需求選擇適合的精華液，如保濕、美白、抗老等功效。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>乳液/面霜</h4>
								<p>最後使用乳液或面霜鎖住水分，形成保護層，防止水分流失。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>防曬</h4>
								<p>白天的最後一步一定要擦防曬，保護肌膚免受紫外線傷害。</p>
							</div>
						</div>
					</section>

					{/* 結語 */}
					<section id="conclusion" className="content-section fade-in-up">
						<h2>六、結語</h2>
						<p>
							正確的洗臉方法是護膚的基礎，看似簡單的動作卻蘊含著許多細節。
							記住，護膚是一個長期的過程，需要耐心和堅持。
						</p>
						
						<div className="conclusion-tips">
							<h4>洗臉護膚重點提醒</h4>
							<ul>
								<li>選擇適合自己膚質的洗面乳</li>
								<li>控制洗臉時間和頻率</li>
								<li>使用溫水，避免過冷或過熱</li>
								<li>動作輕柔，避免過度摩擦</li>
								<li>洗後立即保養，鎖住水分</li>
								<li>持之以恆，才能看到效果</li>
							</ul>
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

export default Article2;
