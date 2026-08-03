import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/VoiceInterview.css";  // Import CSS

function VoiceInterview() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>🎤 Voice Interview</h1>
        <p>Practice interview questions with voice recognition technology.</p>
        <div className="voice-section">
          <span className="mic-icon">🎙️</span>
          <p className="recording-status">Click to start recording your answer</p>
          <button className="record-btn">🔴 Start Recording</button>
        </div>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default VoiceInterview;