import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/VideoInterview.css";  // Import CSS

function VideoInterview() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📹 Video Interview</h1>
        <p>Practice interview with video recording and analysis.</p>
        <div className="video-section">
          <div className="video-placeholder">
            <span>🎥</span>
            <p>Camera Preview</p>
          </div>
          <button className="record-btn">▶ Start Video Recording</button>
        </div>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default VideoInterview;