import "./NewHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

function NewHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };
  const token = localStorage.getItem("token");

  return (
    <header className="header">
      <div className="logo">🚍 BusTracker</div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="userHelp">Help</a>
          </li>
          <li>
            <a href="userFeedback">Feedback</a>
          </li>
          <li>
            <a href="userSuggestion">Suggestion</a>
          </li>
          {token ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="logout-btn">Login/SignIn</button>
              </Link>
              <button className="logout-btn" onClick={handleRegister}>
                Register
              </button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NewHeader;
