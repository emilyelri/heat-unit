import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Console from "./components/Console";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div className="App">
      <Route exact path="/" render={props => <Redirect to="/play" />} />

      <Route
        path="/"
        render={props => (
          <Header
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <Route
        path="/login"
        render={props => (
          <Login
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <Route
        path="/register"
        render={props => (
          <Register
            history={props.history}
            setLoggedIn={setLoggedIn}
            loggedIn={loggedIn}
          />
        )}
      />
      <Route path="/play" render={props => <Console loggedIn={loggedIn} />} />
    </div>
  );
}

export default App;
