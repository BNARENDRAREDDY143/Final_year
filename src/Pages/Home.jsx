import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import bgImage from "../assets/ai-interview-bg.png";


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-page">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
             MockMate AI
          </Link>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/features">Features</Link>
            <Link to="/login" className="btn-outline">
              Login
            </Link>

            <Link to="/signup" className="btn-primary">
              Create Free Account
            </Link>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url(${bgImage})`,
        }}
      >
        <div className="hero-content">

          <span className="badge">
            ✨ AI Powered Interview Assistant
          </span>

          <h1>Smart Interview</h1>

          <p>
            Practice real interview questions with AI. Get resume-based
            questions, instant feedback, communication analysis, confidence
            score, and personalized suggestions to crack your dream job.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="start-btn">
               Get Started
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Home;