import { Link } from "react-router-dom";
import styles from "./AppBody.module.css";

const AppBody = () => {
  return (
    <>
      <h1>How would you like to use BusTracker today?</h1>
      <section className={styles.sectionFirst}>
        <section className={styles.leftSection}>
          <Link to="/InputForm" className={styles.windowLink}>
            <div className={styles.window}>📤 Share Bus Update</div>
          </Link>

          {/* <div className={styles.tyre}></div> */}
        </section>

        <section className={styles.rightSection}>
          <Link to="/Waiting" className={styles.windowLink}>
            <div className={styles.window}>🔍 Find My Bus</div>
          </Link>

          {/* <div className={styles.tyre}></div> */}
        </section>
      </section>
    </>
  );
};

export default AppBody;
