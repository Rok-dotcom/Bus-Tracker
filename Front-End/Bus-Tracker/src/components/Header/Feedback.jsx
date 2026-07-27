import { addFeedback } from "../../services/api";
import "./Feedback.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const suggestion = "";
    const feed = {
      feedback,
      suggestion,
    };

    try {
      const response = await addFeedback(feed);
      console.log("added feedback");
      setFeedback("");
      // use navigate
      navigate("/feedbackSubmitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>User Feedback</h2>

        <textarea
          className="feedback-input"
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
