import React from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

import "./App.css";

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
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
