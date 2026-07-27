import "./FeedbackSubmitted.css";
import { useNavigate } from "react-router-dom";

const FeedbackSubmitted = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="feedback-success">
        <div className="success-card">
          <div className="success-icon">✔</div>

          <h1>Thank You!</h1>

          <p>
            Your feedback has been submitted successfully.
            <br />
            We truly appreciate your valuable feedback and will use it to
            improve our application.
          </p>

          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    </>
  );
};

export default FeedbackSubmitted;
