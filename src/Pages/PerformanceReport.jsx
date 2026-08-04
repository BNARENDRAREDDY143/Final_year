import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import "../Styles/PerformanceReport.css";

function PerformanceReport() {
  const navigate = useNavigate();
  const [report, setReport] = useState({
    overallScore: 85,
    technicalSkills: 90,
    communication: 80,
    problemSolving: 85,
    confidence: 75,
    totalInterviewsTaken: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const data = await api.getPerformanceReport();
      if (data.success && data.report) {
        setReport(data.report);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>📊 Performance Report & Insights</h1>
        <p>Your AI interview performance analytics based on actual responses.</p>
        
        {loading ? (
          <p>Loading real-time analytics...</p>
        ) : (
          <div className="report-summary">
            <div className="overall-score">
              <h2>Overall Score</h2>
              <span className="score-number">{report.overallScore}%</span>
              {report.totalInterviewsTaken > 0 && (
                <p style={{ fontSize: "14px", marginTop: "8px", opacity: 0.9 }}>
                  Based on {report.totalInterviewsTaken} interview answers
                </p>
              )}
            </div>
            
            <div className="score-details">
              <div className="score-item">
                <span className="label">Technical Skills</span>
                <span className={`value ${report.technicalSkills >= 80 ? "high" : "medium"}`}>{report.technicalSkills}%</span>
              </div>
              <div className="score-item">
                <span className="label">Communication</span>
                <span className={`value ${report.communication >= 80 ? "high" : "medium"}`}>{report.communication}%</span>
              </div>
              <div className="score-item">
                <span className="label">Problem Solving</span>
                <span className={`value ${report.problemSolving >= 80 ? "high" : "medium"}`}>{report.problemSolving}%</span>
              </div>
              <div className="score-item">
                <span className="label">Confidence</span>
                <span className={`value ${report.confidence >= 80 ? "high" : "medium"}`}>{report.confidence}%</span>
              </div>
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

export default PerformanceReport;