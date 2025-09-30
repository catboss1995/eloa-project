import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Article5 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[4]; // 第五篇文章

	// 導航項目
	const sections = [
		{ id: 'intro', title: '保濕三大關鍵', icon: FaInfoCircle },
		{ id: 'traps', title: '保濕常見陷阱', icon: FaExclamationTriangle },
		{ id: 'products', title: '產品選擇指南', icon: FaCheckCircle },
		{ id: 'tips', title: '加分小技巧', icon: FaLightbulb },
		{ id: 'conclusion', title: '結語', icon: FaUserMd }
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
					{/* 保濕三大關鍵 */}
					<section id="intro" className="content-section fade-in-up">
						<h2>一、保濕的三大關鍵</h2>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>補水：為肌膚注入水分</h4>
									<p>保濕第一步是「補水」，選擇含有玻尿酸、甘油等成分的化妝水或精華。使用噴霧或輕拍化妝水，幫助角質層吸收水分。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>鎖水：防止水分流失</h4>
									<p>僅僅補水還不夠，還要「鎖水」！乳液、乳霜內的油脂能在皮膚表面形成保護膜，減少水分蒸發。根據膚質選擇適合的鎖水產品，油性肌可選清爽型，乾性肌則需滋潤型。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>修護：強化肌膚屏障</h4>
									<p>當你發現怎麼補水、鎖水都還是覺得臉乾，很可能是肌膚屏障已經受損。健康的肌膚屏障就像一道牆，能牢牢鎖住水分、抵禦外界刺激。一旦這道牆變薄、破損，水分就會迅速蒸發，肌膚也容易敏感、泛紅甚至脫皮。</p>
								</div>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>修護肌膚屏障的關鍵做法：</strong>
								<ul>
									<li>選擇含有神經醯胺（Ceramide）、膽固醇、脂肪酸等成分的修護型保養品，這些成分能填補角質層間的縫隙，加強防護力。</li>
									<li>避免過度去角質與刺激性成分，給肌膚時間慢慢修復。</li>
									<li>定期使用修護型面膜，可以快速舒緩乾燥、敏感的不適。</li>
									<li>日常生活中多留意保濕與防曬，減少外在傷害。</li>
								</ul>
							</div>
						</div>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>小提醒：</strong>
								修護肌膚屏障需要時間，建議持續溫和保養2-4週，才能明顯感受到改善。
							</div>
						</div>
					</section>

					{/* 保濕常見陷阱 */}
					<section id="traps" className="content-section fade-in-up">
						<h2>二、日常保濕常見陷阱</h2>
						
						<div className="skin-type-tips">
							<div className="skin-type-card">
								<h4>洗臉過度或用熱水</h4>
								<p>熱水與過度清潔會帶走皮脂，讓肌膚更乾。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>忽略化妝水/精華</h4>
								<p>只擦乳液，卻沒先補水，等於「鎖住乾燥」。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>環境濕度低</h4>
								<p>長時間待在冷氣房或乾燥環境，水分易流失。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>飲水量不足</h4>
								<p>體內缺水，皮膚自然乾燥。</p>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>改善小提示：</strong>
								使用溫水洗臉，增加室內濕度（可使用加濕器），並確保每天飲用足夠的水分。
							</div>
						</div>
					</section>

					{/* 產品選擇指南 */}
					<section id="products" className="content-section fade-in-up">
						<h2>三、如何挑選適合自己的保濕產品？</h2>
						
						<div className="recommendation-table">
							<div className="table-row header">
								<div className="table-cellH3">膚質</div>
								<div className="table-cell">推薦產品</div>
								<div className="table-cell">特點</div>
								<div className="table-cell">注意事項</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">乾性肌膚</div>
								<div className="table-cell">高保濕、滋潤型乳霜</div>
								<div className="table-cell">質地滋潤，含豐富油脂</div>
								<div className="table-cell">加強修護成分</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">油性肌膚</div>
								<div className="table-cell">清爽型保濕凝膠</div>
								<div className="table-cell">水感輕盈，不油膩</div>
								<div className="table-cell">避免厚重油脂</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">敏感肌膚</div>
								<div className="table-cell">低刺激配方</div>
								<div className="table-cell">溫和不刺激</div>
								<div className="table-cell">避免香料、酒精</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">混合性肌膚</div>
								<div className="table-cell">分區使用不同產品</div>
								<div className="table-cell">平衡油水</div>
								<div className="table-cell">T字部位用清爽型，兩頰加強滋潤</div>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaCheckCircle />
							</div>
							<div className="tip-content">
								<strong>保濕成分推薦：</strong>
								<ul>
									<li>補水成分：玻尿酸、甘油、尿囊素</li>
									<li>鎖水成分：神經醯胺、角鯊烯、乳木果油</li>
									<li>修護成分：泛醇、積雪草、蘆薈</li>
								</ul>
							</div>
						</div>
					</section>

					{/* 加分小技巧 */}
					<section id="tips" className="content-section fade-in-up">
						<h2>四、加分小技巧：保濕面膜與夜間修護</h2>
						
						<div className="selection-tips">
							<div className="selection-tip">
								<h4>定期保濕面膜</h4>
								<p>每週2-3次保濕面膜，能快速補水。</p>
							</div>
							
							<div className="selection-tip">
								<h4>夜間修護</h4>
								<p>夜間使用修護型晚霜，讓肌膚在睡眠中修復。</p>
							</div>
							
							<div className="selection-tip">
								<h4>溫和去角質</h4>
								<p>每週1-2次溫和去角質，幫助保養品吸收。</p>
							</div>
							
							<div className="selection-tip">
								<h4>室內加濕</h4>
								<p>使用加濕器增加室內濕度，減少水分流失。</p>
							</div>
						</div>
						
						<div className="aftercare-steps">
							<div className="aftercare-step">
								<h4>保濕噴霧</h4>
								<p>隨身攜帶保濕噴霧，隨時補充水分。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>溫和洗臉</h4>
								<p>選擇溫和洗面乳，避免過度清潔。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>多層次保濕</h4>
								<p>採用多層次保濕法，從化妝水到乳霜層層鎖水。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>均衡飲食</h4>
								<p>攝取富含Omega-3脂肪酸和抗氧化物的食物。</p>
							</div>
						</div>
					</section>

					{/* 結語 */}
					<section id="conclusion" className="content-section fade-in-up">
						<h2>結語</h2>
						
						<div className="conclusion-tips">
							<p>保濕做對了，肌膚才能真正水嫩有彈性！從補水、鎖水到修護，每一步都不能少。快檢查自己的保養步驟，讓臉不再乾巴巴吧！</p>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>記住保濕三步驟：</strong>
								<ol>
									<li>補水：添加水分</li>
									<li>鎖水：防止流失</li>
									<li>修護：強化屏障</li>
								</ol>
								持之以恆地執行這三步驟，你的肌膚將會越來越健康水潤！
							</div>
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

export default Article5;