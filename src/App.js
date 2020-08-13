import React from "react";
import { NavBar } from "./pages/navbar.js";
import { Footer } from "./pages/footer.js";
import { MainArea } from "./pages/main.js";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar>main</NavBar>
      <MainArea> OK</MainArea>
      <Footer> Футур</Footer>
    </div>
  );
}

export default App;
