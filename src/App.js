import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import "./App.css";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className='darker-bg'>
        <Features />
        <Benefits />
        <Testimonials />
        <div className='footer-bg'>
          <GetStarted />
        </div>
      </div>
    </>
  );
}

export default App;
