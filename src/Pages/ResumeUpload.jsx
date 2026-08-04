import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/ResumeUpload.css";

function ResumeUpload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      setType("error");
      return;
    }

    setUploading(true);
    setMessage("Uploading and analyzing resume...");
    setType("info");

    try {
      const data = await api.uploadResume(file);
      if (data.success) {
        setMessage("✅ Resume Analyzed Successfully!");
        setType("success");
        setResult(data.resume);
      } else {
        setMessage(`❌ ${data.message}`);
        setType("error");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to upload resume. Make sure you are logged in.");
      setType("error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📄 Resume Upload & AI Analysis</h1>
        <p>Upload your resume for instant AI analysis and skill extraction.</p>

        {message && <div className={`alert ${type}`} style={{ marginBottom: "15px" }}>{message}</div>}

        <div className="upload-area">
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          <p className="file-hint">Supported formats: PDF, DOC, DOCX (Max size: 5MB)</p>
          {file && <p style={{ color: "#4F46E5", fontWeight: "bold" }}>Selected File: {file.name}</p>}
        </div>

        <button 
          onClick={handleUpload} 
          disabled={uploading || !file} 
          className="submit-btn"
          style={{ width: "100%", margin: "15px 0", padding: "12px", background: uploading ? "#9CA3AF" : "#4F46E5", color: "#fff", border: "none", borderRadius: "8px", cursor: uploading ? "not-allowed" : "pointer" }}
        >
          {uploading ? "Analyzing with AI..." : "Upload & Analyze Resume"}
        </button>

        {result && (
          <div style={{ background: "#F3F4F6", padding: "20px", borderRadius: "10px", marginTop: "20px", textAlign: "left" }}>
            <h3 style={{ color: "#1F2937", marginTop: 0 }}>📊 AI Resume Score: <span style={{ color: "#10B981" }}>{result.score}/100</span></h3>
            <p><strong>Original File:</strong> {result.originalName}</p>
            <p><strong>Extracted Skills:</strong></p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              {result.skills.map((skill, index) => (
                <span key={index} style={{ background: "#EEF2FF", color: "#4F46E5", padding: "4px 10px", borderRadius: "15px", fontSize: "14px", fontWeight: "500" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        <br />
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default ResumeUpload;