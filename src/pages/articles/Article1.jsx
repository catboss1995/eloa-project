import React, { useState, useEffect, use } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import essence from "../../assets/images/essence.svg"
import gel from "../../assets/images/gel.avif"

const Article1 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[0]; // 第一篇文章

	// 導航項目
	const sections = [
		{ id: 'intro', title: '認識敏感肌', icon: FaInfoCircle },
		{ id: 'features', title: '特徵與成因', icon: FaExclamationTriangle },
		{ id: 'care', title: '日常護理', icon: FaCheckCircle },
		{ id: 'products', title: '產品選擇', icon: FaLightbulb },
		{ id: 'emergency', title: '急救方法', icon: FaUserMd },
		{ id: 'lifestyle', title: '生活建議', icon: FaRegClock }
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

				{/* 移動版目錄導航 */}
				<nav className="mobile-table-of-contents fade-in-up">
					<h3>文章目錄</h3>
					<ul>
						{sections.map((section, index) => (
							<li key={`mobile-${section.id}`}>
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

				{/* 文章內容 */}
				<main className="article-content">
					{/* 認識敏感肌 */}
					<section id="intro" className="content-section fade-in-up">
						<h2>什麼是敏感肌膚？</h2>
						<p>
							敏感肌膚是指肌膚對外界刺激反應過度敏感的狀態。這類肌膚的屏障功能較為薄弱，
							容易受到環境變化、化學成分或物理刺激的影響，導致各種不適症狀的出現。
						</p>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>敏感肌的判斷標準：</strong>
								如果您的肌膚經常出現泛紅、刺痛、緊繃、發癢等症狀，
								特別是在使用新產品或季節變化時，很可能就是敏感肌膚。
							</div>
						</div>
					</section>

					{/* 特徵與成因 */}
					<section id="features" className="content-section fade-in-up">
						<h2>敏感肌的特徵與形成原因</h2>
						
						<h3>常見特徵</h3>
						<ul>
							<li><strong>視覺表現：</strong>容易泛紅、出現紅血絲、局部乾燥脫皮</li>
							<li><strong>觸感異常：</strong>肌膚薄透、觸感粗糙不平滑</li>
							<li><strong>感受症狀：</strong>刺痛、發癢、緊繃、灼熱感</li>
							<li><strong>反應敏感：</strong>對氣候變化、新產品使用反應強烈</li>
						</ul>

						<h3>形成原因</h3>
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>先天因素</h4>
									<p>遺傳基因影響皮膚屏障功能，天生角質層較薄、皮脂分泌不足</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>環境壓力</h4>
									<p>紫外線傷害、空氣污染、氣候變化等外在環境因素</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>護理不當</h4>
									<p>過度清潔、使用刺激性產品、頻繁更換保養品</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">4</div>
								<div className="step-content">
									<h4>生活習慣</h4>
									<p>壓力過大、睡眠不足、飲食不均衡等生活因素</p>
								</div>
							</div>
						</div>
					</section>

					{/* 日常護理 */}
					<section id="care" className="content-section fade-in-up">
						<h2>敏感肌的正確護理方式</h2>
						
						<p>
							敏感肌的護理原則是「溫和、簡化、穩定」。過度複雜的護理步驟
							反而可能造成肌膚負擔，導致敏感情況加重。
						</p>

						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>溫和清潔</h4>
									<p>使用溫和的洗面乳，避免含皂基、酒精的產品。水溫控制在微涼至溫水之間，避免過熱。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>充分保濕</h4>
									<p>選擇質地溫和、成分單純的保濕產品，重點修護肌膚屏障功能。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>確實防曬</h4>
									<p>選擇物理性防曬產品，SPF30以上即可，避免化學防曬可能造成的刺激。</p>
								</div>
							</div>
						</div>

						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>護理禁忌：</strong>
								避免使用去角質產品、含酸類成分的產品，以及具有美白、抗老等功能性的複合產品。
							</div>
						</div>
					</section>

					{/* 產品選擇 */}
					<section id="products" className="content-section fade-in-up">
						<h2>如何選擇適合的護膚產品</h2>

						<h3>選擇原則</h3>
						<ul>
							<li><strong>成分單純：</strong>選擇成分列表簡短、無添加香料色素的產品</li>
							<li><strong>專業認證：</strong>選擇通過敏感肌測試或醫師推薦的品牌</li>
							<li><strong>修護導向：</strong>含有神經醯胺、玻尿酸、洋甘菊等舒緩成分</li>
							<li><strong>先試後買：</strong>新產品使用前務必進行過敏測試</li>
						</ul>

						<div className="product-showcase fade-in-up">
							<div className="product-card">
								<div className="product-image">
									<img src={essence} alt="光彩賦活精華" />
								</div>
								<div className="product-info">
									<h3>光彩賦活精華</h3>
									<p>重啟肌膚光澤 x 喚醒穩定能量</p>
								</div>
							</div>
							<div className="product-card">
								<div className="product-image">
									<img src={gel} alt="Calmie 專用舒緩凝膠" />
								</div>
								<div className="product-info">
									<h3>Calmie 專用舒緩凝膠</h3>
									<p>升級舒緩力 x 鎮定加成感</p>
								</div>
							</div>
						</div>

						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>過敏測試方法：</strong>
								將少量產品塗抹在耳後或手腕內側，觀察24-48小時無紅腫、刺痛反應後再使用於臉部。
							</div>
						</div>
					</section>

					{/* 急救方法 */}
					<section id="emergency" className="content-section fade-in-up">
						<h2>敏感肌急救護理方法</h2>

						<p>
							當肌膚出現急性敏感反應時，正確的急救處理可以有效緩解症狀，
							避免情況惡化。以下是專業皮膚科醫師建議的急救步驟：
						</p>

						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>立即停用</h4>
									<p>停用所有可能引起過敏的產品，包括新使用的護膚品、彩妝品等。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>冷敷舒緩</h4>
									<p>用乾淨的濕毛巾冷敷患部5-10分鐘，可重複進行，幫助鎮定泛紅。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>簡化護理</h4>
									<p>僅使用最溫和的清水洗臉，並塗抹溫和的保濕乳液。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">4</div>
								<div className="step-content">
									<h4>尋求協助</h4>
									<p>若症狀持續惡化或出現嚴重腫脹，應立即諮詢皮膚科醫師。</p>
								</div>
							</div>
						</div>

						<div className="tip-card error fade-in-up">
							<div className="tip-icon">
								<FaUserMd />
							</div>
							<div className="tip-content">
								<strong>就醫指標：</strong>
								出現持續紅腫、水泡、嚴重刺痛或影響日常生活時，請立即就醫治療。
							</div>
						</div>
					</section>

					{/* 生活建議 */}
					<section id="lifestyle" className="content-section fade-in-up">
						<h2>敏感肌的生活保養建議</h2>

						<p>
							除了正確的護膚步驟，日常生活習慣對敏感肌的穩定也有重要影響。
							以下生活調整建議可以幫助改善肌膚狀態：
						</p>

						<h3>環境調節</h3>
						<ul>
							<li>維持室內適當濕度（40-60%），避免過於乾燥</li>
							<li>減少待在冷氣房的時間，定時補充水分</li>
							<li>保持居家環境清潔，減少塵蟎和過敏原</li>
							<li>選擇溫和的清潔用品和洗衣精</li>
						</ul>

						<h3>飲食調整</h3>
						<ul>
							<li>增加富含維生素C、E的食物攝取</li>
							<li>補充Omega-3脂肪酸，如深海魚類、堅果</li>
							<li>減少刺激性食物，如辛辣、酒精等</li>
							<li>保持充足水分攝取，每日至少8杯水</li>
						</ul>

						<h3>生活作息</h3>
						<ul>
							<li>保持充足睡眠，每日7-8小時</li>
							<li>適當運動，促進血液循環</li>
							<li>學習放鬆技巧，減少壓力對肌膚的影響</li>
							<li>避免頻繁更換護膚品，給肌膚適應時間</li>
						</ul>

						<div className="tip-card success fade-in-up">
							<div className="tip-icon">
								<FaCheckCircle />
							</div>
							<div className="tip-content">
								<strong>記錄追蹤：</strong>
								建議記錄肌膚狀態變化，包括使用的產品、環境變化、飲食內容等，
								有助於找出引發敏感的具體原因。
							</div>
						</div>
					</section>

					{/* 結語 */}
					<section className="content-section fade-in-up" style={{ borderTop: '1px solid #eee', paddingTop: '40px', marginTop: '60px' }}>
						<h2>結語</h2>
						<p>
							敏感肌雖然嬌嫩易感，但通過正確的護理方法和生活調整，
							完全可以擁有健康穩定的肌膚狀態。記住「溫和、簡化、堅持」
							的護理原則，給肌膚充分的時間恢復和適應。
						</p>
						<p>
							每個人的肌膚狀況不同，建議在專業皮膚科醫師的指導下，
							制定最適合自己的護理方案。堅持正確護理，您的敏感肌
							也能重現健康光采。
						</p>
					</section>
				</main>
			</div>

			{/* 返回頂部按鈕 */}
			<button 
				className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				aria-label="返回頂部"
			>
				<FaChevronUp />
			</button>
		</article>
	);
};

export default Article1;