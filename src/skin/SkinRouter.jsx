// src/skin/SkinRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { SkinFormProvider } from "./store/skinForm";

// 五個頁面（你已經有檔案就保持原路徑）
import SkinLanding from "./pages/SkinLanding"; // 第①頁：開始分析
import SkinStep1 from "./pages/SkinStep1";     // 第②頁
import SkinStep2 from "./pages/SkinStep2";     // 第③頁
import SkinStep3 from "./pages/SkinStep3";     // 第④頁
import SkinStep4 from "./pages/SkinStep4";     // 第⑤頁：完成/預約

export default function SkinRouter() {
  return (
    <SkinFormProvider>
      <Routes>
        {/* 進入 /skin 時，預設導到 landing */}
        <Route index element={<Navigate to="landing" replace />} />

        {/* 我的膚況區 5 個頁面 */}
        <Route path="landing" element={<SkinLanding />} />
        <Route path="1" element={<SkinStep1 />} />
        <Route path="2" element={<SkinStep2 />} />
        <Route path="3" element={<SkinStep3 />} />
        <Route path="4" element={<SkinStep4 />} />

        <Route path="*" element={<Navigate to="landing" replace />} />
      </Routes>
    </SkinFormProvider>
  );
}
