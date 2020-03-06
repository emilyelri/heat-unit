import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const toggleLogout = e => {
    e.preventDefault();
    console.log("Logging out.");
    localStorage.removeItem("token");
    props.setLoggedIn(false);
    console.log("setLoggedIn:", props.loggedIn);
    props.history.push("/login");
  };

  return (
    <div className="outer">
      <div className="header">
        <div className="hamburger" />
        <div className="main-title">
          <Link to='/play'>
          <h1 className="title-font">Heat Unit</h1>
          </Link>
        </div>
        <div className="buttons">
          {!props.loggedIn ? (
            <div className="logged-out-buttons">
            <div className="buttons">
              <Link to="/login">
                <div className="button">Log In</div>
              </Link>
              <Link to="/register">
                <div className="button">Register</div>
              </Link>
            </div>
            <div className="reminder">
                <p>If you want to save your score and chat with other players, please log in or create an account.</p>
            </div>
            </div>
          ) : (
            <div className="buttons">
              <div className="button logout" onClick={toggleLogout}>
                Log Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
