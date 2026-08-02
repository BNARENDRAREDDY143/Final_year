import React from "react";
import "../Styles/About.css";
import aboutBg from "../assets/about-bg.png";

function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-container">
          <h1>About MockMate AI</h1>

          <p>
            MockMate AI is an intelligent interview preparation platform that
            helps students and job seekers practice Technical and HR interviews
            using Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-card">
            <h2>🎯 Our Mission</h2>

            <p>
              We aim to make interview preparation simple, personalized, and
              accessible for everyone. Our AI interviewer simulates real
              interview experiences so users can improve confidence,
              communication, and technical skills.
            </p>
          </div>

          <div className="about-card">
            <h2>🤖 AI Powered Interviews</h2>

            <p>
              The application generates interview questions based on your
              resume, role, and experience. AI evaluates your answers and
              provides instant feedback to help you improve.
            </p>
          </div>

          <div className="about-card">
            <h2>🚀 Key Features</h2>

            <ul>
              <li>Resume-Based Questions</li>
              <li>Technical & HR Interviews</li>
              <li>AI Answer Evaluation</li>
              <li>Instant Feedback</li>
              <li>Performance Reports</li>
              <li>Confidence Building</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="why-section">
        <h2>Why Choose MockMate AI?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>🧠 Smart AI</h3>
            <p>
              AI asks personalized interview questions based on your profile.
            </p>
          </div>

          <div className="why-card">
            <h3>📊 Instant Feedback</h3>
            <p>
              Get detailed evaluation on communication, confidence, correctness,
              and overall performance.
            </p>
          </div>

          <div className="why-card">
            <h3>💼 Industry Ready</h3>
            <p>
              Practice interviews similar to real company recruitment processes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="cta-section">
        <h2>Ready to Ace Your Interview?</h2>

        <p>
          Start practicing with AI today and boost your confidence before your
          next interview.
        </p>

        <a href="/signup" className="cta-btn">
          Start Free
        </a>
      </section>
    </div>
  );
}

export default About;
