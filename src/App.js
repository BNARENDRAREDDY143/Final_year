import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Dashboard from "./Pages/Dashboard";
import ResumeUpload from "./Pages/ResumeUpload";
import TechnicalInterview from "./Pages/TechnicalInterview";
import HRInterview from "./Pages/HRInterview";
import VoiceInterview from "./Pages/VoiceInterview";
import VideoInterview from "./Pages/VideoInterview";
import PerformanceReport from "./Pages/PerformanceReport";
import CommunicationSkills from "./Pages/CommunicationSkills";
import MRInterview from "./Pages/MRInterview";
import GroupDiscussions from "./Pages/GroupDiscussions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Interview Module Routes */}
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route path="/technical-interview" element={<TechnicalInterview />} />
        <Route path="/hr-interview" element={<HRInterview />} />
        <Route path="/voice-interview" element={<VoiceInterview />} />
        <Route path="/video-interview" element={<VideoInterview />} />
        <Route path="/performance-report" element={<PerformanceReport />} />
        <Route path="/communication-skills" element={<CommunicationSkills />} />
        <Route path="/mr-interview" element={<MRInterview />} />
        <Route path="/group-discussions" element={<GroupDiscussions />} />
      </Routes>
    </div>
  );
}

export default App;