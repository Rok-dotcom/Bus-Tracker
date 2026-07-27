import "./BusInfo.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BusInfo = () => {
  const location = useLocation();
  const bus1 = location.state;
  // console.log(buses);

  if (bus1 == null) {
    console.log("obj is null");
    return <h1>bus obj is null</h1>;
  }

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/UpdateBusDetails", {
      state: bus1,
    });

    // pass bus obj to updateBusDetails for previous values
  };

  return (
    <>
      <div className="busInfo-container">
        {/* map function */}
        {/* {buses.map((bus1) => ( */}
        <div className="bus-card">
          <h3>Bus Information</h3>

          {/* Route */}
          <div className="busInfo-card">
            <span>Route</span>
            <p>{bus1.route}</p>
          </div>

          {/* Bus No */}
          <div className="busInfo-card">
            <span>Bus No.</span>
            <p>{bus1.busNo}</p>
          </div>

          {/* Current Location */}
          <div className="busInfo-card">
            <span>Current Location</span>
            <p>{bus1.currentlocation}</p>
          </div>

          {/* Message */}
          <div className="busInfo-card">
            <span>Message</span>
            <p>{bus1.msg}</p>
          </div>

          <button className="submit-btn" onClick={handleOnClick}>
            Edit
          </button>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default BusInfo;
