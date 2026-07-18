import { Link } from "react-router-dom";

import styles from "./InputForm.module.css";

const InputForm = () => {
  return (
    <>
      <div className={styles.inputForm}>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Enter Route"></input>
        </div>

        <div className={styles.inputDiv}>
          <input type="text" placeholder="Enter Bus No."></input>
        </div>

        <div className={styles.inputDiv}>
          <input type="text" placeholder="Enter current location"></input>
        </div>

        <div className={styles.inputDiv}>
          <input type="text" placeholder="Other msg"></input>
        </div>

        <Link to="/InBus">
          <button className={styles.btn}>submit</button>
        </Link>
      </div>
    </>
  );
};

export default InputForm;
