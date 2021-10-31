import React from "react";
import Login from "./Login";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navabr";
import ChefTable from "./ChefTable";

const Layout = () => {
  return (
    <BrowserRouter>
      <section className="layout">
        <main>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Navbar></Navbar>
              <h1>Welcome</h1>
            </Route>
            <Route path="/chefs">
              <Navbar></Navbar>
              <ChefTable></ChefTable>
            </Route>
            <Route path="/resturants">
              <Navbar></Navbar>
            </Route>
            <Route path="/dishes">
              <Navbar></Navbar>
            </Route>

            <Redirect from="/" to="/login" exact />
          </Switch>
        </main>
      </section>
    </BrowserRouter>
  );
};

export default Layout;
