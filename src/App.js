import React from "react";
import HeroTop from "./components/HeroTop/HeroTop";
import NavBar from "./components/NavBar/NavBar";
import BookNow from "./components/BookNow/BookNow";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroTop />
      <BookNow />
      <AboutUs />
    </div>
  );
}

export default App;
