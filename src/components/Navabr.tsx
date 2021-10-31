import * as React from "react";
import { AppBar, Button, ButtonGroup } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { routeActions } from "../redux/slice/route-slice";
import { useHistory } from "react-router-dom";
import { loginActions } from "../redux/slice/login-slice";

const useStyles = makeStyles({
  select_button: {
    "&.MuiButton-root": {
      background: "black",
      textTransform: "none",
      justifyContent: "space-between",
    },
  },
  button: {
    "&.MuiButton-root": {
      textTransform: "none",
      justifyContent: "space-between",
    },
  },
  toolBar: {
    justifyContent: "space-between",
  },
  home: {
    justifyContent: "space-around",
  },
});

const Navbar = () => {
  const dispatch = useAppDispatch();
  const route = useAppSelector((state) => state.route.route);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    dispatch(routeActions.setRoute("home"));
  }, []);

  const handleTabClick = (route: string) => {
    dispatch(routeActions.setRoute(route));
    history.push("/" + route);
  };

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    dispatch(loginActions.setLogin());
    history.push("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <ButtonGroup>
            <Button
              id={"home"}
              className={
                route === "home" ? classes.select_button : classes.button
              }
              color="inherit"
              onClick={() => handleTabClick("home")}
            >
              Home
            </Button>
            <Button
              id="chefs"
              className={
                route === "chefs" ? classes.select_button : classes.button
              }
              color="inherit"
              onClick={() => handleTabClick("chefs")}
            >
              Chef
            </Button>
            <Button
              className={
                route === "resturants" ? classes.select_button : classes.button
              }
              id="resturants"
              color="inherit"
              onClick={() => handleTabClick("resturants")}
            >
              Resturants
            </Button>
            <Button
              className={
                route === "dishes" ? classes.select_button : classes.button
              }
              id="dishes"
              color="inherit"
              onClick={() => handleTabClick("dishes")}
            >
              Dishes
            </Button>
          </ButtonGroup>
          <Button id="logout" color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
