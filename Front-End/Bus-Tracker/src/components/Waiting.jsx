import "./Waiting.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getAllBuses, getBusByRoute } from "../services/api";

function Waiting() {
  const [from, setFrom] = useState("");
  const [dest, setDest] = useState("");

  const navigate = useNavigate();

  // Find all
  const handleOnClickSearchAll = async (e) => {
    console.log("search all btn clicked");
    e.preventDefault();

    try {
      const response = await getAllBuses();
      navigate("/BusStatus", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // search by route
  const handleSubmit = async (e) => {
    console.log("button get clicked");
    e.preventDefault();
    const route = from + " " + dest;

    try {
      const response = await getBusByRoute(route);

      navigate("/BusStatus", {
        state: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="waiting-container">
        <div className="search-card">
          <button className="search-btn" onClick={handleOnClickSearchAll}>
            🔍 Show All Buses
          </button>
        </div>
      </div>

      <div className="waiting-container">
        <div className="search-card">
          <h2>Find Your Bus</h2>
          <p>Enter your boarding and destination locations.</p>

          <input
            type="text"
            placeholder="📍 From"
            className="location-input"
            onChange={(e) => setFrom(e.target.value)}
          />

          <button className="swap-btn">⇅</button>

          <input
            type="text"
            placeholder="📍 To"
            className="location-input"
            onChange={(e) => setDest(e.target.value)}
          />

          <button className="search-btn" onClick={handleSubmit}>
            🔍 Search Buses
          </button>
        </div>
      </div>
    </>
  );
}

export default Waiting;
