import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import CardList from "./components/cardList";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <CardList />
    </div>
  );
};

export default App;
