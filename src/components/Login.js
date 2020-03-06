import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

const Login = props => {

  const { handleSubmit, errors, control } = useForm();

  const [somethingWentWrong, setSomethingWentWrong] = useState(false);

  const onSubmit = async data => {
    console.log(data);
    axios
      .post("https://heat-unit.herokuapp.com/login/", data)
      .then(res => {
        setSomethingWentWrong(false);
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", data.username);
        props.setLoggedIn(true);
        props.history.push("/play");
      })
      .catch(err => {
        console.log(err);
        setSomethingWentWrong(true);
      });
  };

  return (
    <>
      <div className="login">
        <h2>Welcome back!</h2>
        <form onSubmit={e => e.preventDefault()} className="loginForm">
          <Controller
            name="username"
            control={control}
            rules={{
              required: "Please enter your username."
            }}
            as={
              <TextField
                name="username"
                type="text"
                placeholder="enter username"
                variant="outlined"
              />
            }
          />
          {errors.username ? (
            <p className="error">{errors.username.message}</p>
          ) : (
            <noscript />
          )}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Please enter your password."
            }}
            as={
              <TextField
                name="password"
                type="password"
                placeholder="enter password"
                variant="outlined"
              />
            }
          />
          {errors.password ? (
            <p className="error">{errors.password.message}</p>
          ) : (
            <noscript />
          )}

          <input
            className="button"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            value="Log In"
          />
        </form>
        <Link to="/register">
          <span>Don't have an account?</span>
        </Link>
      </div>

      {somethingWentWrong ? (
        <div className="somethingWentWrong">
          <p>Your username and/or password is incorrect. Please try again.</p>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { Login })(Login);
