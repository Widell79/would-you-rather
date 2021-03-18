import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import QuestionsPage from "./components/QuestionsPage";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import ErrorPage from "./components/ErrorPage";

import { handleInitialData } from "./features/shared/shared";
import { selectAuthedUser } from "./features/users/authedUserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });

  const authedUser = useSelector(selectAuthedUser);
  //let loading = authedUser === null;
  const isLoggedIn = authedUser !== null;

  //Todo: Check logout when url is tampered!

  return (
    <Router>
      <Fragment>
        <div className="App">
          <Nav />
          {!isLoggedIn ? (
            <Route path="/" component={SignIn} />
          ) : (
            <Fragment>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questions/:id" component={QuestionsPage} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/404" component={ErrorPage} />
              </Switch>
            </Fragment>
          )}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
