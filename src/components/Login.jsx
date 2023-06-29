import React from "react";
import { Link } from "react-router-dom";

const style1 = {
  form: {
    margin: "10px auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    padding: "10px",
  },

  button: {
    margin: "10px",

  },
  wholediv: {
    margin: " 150px auto",
    padding: "10px",
    backgroundColor: "green",
    color: "wheat",
    borderRadius: "10px",
    width: "30%",
  }
};

function Login() {
  return (
    <>
    <div style={style1.wholediv}>
      <h2 style={{ textAlign: "center", marginTop: "30px" }}>Login</h2>
      <form style={style1.form}>
        <label style={style1.label} for="username">
          Username
        </label>
        <input type="text" id="username" name="username" required />

        <label style={style1.label} for="password">
          Password
        </label>
        <input type="password" id="password" name="password" required />

        <input style={style1.button} type="submit" value="Login" />
        <SignUp />
      </form>
      </div>
    </>
  );
}
const SignUp = () => {
  return (
    <>
      <Link to="/signup">
        <button style={style1.button}>SignUp</button>
      </Link>
    </>
  );
};

const forgot = () => {
  return alert('forgotPassword');
};

export default Login;
