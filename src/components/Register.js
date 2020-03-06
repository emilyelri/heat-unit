import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";

const Register = props => {
  const { handleSubmit, errors, control, getValues } = useForm();

  const [somethingWentWrong, setSomethingWentWrong] = useState(false);

  const onSubmit = async data => {
    console.log(data);
    axios
      .post("https://heat-unit.herokuapp.com/api/registration/", data)
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
        <h2>Create an Account</h2>
        <form onSubmit={e => e.preventDefault()} className="loginForm">
          <Controller
            // type="text"
            name="username"
            control={control}
            rules={{
              required: "Username is required."
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
            name="password1"
            control={control}
            rules={{
              required: "Password is required.",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters."
              }
            }}
            as={
              <TextField
                type="password"
                name="password1"
                placeholder="enter password"
                variant="outlined"
              />
            }
          />
          {errors.password1 ? (
            <p className="error">{errors.password1.message}</p>
          ) : (
            <noscript />
          )}

          <Controller
            name="password2"
            control={control}
            rules={{
              required: "You must confirm your password.",
              validate: value => {
                if (value === getValues()["password1"]) {
                  return true;
                } else {
                  return "Passwords must match.";
                }
              }
            }}
            as={
              <TextField
                type="password"
                name="password2"
                placeholder="enter password again"
                variant="outlined"
              />
            }
          />
          {errors.password2 ? (
            <p className="error">{errors.password2.message}</p>
          ) : (
            <noscript />
          )}

          <input
            className="button"
            type="submit"
            value="Sign Up"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
        <Link to="/login">
          <span>Already have an account?</span>
        </Link>
      </div>
      {somethingWentWrong ? (
        <div className="somethingWentWrong">
          <p>
            Something went wrong! Your username may already be taken, or your
            password is not strong enough. Please try again.
          </p>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps, { Register })(Register);
