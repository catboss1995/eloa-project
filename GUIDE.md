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
- 平板：`min-width: 768px` 和 `max-width: 1024px`
- 桌面：`min-width: 1040px` 和 `max-width: 1920px`

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
- `.socBtn` - 社交媒體icon效果
- `.navLk` - 導航連結下劃線效果
- `.toolIco` - 功能icon效果
- `.cardFx` - 卡片懸停效果
- `.btnHover` - 按鈕滑動光效

特殊效果組合：
- `.cart` - 購物車icon搖晃效果
- `.user` - 用戶icon脈衝效果
- `.msg` - 消息icon漣漪效果

### 範例實現

```jsx
// 導航連結
<Link to="/ProductInfo" className="fx navLk">產品資訊</Link>

// 社交媒體icon
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

# VS Code 分支管理操作指南

以下是在 VS Code 中創建和管理 Git 分支的詳細圖文操作指南。

## 前提條件

- 已安裝 VS Code
- 已安裝 Git
- 已打開一個 Git 倉庫項目

## 方法一：使用 VS Code 的原始檔控制界面

### 1.原始檔控制視圖icon

- 點擊左側活動原始檔控制」icon（看起來像樹的
### 2. 創建新分支

1.原始檔控制面板中，找到頂部顯示當前分支名稱的地方（例如「main」）
2. 點擊當前分支名稱，會彈出一個下拉菜單
3. 選擇「+ 建立新分支...」選項
4. 輸入新分支名稱（例如 `feature/product-page`）
5. 按 Enter 確認

### 3. 切換分支

1. 點擊底部狀態欄中顯示的當前分支名稱
2. 在彈出的分支列表中選擇要切換的分支
3. 原始檔控制面板中點擊當前分支名稱，從列表中選擇另一個分支

### 4. 查看所有分支
- 原始檔控制面板中點擊當前分支名稱，下拉菜單會顯示所有本地和遠程分支

### 5. 發布分支到遠程倉庫

- 新創建的本地原始檔控制面板中顯示一個雲icon和「發布分支」選項
- 點擊「發布分支」將其推送到遠程倉庫

## 方法二：使用 VS Code 的集成終端

### 1. 打開終端

- 從菜單選擇「終端 > 新建終端」
- 或使用快捷鍵 `Ctrl+`` （反引號，通常在 Esc 鍵下方）

### 2. 創建新分支並切換到該分支

```bash
git checkout -b feature/product-page
```

### 3. 僅創建分支但不切換

```bash
git branch feature/cart-system
```

### 4. 切換到已存在的分支

```bash
git checkout feature/cart-system
```
或使用較新的命令：
```bash
git switch feature/cart-system
```

### 5. 查看所有分支

```bash
git branch
```
當前分支會以星號（*）標記。

### 6. 推送新分支到遠程倉庫

```bash
git push -u origin feature/product-page
```

## 分支管理操作實例

### 範例：為 ELOA 項目創建產品頁面分支

1. **打開 VS Code 並載入 eloa-project**

2. **使用界面創建分支**：
   - 點擊左側原始檔控制icon
   - 點擊當前分支名稱（例如"main"）
   - 選擇「+ 建立新分支...」
   - 輸入 `feature/product-detail`
   - 按 Enter 確認

3. **開始在新分支上工作**：
   - 修改或創建相關文件
   - 例如，可以編輯 `src/pages/ProductInfo.jsx`

4. **提交更改**：
   - 在原始檔控制面板中，為更改的文件點擊 "+" 暫存更改
   - 輸入提交信息（如「新增產品詳情頁面佈局」）
   - 點擊「✓」按鈕提交

5. **推送到遠程倉庫**：
   - 點擊「發布分支」按鈕
   - 或在終端中運行 `git push -u origin feature/product-detail`

### 範例：從 main 分支創建 bugfix 分支

1. **確保先切換到 main 分支**：
   - 點擊底部狀態欄的當前分支名稱
   - 選擇 "main" 分支

2. **使用終端創建 bugfix 分支**：
   - 打開終端（Ctrl+`）
   - 輸入 `git checkout -b bugfix/layout-issue`
   - 按 Enter 執行

3. **修復問題並提交**：
   - 進行必要的代碼修改
   - 在原始檔控制面板中暫存更改
   - 輸入提交信息並提交

## 進階分支操作

### 合併分支

1. **切換到目標分支**（你希望將更改合併到的分支，通常是 main）：
   - 在狀態欄或原始檔控制面板中切換到目標分支

2. **合併源分支**：
   - 在終端中輸入：`git merge feature/product-detail`
   - 或在原始檔控制面板中點擊「...」菜單，選擇「分支 > 合併> 分支...」，然後選擇源分支

### 解決合併衝突

如果合併時出現衝突：

1. VS Code 會顯示衝突文件，並使用內聯編輯器顯示衝突區域
2. 每個衝突區域會有「接受當前更改」、「接受傳入更改」、「接受兩個更改」或「比較更改」的選項
3. 解決所有衝突後，暫存更改並完成合併提交

### 刪除分支

1. **刪除本地分支**：
   ```bash
   git branch -d feature/product-detail
   ```
   （在終端中執行）

2. **刪除遠程分支**：
   ```bash
   git push origin --delete feature/product-detail
   ```
   （在終端中執行）

## 最佳實踐

1. **創建有意義的分支名稱**：使用前綴如 `feature/`、`bugfix/`、`hotfix/` 等
2. **定期從 main 分支同步**：
   ```bash
   git checkout feature/your-branch
   git merge main
   ```
3. **完成功能後及時清理分支**：合併並刪除不再需要的分支
4. **使用 VS Code 的 Git Graph 擴展**：提供更直觀的分支視覺化

### 分支命名慣例

好的分支命名慣例可以幫助團隊更好地理解分支的用途：

- `feature/功能名稱` - 用於開發新功能
- `bugfix/問題描述` - 用於修復bug
- `hotfix/問題描述` - 用於修復生產環境的緊急問題
- `release/版本號` - 用於準備發布的版本
- `docs/描述` - 用於文檔更新

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