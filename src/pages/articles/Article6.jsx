import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaThermometerHalf, FaRegClock, FaUserMd, FaChevronUp, FaExclamationTriangle, FaCheckCircle, FaInfoCircle, FaHome, FaChevronRight, FaUser, FaCalendarAlt, FaShare, FaBookmark, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaLine } from 'react-icons/fa';
import '../../scss/articles/_elegant-design.scss';
import articlesData from '../../data/articlesData';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Article6 = () => {
	const [activeSection, setActiveSection] = useState(0);
	const [readingProgress, setReadingProgress] = useState(0);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [showShareMenu, setShowShareMenu] = useState(false);

	// 文章數據
	const articleData = articlesData[5]; // 第六篇文章

	// 導航項目
	const sections = [
		{ id: 'benefits', title: '按摩好處', icon: FaInfoCircle },
		{ id: 'preparation', title: '準備工作', icon: FaCheckCircle },
		{ id: 'techniques', title: '正確手法', icon: FaLightbulb },
		{ id: 'mistakes', title: '常見錯誤', icon: FaExclamationTriangle },
		{ id: 'tools', title: '按摩工具', icon: FaUserMd },
		{ id: 'tips', title: '頻率與保養', icon: FaRegClock }
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
					{/* 臉部按摩的好處 */}
					<section id="benefits" className="content-section fade-in-up">
						<h2>一、臉部按摩的五大好處</h2>
						<p>
							臉部按摩不僅是一種放鬆的享受，更是一種有效的保養方式。每天只需5-10分鐘，就能為肌膚帶來多重好處。
						</p>
						
						<div className="skin-type-tips">
							<div className="skin-type-card">
								<h4>促進血液循環</h4>
								<p>按摩能加速臉部血流，改善暗沉與蠟黃。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>減少水腫與浮腫</h4>
								<p>有效帶走淋巴廢物，早上起床臉腫腫特別適合。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>提升保養品吸收</h4>
								<p>搭配精華液或乳霜，讓營養成分更深入肌底。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>緊緻輪廓、減少細紋</h4>
								<p>刺激膠原蛋白生成，讓臉部線條更明顯。</p>
							</div>
							
							<div className="skin-type-card">
								<h4>放鬆壓力，舒緩情緒</h4>
								<p>按摩同時能放鬆臉部肌肉，減少緊繃與壓力。</p>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaInfoCircle />
							</div>
							<div className="tip-content">
								<strong>小知識：</strong>
								臉部有超過40塊肌肉，長期緊繃會導致皺紋和下垂。定期按摩能幫助這些肌肉保持彈性和活力，延緩老化跡象。
							</div>
						</div>
					</section>

					{/* 按摩前的準備工作 */}
					<section id="preparation" className="content-section fade-in-up">
						<h2>二、按摩前的準備工作</h2>
						
						<div className="step-list">
							<div className="step-item">
								<div className="step-number">1</div>
								<div className="step-content">
									<h4>徹底清潔雙手與臉部</h4>
									<p>確保雙手和臉部都已清潔乾淨，避免將髒污和細菌帶入肌膚。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">2</div>
								<div className="step-content">
									<h4>準備按摩油、乳霜或精華液</h4>
									<p>選擇適合自己膚質的產品，減少摩擦，避免拉扯肌膚。油性肌可選輕薄質地，乾性肌則需滋潤型。</p>
								</div>
							</div>
							<div className="step-item">
								<div className="step-number">3</div>
								<div className="step-content">
									<h4>將頭髮固定</h4>
									<p>用髮帶或髮夾將頭髮固定，確保臉部和髮際線完全露出，方便操作。</p>
								</div>
							</div>
						</div>
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>選擇按摩產品小技巧：</strong>
								按摩時建議選擇滑順度較高的產品，如含有天然油脂的精華油或乳霜。若使用一般保養品，可適量增加用量，確保按摩過程中肌膚不會有拉扯感。
							</div>
						</div>
					</section>

					{/* 臉部按摩正確手法 */}
					<section id="techniques" className="content-section fade-in-up">
						<h2>三、臉部按摩正確手法分解</h2>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>按摩原則：</strong>
								所有按摩動作都應遵循「由內而外、由下而上」的原則，順著淋巴流向進行，力道輕柔均勻。
							</div>
						</div>

						<div className="recommendation-table">
							<div className="table-row header">
								<div className="table-cellH3">部位</div>
								<div className="table-cell">手法</div>
								<div className="table-cell">次數</div>
								<div className="table-cell">注意事項</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">下巴與輪廓線</div>
								<div className="table-cell">雙手大拇指由下巴中央沿著下頜骨推至耳下</div>
								<div className="table-cell">重複3-5次</div>
								<div className="table-cell">力道適中，勿過度拉扯</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">臉頰</div>
								<div className="table-cell">四指指腹由嘴角往顴骨方向提拉</div>
								<div className="table-cell">重複3-5次</div>
								<div className="table-cell">動作溫柔向上</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">鼻翼與法令紋</div>
								<div className="table-cell">中指指腹沿著鼻翼兩側輕壓至太陽穴</div>
								<div className="table-cell">重複3-5次</div>
								<div className="table-cell">幫助舒緩法令紋</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">眼周</div>
								<div className="table-cell">無名指指腹輕輕由眼頭滑至眼尾，再繞至眼下</div>
								<div className="table-cell">重複3-5次</div>
								<div className="table-cell">力道最輕，避免拉扯</div>
							</div>
							<div className="table-row">
								<div className="table-cellH3">額頭</div>
								<div className="table-cell">雙手指腹由眉心向上推至髮際線，再往兩側太陽穴劃圓</div>
								<div className="table-cell">重複3-5次</div>
								<div className="table-cell">可舒緩皺紋</div>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaCheckCircle />
							</div>
							<div className="tip-content">
								<strong>完整按摩順序：</strong>
								建議按照「下巴→臉頰→鼻翼→眼周→額頭」的順序進行，由下往上按摩，最後再整體輕拍臉部，幫助保養品吸收。
							</div>
						</div>
					</section>

					{/* 按摩常見錯誤 */}
					<section id="mistakes" className="content-section fade-in-up">
						<h2>四、按摩常見錯誤與注意事項</h2>
						
						<div className="selection-tips">
							<div className="selection-tip">
								<h4>力道過大</h4>
								<p>容易拉傷肌膚，產生皺紋。正確做法是輕柔但有力，尤其眼周更需溫柔。</p>
							</div>
							
							<div className="selection-tip">
								<h4>未使用潤滑產品</h4>
								<p>乾摩會傷害皮膚屏障。按摩前一定要先塗抹按摩油或乳霜。</p>
							</div>
							
							<div className="selection-tip">
								<h4>臉部未清潔乾淨</h4>
								<p>易造成毛孔阻塞、長痘。按摩前應先徹底卸妝洗臉。</p>
							</div>
							
							<div className="selection-tip">
								<h4>按摩時間過長</h4>
								<p>每次5-10分鐘為宜，過度反而造成負擔。</p>
							</div>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>按摩力道測試：</strong>
								不確定力道是否適中？試試在眼皮上按摩的感覺 - 應該能感受到輕微壓力但完全不會疼痛或不適。這個力道適用於全臉，眼周可再輕一些。
							</div>
						</div>
					</section>

					{/* 搭配按摩工具 */}
					<section id="tools" className="content-section fade-in-up">
						<h2>五、搭配按摩工具加分</h2>
						<p>
							除了用手指按摩外，適當運用按摩工具能讓效果更加顯著。以下是幾種常見的按摩工具及其功效：
						</p>
						
						<div className="aftercare-steps">
							<div className="aftercare-step">
								<h4>按摩棒/滾輪</h4>
								<p>加強緊緻、舒緩浮腫，玉石材質還有降溫效果。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>刮痧板</h4>
								<p>促進循環，改善臉部線條，尤其適合輪廓塑造。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>溫熱按摩儀</h4>
								<p>放鬆肌肉、提升舒適度，促進血液循環。</p>
							</div>
							
							<div className="aftercare-step">
								<h4>冰球/冰棒</h4>
								<p>收縮毛孔、消除浮腫，夏季或敏感肌特別適合。</p>
							</div>
						</div>
						
						<div className="tip-card warning fade-in-up">
							<div className="tip-icon">
								<FaExclamationTriangle />
							</div>
							<div className="tip-content">
								<strong>工具使用提醒：</strong>
								初次使用按摩工具時，建議先從短時間開始，觀察肌膚反應。任何工具使用前都應確保清潔，使用後也要立即清潔並晾乾，避免細菌滋生。
							</div>
						</div>
					</section>

					{/* 按摩頻率與保養 */}
					<section id="tips" className="content-section fade-in-up">
						<h2>六、按摩的理想頻率與保養重點</h2>
						
						<div className="faq-container">
							<div className="faq-item">
								<h4>按摩頻率</h4>
								<p>建議每週3-5次，或根據肌膚狀態調整。早上可短時間按摩消水腫，晚上可進行較完整的按摩程序。</p>
							</div>
							
							<div className="faq-item">
								<h4>按摩時機</h4>
								<p>早上消水腫，晚上放鬆壓力都很適合。敷面膜前按摩可提升面膜吸收效果。</p>
							</div>
							
							<div className="faq-item">
								<h4>按摩後的保養重點</h4>
								<ul>
									<li>再次補水保濕</li>
									<li>白天按摩後記得防曬</li>
									<li>敏感肌膚如有不適應立即停止</li>
								</ul>
							</div>
						</div>
						
						<div className="conclusion-tips">
							<h4>結語</h4>
							<p>臉部按摩是最簡單、最划算的肌膚保養投資，只要掌握正確手法與適合的產品，天天都能擁有緊緻、透亮的好氣色！堅持是關鍵，即使只有幾分鐘，長期堅持也能看到明顯效果。</p>
						</div>
						
						<div className="tip-card fade-in-up">
							<div className="tip-icon">
								<FaLightbulb />
							</div>
							<div className="tip-content">
								<strong>按摩小提示：</strong>
								想讓按摩效果加倍？試試將按摩工具放入冰箱冷藏10-15分鐘後再使用，冷敷效果能立即改善浮腫，特別適合早晨或熱天使用！
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

export default Article6;