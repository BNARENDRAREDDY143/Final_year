import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>AI Mock Interview Dashboard</h1>

      <p>Welcome! Choose an interview module below.</p>

      <div className="feature-grid">
        <div className="feature-card">
          <h2>Resume Upload</h2>
          <p>Upload your resume.</p>
          <button className="feature-btn">Start</button>
        </div>

        <div className="feature-card">
          <h2>Technical Interview</h2>
          <p>Practice technical questions.</p>
          <button className="feature-btn">Start</button>
        </div>

        <div className="feature-card">
          <h2>HR Interview</h2>
          <p>Practice HR questions.</p>
          <button className="feature-btn">Start</button>
        </div>

        <div className="feature-card">
          <h2>Voice Interview</h2>
          <p>Practice with voice.</p>
          <button className="feature-btn">Start</button>
        </div>

        <div className="feature-card">
          <h2>Video Interview</h2>
          <p>Practice with video.</p>
          <button className="feature-btn">Start</button>
        </div>

        <div className="feature-card">
          <h2>Performance Report</h2>
          <p>View your performance.</p>
          <button className="feature-btn">View Report</button>
        </div>

        <div className="feature-card">
          <h2>Communication Skills</h2>
          <p>Strong Verbal Communication.</p>
          <button className="feature-btn">View Report</button>
        </div>
        
        <div className="feature-card">
          <h2>MR Interview</h2>
          <p>Professional Communication Skills.</p>
          <button className="feature-btn">View Report</button>
        </div>

        <div className="feature-card">
          <h2>Group Discussions</h2>
          <p>Team Collaboration Skills.</p>
          <button className="feature-btn">View Report</button>
        </div>

      </div>

      <br />

      <Link to="/" className="feature-btn">
        Logout
      </Link>
    </div>
  );
}

export default Dashboard;
