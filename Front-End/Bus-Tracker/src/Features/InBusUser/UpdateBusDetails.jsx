import "./UpdateBusDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebugValue, useState } from "react";
import { Navigate } from "react-router-dom";
import { editBus } from "../../services/api";

// here edit the css of input box

const UpdateBusDetails = () => {
  const location = useLocation();
  const bus1 = location.state;

  if (bus1 == null) {
    return (
      <>
        <h1>Bus obj is null in UpdateBusDetails</h1>
      </>
    );
  }
  // useState
  const [route, setInRoute] = useState(bus1.route);
  const [busNo, setInBusNo] = useState(bus1.busNo);
  const [currentlocation, setInCurrentLocation] = useState(
    bus1.currentlocation,
  );
  const [msg, setInMsg] = useState(bus1.msg);
  //   const [updatedBus, setUpdatedBus] = useState(null);

  const id = bus1.id;
  const navigate = useNavigate();

  // update button
  const handleOnClick = async (e) => {
    e.preventDefault();

    const updatedBus = {
      route,
      busNo,
      currentlocation,
      msg,
    };
    console.log("values before sending to database");
    console.log(route);
    console.log(busNo);
    console.log(currentlocation);
    console.log(msg);

    try {
      const response = await editBus(updatedBus, id);
      console.log(response.data);
      console.log("updated successfully");
      //   setUpdatedBus(response.data);
      //   setInRoute(response.data.route);
      //   setInBusNo(response.data.busNo);
      //   setInCurrentLocation(response.data.currentlocation);
      //   setInMsg(response.data.msg);
      navigate("/BusInfo", {
        state: response.data,
      });
      //   alert("Bus details updated successfully");
    } catch (error) {
      console.log(error);
    }

    console.log("update button get clicked");
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
            <input
              className="busInfo-card"
              placeholder="enter route"
              value={route}
              onChange={(e) => setInRoute(e.target.value)}
            ></input>
          </div>

          {/* Bus No */}
          <div className="busInfo-card">
            <span>Bus No.</span>
            <input
              className="busInfo-card"
              placeholder="enter BusNo"
              value={busNo}
              onChange={(e) => setInBusNo(e.target.value)}
            ></input>
          </div>

          {/* Current Location */}
          <div className="busInfo-card">
            <span>Current Location</span>
            <input
              className="busInfo-card"
              placeholder="enter current location"
              value={currentlocation}
              onChange={(e) => setInCurrentLocation(e.target.value)}
            ></input>
          </div>

          {/* Message */}
          <div className="busInfo-card">
            <span>Message</span>
            <input
              className="busInfo-card"
              placeholder="enter msg"
              value={msg}
              onChange={(e) => setInMsg(e.target.value)}
            ></input>
          </div>

          <button className="submit-btn" onClick={handleOnClick}>
            update
          </button>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default UpdateBusDetails;
