import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/CommunicationSkills.css";  // Import CSS

function CommunicationSkills() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>💬 Communication Skills</h1>
        <p>Evaluate your verbal and non-verbal communication skills.</p>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-name">
              <span>Clarity</span>
              <span className="skill-percentage">85%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill excellent" style={{ width: '85%' }}></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="skill-name">
              <span>Confidence</span>
              <span className="skill-percentage">75%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill good" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="skill-name">
              <span>Vocabulary</span>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill good" style={{ width: '80%' }}></div>
            </div>
          </div>
          
          <div className="skill-card">
            <div className="skill-name">
              <span>Listening Skills</span>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill excellent" style={{ width: '90%' }}></div>
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

export default CommunicationSkills;