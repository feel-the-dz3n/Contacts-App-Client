import React from "react";
import { Card } from "react-bootstrap";
import "./App.css";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content-Container">
        <div className="Content">
          <h4 className="PageTitle">Your contacts</h4>
          <DashboardPage />
        </div>
      </div>
    </div>
  );
}

export default App;
