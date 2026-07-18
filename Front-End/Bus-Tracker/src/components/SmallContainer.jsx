import styles from "./SmallContainer.module.css";

const SmallContainer = ({ title, children }) => {
  return (
    <>
      <div className={styles.smallContainer}>
        <div className={styles.leftDiv}>
          <h1>{title}</h1>
        </div>
        <div className={styles.rightDiv}>
          <h1>{children}</h1>
        </div>
      </div>
    </>
  );
};
export default SmallContainer;
