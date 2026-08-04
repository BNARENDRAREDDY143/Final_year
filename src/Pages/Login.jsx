import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "../Styles/Login.css";
import bgImage from "../assets/login-bg.jpg";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Please enter Username and Password.");
      setType("error");
      return;
    }

    try {
      const data = await api.login(username, password);
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setMessage("✅ Login Successful!");
        setType("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMessage(`❌ ${data.message}`);
        setType("error");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Unable to connect to backend server.");
      setType("error");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bgImage})`,
      }}
    >
      {message && <div className={`alert ${type}`}>{message}</div>}

      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="buttons">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>

          <div className="register-section">
            <p>
              Don't have an account?
              <Link to="/signup" className="register-link">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
