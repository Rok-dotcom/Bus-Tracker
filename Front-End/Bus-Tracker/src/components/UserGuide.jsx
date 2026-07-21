import { useState } from "react";
import styles from "./UserGuide.module.css";

const UserGuide = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.guide}>
      <h2>🚌 About BusTracker</h2>

      <p>
        BusTracker is a community-powered website created to help MSRTC
        passengers know the live status of their buses. Many MSRTC buses have
        GPS devices installed in the conductor's ticket machine, but passengers
        often cannot access that information. This website aims to solve that
        problem by allowing passengers to share live updates with each other.
      </p>

      {expanded && (
        <>
          <p>There are two types of users on this platform:</p>

          <ul>
            <li>
              <strong>🚍 Passenger Inside the Bus:</strong> Share the bus
              number, route, current location, current time, seat availability,
              and any important information like delays or crowded conditions.
            </li>

            <li>
              <strong>⏳ Passenger Waiting for the Bus:</strong> Search using
              the bus number or route to view the latest updates shared by
              fellow passengers.
            </li>
          </ul>

          <p>
            This website does <strong>not</strong> use GPS tracking. Instead, it
            works through community participation. Every update shared by a
            passenger helps others know where the bus is, making travel easier,
            especially in areas where official live tracking is unavailable.
          </p>

          <p>
            <strong>
              Together, we can make MSRTC bus travel more convenient for
              everyone.
            </strong>
          </p>
        </>
      )}

      <button className={styles.btn} onClick={() => setExpanded(!expanded)}>
        {expanded ? "Read Less ▲" : "Read More ▼"}
      </button>
    </div>
  );
};

export default UserGuide;
