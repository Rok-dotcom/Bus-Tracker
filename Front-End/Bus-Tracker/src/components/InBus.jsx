import "./InBus.css";
import { useState } from "react";
import axios from "axios";

function InBus() {
  // useState
  const [From, setFrom] = useState("");
  const [Dest, setDest] = useState("");
  const [busNo, setbusNo] = useState("");
  const [currentlocation, setcurrentLocation] = useState("");
  const [msg, setMsg] = useState("");

  // handleSubmit2
  /*
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const route = From + " " + Dest;

    console.log(route);
    console.log(busNo);
    console.log(currentLocation);
    console.log(msg);

    setFrom("");
    setDest("");
    setbusNo("");
    setcurrentLocation("");
    setMsg("");
  };
  */

  // anxios function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const route = From + " " + Dest;

    const bus = {
      route,
      busNo,
      currentlocation,
      msg,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/bus/addBus",
        bus,
      );
      console.log(response.data);
      setFrom("");
      setDest("");
      setbusNo("");
      setcurrentLocation("");
      setMsg("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="inbus-container">
      <div className="form-card">
        <h2>Share Your Bus Details</h2>
        <p>Help other passengers by sharing your current bus information.</p>

        {/* Route */}
        <div className="route-container">
          <input
            type="text"
            placeholder="📍 From"
            className="location-input"
            value={From}
            onChange={(e) => setFrom(e.target.value)}
          />

          <button className="swap-btn" type="button">
            ⇅
          </button>

          <input
            type="text"
            placeholder="🏁 To"
            className="location-input"
            value={Dest}
            onChange={(e) => setDest(e.target.value)}
          />
        </div>

        {/* Bus Number */}
        <input
          type="text"
          placeholder="🚌 Bus Number"
          className="form-input"
          value={busNo}
          onChange={(e) => setbusNo(e.target.value)}
        />

        {/* Current Location */}
        <input
          type="text"
          placeholder="📌 Current Location"
          className="form-input"
          value={currentlocation}
          onChange={(e) => setcurrentLocation(e.target.value)}
        />

        {/* Message */}
        <textarea
          placeholder="💬 Additional Message (Optional)"
          className="message-box"
          rows="4"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>

        <button className="submit-btn" onClick={handleSubmit}>
          🚍 Share Bus Status
        </button>
        <h3>OR</h3>
        <button className="submit-btn">🚍 Update Bus Status</button>
        <h3>OR</h3>
        <button className="submit-btn delete-btn">🚍 Delete Bus Status</button>
      </div>
    </div>
  );
}

export default InBus;
