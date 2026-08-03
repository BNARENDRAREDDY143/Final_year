import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/ResumeUpload.css";  // Import CSS

function ResumeUpload() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📄 Resume Upload</h1>
        <p>Upload your resume for AI analysis and optimization.</p>
        <div className="upload-area">
          <input type="file" accept=".pdf,.doc,.docx" />
          <p className="file-hint">Supported formats: PDF, DOC, DOCX (Max size: 5MB)</p>
        </div>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ResumeUpload;