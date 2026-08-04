import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/TechnicalInterview.css";

function TechnicalInterview() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await api.getQuestions("technical");
      if (data.success && data.questions.length > 0) {
        setQuestions(data.questions);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load interview questions.");
    }
  };

  const handleSubmit = async () => {
    if (!answer.trim()) {
      setError("Please type your answer before submitting.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const currentQ = questions[currentIndex]?.question || "What is React and how does it work?";
      const data = await api.submitAnswer("technical", currentQ, answer);
      if (data.success) {
        setFeedback(data.result);
      } else {
        setError(data.message || "Error evaluating answer.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to backend server. Make sure you are logged in.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setAnswer("");
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const currentQuestion = questions[currentIndex] || { id: 1, question: "What is React and how does it work?" };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>💻 Technical Interview Module</h1>
        <p>Practice technical interview questions with live AI evaluation.</p>

        {error && <div className="alert error" style={{ marginBottom: "15px" }}>{error}</div>}

        <div className="question-section">
          <h3>Question {currentIndex + 1} of {questions.length || 1}:</h3>
          <p className="question">{currentQuestion.question}</p>

          <textarea 
            placeholder="Type your answer here..." 
            rows="6"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={submitting || feedback !== null}
          ></textarea>

          {!feedback ? (
            <button 
              className="submit-btn" 
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Evaluating..." : "Submit Answer"}
            </button>
          ) : (
            <div style={{ marginTop: "20px", padding: "15px", borderRadius: "8px", background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
              <h4 style={{ margin: "0 0 10px 0", color: "#1E40AF" }}>🤖 AI Evaluation & Feedback</h4>
              <p><strong>Score:</strong> <span style={{ color: feedback.score >= 75 ? "#16A34A" : "#D97706", fontWeight: "bold" }}>{feedback.score}/100</span></p>
              <p><strong>Feedback:</strong> {feedback.feedback}</p>
              <button className="submit-btn" onClick={handleNext} style={{ marginTop: "10px" }}>
                Next Question →
              </button>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/dashboard")} className="back-btn" style={{ marginTop: "20px" }}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default TechnicalInterview;