import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkinForm } from "../store/skinForm";
import { GoChevronRight } from "react-icons/go";
import useDocumentTitle from "../../hooks/useDocumentTitle"

// 外層容器與玻璃擬態（與 SkinLanding 同一份）
import styles from "../../scss/SkinTest.module.scss";

// 內部元件樣式（標題 / 膠囊按鈕 / 進度點 / 下一步）
import "../../scss/skin/_step.scss";


const OPTIONS = [
  { id: "brightening", label: "提亮透白" },
  { id: "antiaging",   label: "抗老緊緻" },
  { id: "soothing",    label: "保濕舒緩" },
  { id: "deepclean",   label: "深層清潔" },
];

export default function SkinStep3() {
  const nav = useNavigate();
  const { form, setStepData } = useSkinForm();

  // 讀取/維持選擇（可複選）
  const [selected, setSelected] = useState(new Set(form?.effects || []));
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
    setStepData("effects", values); // 儲存此步資料
    nav("/skin/4");                 // 下一頁
  };

  return (
    useDocumentTitle("線上肌膚分析3/4"),
    <div className={styles["skin-page"]}>
      {/* 左側/全版背景圖（與 Landing 同一套） */}
      <div className={styles["bg-image"]} />

      {/* 玻璃擬態卡片（沿用 .glass-box，並加 .glass-box--step 控位置與寬度） */}
      <div className={`${styles["glass-box"]} ${styles["glass-box--step"]}`}>
        <h2 className="skin-card__title">
          您最在意的保養效果？<span className="hint">（可複選）</span>
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
                    e.preventDefault();
                    toggle(o.id);
                  }
                }}
              >
                {o.label}
              </button>
            );
          })}
        </div>

        {/* 置中：按鈕在上、圓點在下（樣式來自 _step.scss） */}
        <div className="skin-footer">
          <button
            className="btn-next"
            disabled={!canNext}
            onClick={goNext}
          >
            下一步 <GoChevronRight />
          </button>

          {/* 4 顆圓點 —— 這一頁亮第 4 顆；如果你要對齊別的流程，把 active 移動到相對應位置即可 */}
          <div className={styles["dots"]}>
            <span className={styles["dot"]} />
            <span className={styles["dot"]} />
            <span className={styles["dot"]} />
            <span className={`${styles["dot"]} ${styles["active"]}`} />
          </div>
        </div>
      </div>
    </div>
  );
}


