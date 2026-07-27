import "./InBus.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addBus } from "../../services/api";

function InBus() {
  // useState
  const [From, setFrom] = useState("");
  const [Dest, setDest] = useState("");
  const [busNo, setbusNo] = useState("");
  const [currentlocation, setcurrentLocation] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate(); // navigate obj

  // anxios function
  const handleSubmit = async (e) => {
    if (
      From.trim() === "" ||
      Dest.trim() === "" ||
      busNo.trim() === "" ||
      currentlocation.trim() === "" ||
      msg.trim() === ""
    ) {
      alert("Please the value..");
      return;
    }

    e.preventDefault(); // it prevents the default reload page function

    const route = From + " " + Dest; // merging from and dest

    // creating object
    const bus = {
      route,
      busNo,
      currentlocation,
      msg,
    };

    // It may be return any error e.g. 401, 500, 400
    try {
      const response = await addBus(bus);

      console.log(response.data); // printing data on console

      navigate("/BusInfo", {
        state: response.data,
      });
      // I want to print on page not on console. let's create one function which shows the response on page
      // const bus1 = response.data;
      // console.log("bus1 value is below");
      // console.log(bus1);
      // setShow(true);

      console.log("bus1 value is after sending");
      // setting data empty
      setFrom("");
      setDest("");
      setbusNo("");
      setcurrentLocation("");
      setMsg("");
    } catch (error) {
      // setShow(false);
      console.log(error);
    }
  };

  return (
    <>
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
        </div>
      </div>
    </>
  );
}

export default InBus;
