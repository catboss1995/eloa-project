// src/pages/FQA.jsx
import React, { useMemo, useState } from 'react';
import faqBG from '../assets/images/FAQ-BG.svg'; // 匯入 SVG（只用在底部裝飾）

// 依照設計稿整理的 FAQ 內容
const raw = [
  {
    cat: '產品',
    items: [
      {
        q: '如何選擇適合我的美容儀？',
        a: `我們建議先評估自己的膚況、需求與使用情境。若不確定從哪一款開始，建議先以基礎清潔與舒緩為主，
再依需求加強緊緻或導入等功能。首次使用請從低檔位與短時間開始，並觀察肌膚反應。`
      },
      {
        q: '產品是否通過安全認證？',
        a: `我們的產品與電性零組件皆通過可追溯的品質管控與安規檢測，如 CE、FCC、RoHS，
材質為可接觸肌膚等級，並於出貨前逐批檢測，確保產品的安全與穩定。`
      }
    ]
  },
  {
    cat: '實體店鋪',
    items: [
      {
        q: '在台灣有專櫃或門市嗎？',
        a: `我們目前採線上直營通路為主，並不定期於百貨、展會、選物店舉辦快閃活動。
可於官網或社群關注最新公告；會員也會收到活動訊息與體驗邀請。`
      },
      {
        q: '實體快閃會提供哪些服務？',
        a: `常見現場服務包含（以活動公告為準）：
• 膚況基礎諮詢與產品試用
• 使用教學與保養示範
• 限定組合與加碼禮
• 線上訂單到店／維修送件協助`
      }
    ]
  },
  {
    cat: '線上購物',
    items: [
      {
        q: '線上購物如何保障交易安全？',
        a: `本站採用 HTTPS/SSL 加密連線，並與第三方金流合作處理付款資料。
我們不會主動索取您的信用卡完整資料與簡訊驗證碼。支援信用卡、轉帳、超商代碼、行動支付等方式（以結帳頁顯示為準）。`
      },
      {
        q: '線上訂單多久可以到貨？',
        a: `現貨訂單通常 1–2 個工作天出貨；宅配約 1–3 個工作天、超商取貨約 2–4 個工作天送達。
預購或客製商品以商品頁時程為準；連假／偏遠地區可能順延。`
      },
      {
        q: '收到瑕疵或少件怎麼辦？',
        a: `請於到貨 7 天內（含例假日）拍照或錄影存證，並提供訂單編號與問題說明聯繫客服；
我們會協助換新、補寄或退款。商品需保持完整配件與包裝。`
      }
    ]
  },
  {
    cat: '其他',
    items: [
      {
        q: '如何取得最新消息與優惠活動？',
        a: `追蹤 Facebook／Instagram，或訂閱電子報、加入會員，即可優先收到新品與活動資訊。`
      },
      {
        q: '加入會員有什麼好處？',
        a: `會員可享：訂單查詢、保固登錄、生日禮與活動邀請等權益；不同等級另有專屬優惠。`
      },
      {
        q: '台灣地區配送規範與運費計算？',
        a: `提供宅配與超商取貨；單筆滿 NT$5,000 享免運（大型／偏遠地區以頁面公告為準）。
實際運費於結帳依收件方式與地區自動計算。`
      }
    ]
  }
];

export default function FQA() {
  const [kw, setKw] = useState('');

  // 搜尋 + 依分類分組
  const groups = useMemo(() => {
    const k = kw.trim().toLowerCase();
    const data = !k
      ? raw
      : raw
          .map((g) => ({
            ...g,
            items: g.items.filter(
              (it) =>
                it.q.toLowerCase().includes(k) ||
                it.a.toLowerCase().includes(k) ||
                g.cat.toLowerCase().includes(k)
            )
          }))
          .filter((g) => g.items.length > 0);
    return data;
  }, [kw]);

  return (
    <main className="fqa-page">
      {/* 內文白底容器（請在 SCSS 設寬度、外距） */}
      <section className="fqa-container">
        {/* 標題 + 搜尋列 */}
        <div className="fqa-title-row">
          <h1 className="fqa-title">常見問題</h1>

          <div className="fqa-search">
            <span className="fqa-search-icon" aria-hidden>🔍</span>
            <input
              type="search"
              placeholder="搜尋字詞"
              value={kw}
              onChange={(e) => setKw(e.target.value)}
              aria-label="搜尋常見問題"
            />
          </div>
        </div>

        {/* 分區內容 */}
        {groups.map((g) => (
          <section key={g.cat} className="fqa-group">
            <h2 className="fqa-group-title">{g.cat}</h2>
            <hr className="fqa-divider" />

            <ul className="fqa-list">
              {g.items.map((it, i) => (
                <li key={`${g.cat}-${i}`} className="fqa-item">
                  <h3 className="fqa-q">{it.q}</h3>
                  {/* 將多行以換行顯示（• 序列在 SCSS 用 white-space: pre-line;） */}
                  <p className="fqa-a">{it.a}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {groups.length === 0 && (
          <p className="fqa-empty">找不到「{kw}」相關結果，請嘗試其他關鍵字。</p>
        )}
      </section>

      {/* 只在底部放波浪裝飾，不影響主內容背景 */}
      <footer
        className="fqa-footer-wave"
        style={{
          backgroundImage: `url(${faqBG})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          height: '220px'
        }}
        aria-hidden="true"
      />
    </main>
  );
}
