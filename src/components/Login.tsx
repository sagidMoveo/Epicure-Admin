import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { loginActions } from "../redux/slice/login-slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { apiClient } from "../api";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state) => state.login.isLogin);
  const history = useHistory();

  useEffect(() => {
    if (isLogin) history.push("/home");
  }, [isLogin]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await apiClient.signIn(
      e.target.email.value,
      e.target.pwd.value
    );
    if (res !== undefined) {
      localStorage.setItem("JWT", res);
      dispatch(loginActions.setLogin());
      history.push("/home");
    }
  };

  return (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      direction="column"
      style={{ minHeight: "100vh" }}
      spacing={5}
    >
      <Grid item>
        <Typography variant="h5" color="primary">
          Sign in
        </Typography>{" "}
      </Grid>
      <Grid item style={{ border: "0.2px solid gray" }}>
        <Grid
          component="form"
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          onSubmit={handleSubmit}
        >
          <TextField
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "2em" }}
          />
          <TextField
            type="password"
            id="pwd"
            label="Password"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "2em" }}
          />
          <Button type="submit" color="primary" variant="contained">
            Sign in
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
