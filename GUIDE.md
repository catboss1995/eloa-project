# ELOA 專案開發指南

## 專案概述

ELOA 是一個美容儀品牌的官方網站專案，使用 React 和 Vite 構建，希望打造一個現代、互動性強且視覺吸引力高的用戶體驗。

## 資料夾結構

```
eloa-project/
├── src/                 # 源代碼
│   ├── assets/          # 靜態資源
│   │   └── images/      # 圖片資源
│   ├── components/      # 可重用組件
│   ├── pages/           # 頁面組件
│   ├── scss/            # 樣式文件
│   ├── App.jsx          # 主應用組件
│   └── main.jsx         # 入口文件
├── public/              # 公共資源
├── package.json         # 專案依賴
└── vite.config.js       # Vite 配置
```

## 設計系統

### 色彩系統

在開發中請統一使用這些顏色，可在 `_variables.scss` 中找到所有預定義顏色變數。

### 響應式設計斷點

專案使用以下斷點進行響應式設計：

- 移動裝置：`max-width: 767px`
- 平板：`min-width: 768px` 和 `max-width: 1023px`
- 桌面：`min-width: 1024px`

## 開發規範

### 組件開發

- 每個頁面都在 `pages` 資料夾內
- 可重用組件放在 `components` 資料夾
- 組件命名使用 PascalCase (如 `Topbar.jsx`)
- 頁面與組件使用函數式組件，搭配 React Hooks

### 樣式開發

- 使用 SCSS 進行樣式開發
- 基礎樣式放在 `scss` 資料夾
- 命名規則：樣式文件使用 `style` 前綴，後接組件名 (如 `styleTopbar.scss`)
- 特效類樣式集中在 `buttonEffects.scss` 中

## 樣式系統使用指南

### 按鈕效果系統

我們開發了一套豐富的按鈕互動效果，集中在 `buttonEffects.scss` 中：

#### 基本使用方法

1. 引入樣式文件
   ```jsx
   import "../scss/buttonEffects.scss";
   ```

2. 在元素上添加相應類名
   ```jsx
   <button className="fx">按鈕文字</button>
   ```

#### 常用效果類名

- `.fx` - 基本效果（懸停上浮、點擊縮放）
- `.socBtn` - 社交媒體圖標效果
- `.navLk` - 導航連結下劃線效果
- `.toolIco` - 功能圖標效果
- `.cardFx` - 卡片懸停效果
- `.btnHover` - 按鈕滑動光效

特殊效果組合：
- `.cart` - 購物車圖標搖晃效果
- `.user` - 用戶圖標脈衝效果
- `.msg` - 消息圖標漣漪效果

### 範例實現

```jsx
// 導航連結
<Link to="/ProductInfo" className="fx navLk">產品資訊</Link>

// 社交媒體圖標
<img src={fbIcon} alt="Facebook" className="socBtn fx fbIcon" />

// 功能按鈕
<Link to="/Member" className="fx toolIco user">
  <img src={memberIcon} alt="會員" />
</Link>
```

## 路由系統

專案使用 React Router v6 進行路由管理：

```jsx
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Article' element={<Article/>}></Route>
  <Route path='/FQA' element={<FQA/>}></Route>
  <Route path='/Member' element={<Member/>}></Route>
  <Route path='/News' element={<News/>}></Route>
  <Route path='/ProductInfo' element={<ProductInfo/>}></Route>
  <Route path='/ShopCart' element={<ShopCart/>}></Route>
  <Route path='/SkinTest' element={<SkinTest/>}></Route>
</Routes>
```

## 開發工作流程

1. 拉取最新代碼
   ```bash
   git checkout feature/your-branch
   git pull origin main
   ```

2. 進行開發工作

3. 提交修改
   ```bash
   git add .
   git commit -m "烏鴉-某月某號做了xxx功能"
   git push
   ```

4. 如需合併到主分支，發起 Pull Request

## 項目運行筆記

```bash
# 安裝依賴
npm install

# 開發模式運行
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 通用組件

### Topbar

頂部導航欄，具有滾動響應效果：

```jsx
<Topbar />
```

### Footer

網站頁尾，包含品牌信息和導航連結：

```jsx
<Footer />
```

## 後續開發計劃

- 完善產品詳情頁面
- 實現會員系統
- 添加購物車功能
- 優化移動端體驗

## 貢獻指南

1. 遵循既有的代碼風格和命名規範
2. 提交前進行代碼自測
3. 提交有意義的 commit 信息
4. 及時更新文檔

## 常見問題解答 (FAQ)

### Q: 為什麼我的樣式變更沒有生效？
A: 檢查是否正確引入了樣式文件，以及類名是否正確。SCSS 文件修改後需要重新編譯，可能需要重啟開發服務器。

### Q: 如何處理響應式設計？
A: 使用 SCSS 中的媒體查詢和預定義的斷點變數。詳見 `styleReset.scss` 中的斷點定義。

希望這份指南能幫助大家更好地參與到 ELOA 專案的開發中。有任何問題或建議，隨時與團隊討論。

加油！