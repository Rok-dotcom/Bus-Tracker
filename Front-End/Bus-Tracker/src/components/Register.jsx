import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/api";
import "./Register.css";
import { useEffect } from "react";

const Register = () => {
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

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const response = await registerUser(user);

      setMessage(response.data);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.log(err);
      setError("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>

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

        {message && <p className="success">{message}</p>}

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
