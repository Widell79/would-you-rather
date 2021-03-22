import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

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

  let isLoggedIn = authedUser !== null;

  return (
    <Router>
      <Fragment>
        <Nav />
        <div className="App">
          {!isLoggedIn ? (
            <SignIn />
          ) : (
            <Fragment>
              <Switch>
                <Route path="/add">
                  <NewQuestion />
                </Route>
                <Route path="/leaderboard">
                  <Leaderboard />
                </Route>
                <Route path="/questions/:id">
                  <QuestionsPage />
                </Route>
                <Route path="/404">
                  <ErrorPage />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
              </Switch>
            </Fragment>
          )}
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
