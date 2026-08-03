import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PerformanceReport.css";  // Import CSS

function PerformanceReport() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📊 Performance Report</h1>
        <p>Your interview performance analytics and insights.</p>
        
        <div className="report-summary">
          <div className="overall-score">
            <h2>Overall Score</h2>
            <span className="score-number">85%</span>
          </div>
          
          <div className="score-details">
            <div className="score-item">
              <span className="label">Technical Skills</span>
              <span className="value high">90%</span>
            </div>
            <div className="score-item">
              <span className="label">Communication</span>
              <span className="value medium">80%</span>
            </div>
            <div className="score-item">
              <span className="label">Problem Solving</span>
              <span className="value high">85%</span>
            </div>
            <div className="score-item">
              <span className="label">Confidence</span>
              <span className="value medium">75%</span>
            </div>
          </div>
        </div>
        
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default PerformanceReport;