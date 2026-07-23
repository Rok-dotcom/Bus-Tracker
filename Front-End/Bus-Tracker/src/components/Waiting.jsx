import "./Waiting.css";
import { Link } from "react-router-dom";

function Waiting() {
  return (
    <>
      <div className="waiting-container">
        <div className="search-card">
          <Link to="/BusDetails">
            <button className="search-btn">🔍 Show All Buses</button>
          </Link>
        </div>
      </div>

      <div className="waiting-container">
        <div className="search-card">
          <h2>Find Your Bus</h2>
          <p>Enter your boarding and destination locations.</p>

          <input type="text" placeholder="📍 From" className="location-input" />

          <button className="swap-btn">⇅</button>

          <input type="text" placeholder="📍 To" className="location-input" />

          <button className="search-btn">🔍 Search Buses</button>
        </div>
      </div>
    </>
  );
}

export default Waiting;
