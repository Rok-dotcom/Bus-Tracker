import styles from "./Waiting.module.css";
import { Link } from "react-router-dom";
const Waiting = () => {
  return (
    /*
    write here logic of if route is available which is entered by the InBus person then show the InBus page otherwise not found
    e.g. 
    boolean search = searchedByTheWatining person;
    if(route == search){
        <Link to="./InBus"><Link/>
    }else{
        <h1> Buses are not available on this route<h1>
        }

*/
    <>
      <h1>Add content for the Waiting user</h1>
      <p>
        if Bus is available on this route which is entered by user then show
        InBus page otherwise Buses are not available
      </p>

      <input type="text" placeholder="search bus"></input>

      <Link to="/InBus">
        <button className={styles.btn}>Search</button>
      </Link>
    </>
  );
};

export default Waiting;
