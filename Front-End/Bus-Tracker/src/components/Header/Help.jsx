import "./Help.css";

const Help = () => {
  return (
    <div className="help-container">
      <div className="help-card">
        <div className="help-icon">❓</div>

        <h2>How to Use This App</h2>

        <p>
          This application helps passengers share the live location of a bus
          without using GPS.
        </p>

        <ul className="help-list">
          <li>
            <strong>🚌 If you are travelling on a bus:</strong> Enter the bus
            details and update its current location.
          </li>

          <li>
            <strong>⏳ If you are waiting for a bus:</strong> Search using the
            route number to view the latest location shared by other passengers.
          </li>

          <li>
            <strong>🤝 Community Driven:</strong> Every update you share helps
            other passengers know where the bus is in real time.
          </li>
        </ul>

        <div className="help-note">
          Thank you for contributing and making travel easier for everyone! ❤️
        </div>
      </div>
    </div>
  );
};

export default Help;
