import React from "react";
import "../Styles/Features.css";

function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Interviewer",
      description:
        "Practice interviews with an AI interviewer that asks relevant Technical and HR questions."
    },
    {
      icon: "📄",
      title: "Resume-Based Questions",
      description:
        "Upload your resume and receive personalized interview questions based on your skills and experience."
    },
    {
      icon: "🎤",
      title: "Voice Interaction",
      description:
        "Answer questions naturally using voice to simulate a real interview experience."
    },
    {
      icon: "📊",
      title: "Instant Feedback",
      description:
        "Receive AI-generated feedback on your answers, communication, and confidence."
    },
    {
      icon: "⭐",
      title: "Performance Score",
      description:
        "Get an overall interview score with detailed strengths and improvement areas."
    },
    {
      icon: "💼",
      title: "Technical & HR Interviews",
      description:
        "Prepare for coding, technical, behavioral, and HR interview rounds in one platform."
    }
  ];

  return (
    <div className="features-page">

      <section className="features-hero">
        <h1>Powerful Features</h1>

        <p>
          Everything you need to prepare confidently for your next interview.
        </p>
      </section>

      <section className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="feature-footer">
        <h2>Ready to Practice?</h2>

        <p>
          Improve your interview skills with AI-powered mock interviews.
        </p>

        <a href="/signup" className="feature-btn">
          Start Now
        </a>
      </section>

    </div>
  );
}

export default Features;