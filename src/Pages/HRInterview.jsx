import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/HRInterview.css";  // Import CSS

function HRInterview() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>👔 HR Interview</h1>
        <p>Practice HR interview questions and improve your soft skills.</p>
        <div className="question-section">
          <h3>Question 1:</h3>
          <p className="question">Tell me about yourself and your background.</p>
          <textarea placeholder="Type your answer here..." rows="6"></textarea>
          <button className="submit-btn">Submit Answer</button>
        </div>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default HRInterview;