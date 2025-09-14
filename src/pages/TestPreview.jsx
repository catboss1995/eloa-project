import React from "react";

// 為了避免動到App.jsx文件可使用此元件測試 JSX 內容
// 例如：import SensitiveSkinCareGuideSimple from './articles/SensitiveSkinCareGuideSimple';
// 然後在下面的 return 中使用 <SensitiveSkinCareGuideSimple /> 來預覽
// 注意：這個文件僅用於測試和預覽，請勿在生產環境中使用
import Article1 from './articles/Article1';

const TestPreview = () => {
    return (
        <div style={{ padding: 40 }}>
            <h2>JSX 預覽測試</h2>
            <p>這裡可以直接貼上你想測試的 JSX 元件內容。</p>
            {<Article1 />} {/* 替換為你想預覽的組件 */}
        </div>
    );
};

export default TestPreview;
