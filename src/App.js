import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import Nav from "./components/Nav";

import { handleInitialData } from "./features/shared/shared";
import { selectAuthedUser } from "./features/users/authedUserSlice";

import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });

  const authedUser = useSelector(selectAuthedUser);
  let loading = authedUser === null;

  return (
    <div className="App">
      <Router>
        <Nav />
        {loading === true ? null : (
          <div>
            <Route path="/" exact component={Home} />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
