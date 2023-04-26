import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ContactForm from "./pages/Contact";
import Resume from "./pages/Resume";
import logo from "./assets/kmlogo.svg";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href =
        "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/profile" element={<Profile userName="k8molony" />} />
          <Route path="/projects" element={<Projects userName="k8molony" />} />
          <Route
            path="/projects/:name"
            element={<ProjectDetail onBackClick={<Projects />} />}
          />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
