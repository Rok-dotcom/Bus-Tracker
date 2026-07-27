import "./SuggestionSubmitted.css";
import { useNavigate } from "react-router-dom";

const SuggestionSubmitted = () => {
  const navigate = useNavigate();

  return (
    <div className="suggestion-success">
      <div className="success-card">
        <div className="success-icon">💡</div>

        <h1>Thank You!</h1>

        <p>
          Your suggestion has been submitted successfully.
          <br />
          Thank you for helping us improve the Bus Tracker application. We value
          every suggestion from our users.
        </p>

        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    </div>
  );
};

export default SuggestionSubmitted;
