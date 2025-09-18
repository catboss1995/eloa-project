// src/pages/FQA.jsx
import React, { useState } from "react";
import { GrAdd, GrClose } from "react-icons/gr";
import "../scss/styleFqa.scss";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // 更完整的 FAQ 數據
  const faqData = [
    {
      question: "ELOA 美容儀器安全嗎？",
      answer: "ELOA 所有產品均通過國際安全認證，採用溫和的技術，適合各種膚質使用。每款產品都經過嚴格的皮膚科測試，確保使用安全無虞。"
    },
    {
      question: "多久可以看到效果？",
      answer: "一般使用者在使用 2-4 週後開始感受到肌膚的改善。持續使用 6-8 週，效果會更加明顯。建議搭配適合的保養品，效果會更佳。"
    },
    {
      question: "保固期限與維修服務？",
      answer: "所有產品提供 24 個月保固服務。保固期內若有任何品質問題，我們提供免費維修或更換服務。全台設有服務據點，維修便利。"
    },
    {
      question: "如何正確使用美容儀器？",
      answer: "使用前請先清潔肌膚，塗抹適量的導入凝膠或精華液。按照產品說明書的步驟操作，每次使用建議 10-15 分鐘。使用後請清潔儀器並妥善保存。"
    },
    {
      question: "哪些人不適合使用？",
      answer: "孕婦、哺乳期婦女、心臟疾病患者、皮膚有傷口或發炎者請避免使用。如有特殊肌膚狀況，建議先諮詢皮膚科醫師。"
    },
    {
      question: "產品價格與付款方式？",
      answer: "產品價格依型號而定，詳細價格請參考商品頁面。我們提供多種付款方式：信用卡、LINE Pay、貨到付款等。部分商品提供分期付款服務。"
    },
    {
      question: "配件與耗材如何購買？",
      answer: "凝膠、面膜等耗材可透過官網或客服訂購。配件如充電器、清潔刷等若遺失損壞，也可單獨購買。建議定期更換耗材以維持最佳效果。"
    },
    {
      question: "清潔保養注意事項？",
      answer: "使用後請用濕布擦拭儀器表面，避免水分進入機身。定期使用酒精棉片消毒接觸面。請存放在乾燥通風處，避免陽光直射和高溫環境。"
    }
  ];

  const allOpen = Object.values(openItems).every(Boolean);

  return (
    <div className="faq">
      <video
        className="faq__bg-video"
        src="https://ik.imagekit.io/rgyxmrxzs/%E7%B6%B2%E9%A0%81%E5%9C%96%E7%89%87%E8%AA%BF%E6%95%B4%E5%B0%BA%E5%AF%B8%20(3).mp4?updatedAt=1757920733155"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="faq__container">
        <header className="faq__header">
          <h1 className="faq__title">常見問題</h1>
          <p className="faq__subtitle">
            關於 ELOA 美容儀器的使用與保養，這裡有您需要的解答
          </p>
        </header>
        
        <div className={`faq__list${allOpen ? " all-open" : ""}`} role="region" aria-label="常見問題列表">
          {faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq__item ${openItems[index] ? 'is-open' : ''}`}
              >
                <button 
                  className="faq__q"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItems[index]}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <div className="faq__qtext">
                    <strong>Q.{String(index + 1).padStart(2, '0')}</strong>
                    <span>{item.question}</span>
                  </div>
                  <div className={`faq__chevron ${openItems[index] ? 'is-open' : ''}`}>
                    {openItems[index] ? <GrClose /> : <GrAdd />}
                  </div>
                </button>
                
                <div className="faq__aWrap">
                  <div 
                    className="faq__a"
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="faq__empty">
              <p>目前沒有常見問題內容</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
