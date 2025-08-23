import styles from '../scss/SkinTest.module.scss';

const SkinTest = () => {
  return (
    <div className={styles["skin-page"]}>
      <div className={styles["bg-image"]}></div>

      <div className={styles["glass-box"]}>
        <h2 className={styles["title"]}>線上肌膚分析</h2>
        <p className={styles["description"]}>
          花幾分鐘時間，深入了解您的膚況，<br />
          立即獲得專屬保養建議。
        </p>
        <p className={styles["description"]}>輕鬆啟動肌膚分析，展開您的美肌旅程。</p>

        <button className={styles["start-button"]}>立即開始分析 →</button>

        <div className={styles["dots"]}>
          <span className={`${styles["dot"]} ${styles["active"]}`}></span>
          <span className={styles["dot"]}></span>
          <span className={styles["dot"]}></span>
          <span className={styles["dot"]}></span>
        </div>
      </div>
    </div>
  );
}

export default SkinTest;
