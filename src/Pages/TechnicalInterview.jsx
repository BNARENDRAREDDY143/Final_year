import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/TechnicalInterview.css";  // Import CSS

function TechnicalInterview() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>💻 Technical Interview</h1>
        <p>Practice technical interview questions with AI feedback.</p>
        <div className="question-section">
          <h3>Question 1:</h3>
          <p className="question">What is React and how does it work?</p>
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

export default TechnicalInterview;