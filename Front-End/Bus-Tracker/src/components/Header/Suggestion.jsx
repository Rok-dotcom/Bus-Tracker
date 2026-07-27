import { useState } from "react";
import "./Suggestion.css";
import { addSuggestion } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Suggestion = () => {
  const [suggestion, setSuggestion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = "";
    const sugg = {
      feedback,
      suggestion,
    };

    try {
      await addSuggestion(sugg);
      console.log("suggestion added");
      setSuggestion("");
      navigate("/suggestionSubmitted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="suggestion-container">
        <form className="suggestion-form" onSubmit={handleSubmit}>
          <h2>User suggestions</h2>
          <textarea
            className="suggestion-input"
            value={suggestion}
            placeholder="Enter your suggestion here..."
            onChange={(e) => setSuggestion(e.target.value)}
            required
          ></textarea>

          <button type="Submit" className="submit-btn">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Suggestion;
