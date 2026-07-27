import "./Waiting.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { getAllBuses, getBusByRoute } from "../../services/api";

function Waiting() {
  const [from, setFrom] = useState("");
  const [dest, setDest] = useState("");
  const [rotation, setRotation] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Find all
  const handleOnClickSearchAll = async (e) => {
    console.log("search all btn clicked");
    if (!token) {
      navigate("/login");
      return;
    }
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

  const handleSwap = () => {
    // write logic for changing value from to destination
    // from to dest
    setFrom(dest);
    setDest(from);

    // rotate btn only when button is got clicked
    setRotation((prev) => prev + 180);
  };

  // handle on change suggestions
  const handleOnChange1 = async (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setFrom(value);

    if (value.length >= 2) {
      const response = await api.get(`/bus/suggestions?keyword=${value}`);
      setSuggestions(response.data);
    } else {
      setSuggestions([]);
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
            value={from}
            onChange={handleOnChange1}
          />
          {/* suggestions */}
          {suggestions.length > 0 && (
            <ul className="suggestion-box">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setFrom(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          <button
            className="swap-btn"
            style={{ transform: `rotate(${rotation}deg)` }}
            onClick={handleSwap}
          >
            ⇅
          </button>
          <input
            type="text"
            placeholder="📍 To"
            className="location-input"
            value={dest}
            onChange={(e) => setDest(e.target.value)}
          />
          {suggestions.length > 0 && (
            <ul className="suggestion-box">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setDest(item);
                    setSuggestions([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          <button className="search-btn" onClick={handleSubmit}>
            🔍 Search Buses
          </button>
        </div>
      </div>
    </>
  );
}

export default Waiting;
