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
        <Card className="Content">
          <Card.Body>
            <h4 className="PageTitle">Your contacts</h4>
            <DashboardPage />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
