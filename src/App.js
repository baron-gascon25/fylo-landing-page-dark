import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import "./App.css";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className='darker-bg'>
        <Features />
        <Benefits />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
