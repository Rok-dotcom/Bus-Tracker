import styles from "./AppBody.module.css";

const AppBody = () => {
  return (
    <>
      <h1>What is your current position ?</h1>
      <section className={styles.sectionFirst}>
        <section className={styles.leftSection}>
          <div className={styles.window}>In Bus</div>
          {/* <div className={styles.tyre}></div> */}
        </section>

        <section className={styles.rightSection}>
          <div className={styles.window}>waiting</div>
          {/* <div className={styles.tyre}></div> */}
        </section>
      </section>
    </>
  );
};

export default AppBody;
