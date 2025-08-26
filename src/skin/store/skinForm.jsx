// src/skin/store/skinForm.jsx
import { createContext, useContext, useState } from "react";

const SkinFormCtx = createContext(null);
export const useSkinForm = () => useContext(SkinFormCtx);

export function SkinFormProvider({ children }) {
  const [form, setForm] = useState({
    effects: [],   // Step1 例：最在意保養效果
    routine: [],   // Step2 例：Routine 階段
    concerns: [],  // Step3 例：日常困擾
  });

  const setStepData = (key, value) =>
    setForm(prev => ({ ...prev, [key]: Array.isArray(value) ? value : [value] }));

  const resetForm = () => setForm({ effects: [], routine: [], concerns: [] });

  return (
    <SkinFormCtx.Provider value={{ form, setStepData, resetForm }}>
      {children}
    </SkinFormCtx.Provider>
  );
}
