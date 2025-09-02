import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

// 添加性能監控 - 開發環境使用
const isDevEnvironment = process.env.NODE_ENV === 'development'

// 創建根元素
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// 渲染應用
root.render(
  // 在生產環境移除 StrictMode 可以避免重複渲染
  isDevEnvironment ? (
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  ) : (
    <HashRouter>
      <App />
    </HashRouter>
  )
)

// 添加性能監控 - 僅在開發環境
if (isDevEnvironment) {
  // 監控長任務
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`長任務警告: ${entry.name} 花費了 ${entry.duration}ms`)
    }
  })
  
  observer.observe({ entryTypes: ['longtask'] })
}