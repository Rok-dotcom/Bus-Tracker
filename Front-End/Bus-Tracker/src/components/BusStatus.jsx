import "./BusStatus.css";
import { useLocation } from "react-router-dom";

const BusStatus = () => {
  const location = useLocation();
  const buses = location.state || [];

  if (buses.length === 0) {
    return <h2>No bus data found.</h2>;
  }
  // undo
  return (
    <div className="busInfo-container">
      {buses.map((bus) => (
        <div className="bus-card">
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
        </div>
      ))}
    </div>
  );
};

export default BusStatus;
