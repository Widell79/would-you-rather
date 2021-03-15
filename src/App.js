import React, { useEffect } from "react";
import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";

import { handleInitialData } from "./features/shared/shared";

import Home from "./components/Home";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </header>
    </div>
  );
}

export default App;
