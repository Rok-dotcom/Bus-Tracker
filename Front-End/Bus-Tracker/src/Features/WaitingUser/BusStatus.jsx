import "./BusStatus.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { deleteBusById } from "../../services/api";

import api from "../../services/api";

const BusStatus = () => {
  const location = useLocation();
  const [buses, setBuses] = useState(location.state || []);

  if (buses.length === 0) {
    return <h2>No bus posted on this route!</h2>;
  }

  // handle delete button
  const handleDeleteBtn = async (e, id) => {
    e.preventDefault();

    try {
      await deleteBusById(id);
      console.log(`${id} : id no. bus deleted`);
      setBuses((prev) => prev.filter((bus) => bus.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // undo
  return (
    <div className="busInfo-container">
      {buses.map((bus) => (
        <div className="bus-card" key={bus.id}>
          <h3>Bus Information</h3>

          {/* Route */}
          <div className="busInfo-card">
            <span>Route</span>
            <p>{bus.route}</p>
          </div>

          {/* Bus No */}
          <div className="busInfo-card">
            <span>Bus No.</span>
            <p>{bus.busNo}</p>
          </div>

          {/* Current Location */}
          <div className="busInfo-card">
            <span>Current Location</span>
            <p>{bus.currentlocation}</p>
          </div>

          {/* Message */}
          <div className="busInfo-card">
            <span>Message</span>
            <p>{bus.msg}</p>
          </div>

          {/* Posting Time */}
          <div className="busInfo-card">
            <span>Post time</span>
            <p>{bus.postTime}</p>
          </div>
          <button
            className="delete-btn"
            onClick={(e) => handleDeleteBtn(e, bus.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BusStatus;
