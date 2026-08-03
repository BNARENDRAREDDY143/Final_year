import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/GroupDiscussions.css";  // Import CSS

function GroupDiscussions() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>👥 Group Discussions</h1>
        <p>Team collaboration and leadership skills assessment.</p>
        
        <div className="discussion-topic">
          <h3>Topic: Climate Change and Its Impact</h3>
          <p>Discussion started: 10 minutes ago</p>
        </div>
        
        <div className="discussion-metrics">
          <div className="metric-card">
            <span className="metric-value">85%</span>
            <span className="metric-label">Your Contribution</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">80%</span>
            <span className="metric-label">Team Collaboration</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">75%</span>
            <span className="metric-label">Leadership Skills</span>
          </div>
        </div>
        
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default GroupDiscussions;