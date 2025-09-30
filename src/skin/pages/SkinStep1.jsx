// src/skin/pages/SkinStep1.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkinForm } from "../store/skinForm";
import { GoChevronRight } from "react-icons/go";
import useDocumentTitle from "../../hooks/useDocumentTitle";  


// 外層容器與玻璃擬態（跟 SkinLanding 同一份）
import styles from "../../scss/SkinTest.module.scss";

// 內部元件樣式（標題 / 膠囊按鈕 / 進度點 / 下一步）
import "../../scss/skin/_step.scss";

const OPTIONS = [
  { id: "sensitive", label: "肌膚敏弱" },
  { id: "acne", label: "出油長痘" },
  { id: "dull", label: "膚色暗沉" },
  { id: "clogged", label: "毛孔粉刺多" },
];

export default function SkinStep1() {
  const nav = useNavigate();
  const { form, setStepData } = useSkinForm();
  

  // 帶入已選（可沒有時為空陣列）
  const [selected, setSelected] = useState(new Set(form?.concerns || []));
  const toggle = (id) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const values = Array.from(selected);
  const canNext = values.length > 0;

  const goNext = () => {
    setStepData("concerns", values);
    nav("/skin/2"); // 下一頁：SkinStep2
  };

  return (
    useDocumentTitle("線上肌膚分析1/4"),
    <div className={styles["skin-page"]}>
      {/* 左側或全版背景（與 Landing 同一套） */}
      <div className={styles["bg-image"]} />

      {/* 玻璃擬態卡片：沿用 .glass-box，再加一個 .glass-box--step 來調整位置/尺寸 */}
      <div className={`${styles["glass-box"]} ${styles["glass-box--step"]}`}>
        <h2 className="skin-card__title">
          你的日常肌膚困擾是？<span className="hint">（可複選）</span>
        </h2>

        <div className="skin-grid">
          {OPTIONS.map(o => {
            const active = selected.has(o.id);
            return (
              <button
                key={o.id}
                type="button"
                className={`pill ${active ? "is-active" : ""}`}
                aria-pressed={active}
                onClick={() => toggle(o.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault(); toggle(o.id);
                  }
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        <div className="skin-footer">
          {/* 置中的下一步按鈕 */}
          <button
            className="btn-next"
            disabled={!canNext}
            onClick={goNext}
          >
            下一步 <GoChevronRight />
          </button>

          {/* 置中的 4 顆圓點（第二顆亮） */}
          <div className={styles["dots"]}>
            <span className={styles["dot"]} />
            <span className={`${styles["dot"]} ${styles["active"]}`} />
            <span className={styles["dot"]} />
            <span className={styles["dot"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
