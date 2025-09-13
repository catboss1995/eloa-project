import styles from "../../scss/SkinTest.module.scss";
import { useNavigate } from "react-router-dom";
const skinBg = "https://ik.imagekit.io/rgyxmrxzs/skin-bg.png?updatedAt=1757574221401";

export default function SkinLanding() {
  const nav = useNavigate();

  return (
    <div className={styles["skin-page"]}>
      {/* 左側/全版背景（你的 module 裡已有樣式） */}
      <div className={styles["bg-image"]} />

      {/* 右側玻璃卡片容器 */}
      <div className={styles["glass-box"]}>
        <h2 className={styles["title"]}>線上肌膚分析</h2>
        <p className={styles["description"]}>
          花幾分鐘時間，深入了解您的膚況，<br />
          立即獲得專屬保養建議。
        </p>
        <p className={styles["description"]}>輕鬆啟動肌膚分析，展開您的美肌旅程。</p>

        <button
          className={styles["start-button"]}
          onClick={() => nav("/skin/1")}
        >
          立即開始分析 →
        </button>

        {/* 進度點（第一點亮） */}
        <div className={styles["dots"]}>
          <span className={`${styles["dot"]} ${styles["active"]}`} />
          <span className={styles["dot"]} />
          <span className={styles["dot"]} />
          <span className={styles["dot"]} />
        </div>
      </div>
    </div>
  );
}
