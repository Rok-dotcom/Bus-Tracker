import styles from "./AppBody.module.css";

const AppBody = () => {
  return (
    <>
      <section className={styles.sectionFirst}>
        <section className={styles.leftSection}>
          <div className={styles.box}>box</div>
        </section>

        <section className={styles.rightSection}>
          <h2>This is right section</h2>
        </section>
      </section>
    </>
  );
};

export default AppBody;
