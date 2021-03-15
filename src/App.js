import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SignIn from "./components/SignIn";

import { handleInitialData } from "./features/shared/shared";
import { selectAuthedUser } from "./features/users/authedUserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });

  const authedUser = useSelector(selectAuthedUser);
  let loading = authedUser === null;

  return (
    <Router>
      <Fragment>
        <div className="App">
          <Nav />
          {loading === true ? (
            <SignIn />
          ) : (
            <Route path="/" exact component={Home} />
          )}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
