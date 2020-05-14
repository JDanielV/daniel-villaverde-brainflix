import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import MainContentWrapper from "./components/MainContentWrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <MainVideo />
      <MainContentWrapper />
    </div>
  );
}

export default App;
