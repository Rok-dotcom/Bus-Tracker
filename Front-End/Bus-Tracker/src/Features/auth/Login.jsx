import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { loginUser } from "../../services/api";
import "./Login.css";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, []);

  const [user, setUser] = useState({
    userName: "",
    passWord: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(user);

      // Backend returns JWT as plain text
      localStorage.setItem("token", response.data);

      alert("Login Successful");

      navigate(-1);
    } catch (err) {
      console.log(err);

      setError("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>BusTracker Login</h2>

        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={user.userName}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="passWord"
          placeholder="Password"
          value={user.passWord}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
