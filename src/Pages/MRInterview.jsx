import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/MRInterview.css";  // Import CSS

function MRInterview() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📊 MR Interview</h1>
        <p>Professional communication and management skills assessment.</p>
        <div className="question-section">
          <h3>Question 1:</h3>
          <p className="question">How do you handle difficult clients or stakeholders?</p>
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

export default MRInterview;