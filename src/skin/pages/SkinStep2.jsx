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
  { id: "clean",   label: "清潔階段" },
  { id: "import",  label: "導入階段" },
  { id: "repair",  label: "修護階段" },
  { id: "firm",    label: "緊實階段" },
];

export default function SkinStep2() {
  const nav = useNavigate();
  const { form, setStepData } = useSkinForm();

  // 帶入已選（可沒有時為空陣列）
  const [selected, setSelected] = useState(new Set(form?.routine || []));
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
    setStepData("routine", values); // 儲存本步驟選擇
    nav("/skin/3");                
  };

  return (
    useDocumentTitle("線上肌膚分析2/4"),
    <div className={styles["skin-page"]}>
      {/* 左側或全版背景（與 Landing 同一套） */}
      <div className={styles["bg-image"]} />

      {/* 玻璃擬態卡片：沿用 .glass-box，再加 .glass-box--step 調整位置/尺寸 */}
      <div className={`${styles["glass-box"]} ${styles["glass-box--step"]}`}>
        <h2 className="skin-card__title">
          您的保養Routine到哪？<span className="hint">（可複選）</span>
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

        <div className="skin-footer">
          {/* 置中的下一步按鈕 */}
          <button
            className="btn-next"
            disabled={!canNext}
            onClick={goNext}
          >
            下一步 <GoChevronRight />
          </button>

          {/* 置中的 4 顆圓點（第三顆亮） */}
          <div className={styles["dots"]}>
            <span className={styles["dot"]} />
            <span className={styles["dot"]} />
            <span className={`${styles["dot"]} ${styles["active"]}`} />
            <span className={styles["dot"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
