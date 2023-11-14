import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import "./App.css";
import Benefits from "./components/Benefits";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <div className='darker-bg'>
        <Features />
        <Benefits />
      </div>
    </>
  );
}

export default App;
