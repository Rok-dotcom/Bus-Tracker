import "./BusInfo.css";

const BusInfo = () => {
  return (
    <>
      <div className="busInfo-container">
        <div className="bus-card">
          <h3>Bus Information</h3>

          <div className="busInfo-card">
            <span>Route</span>
            <p>Pune To Bangalore</p>
          </div>

          <div className="busInfo-card">
            <span>Bus No.</span>
            <p>MH-13 ND 8448</p>
          </div>

          <div className="busInfo-card">
            <span>Current Location</span>
            <p>Pune</p>
          </div>

          <div className="busInfo-card">
            <span>Message</span>
            <p>Seat Available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusInfo;
