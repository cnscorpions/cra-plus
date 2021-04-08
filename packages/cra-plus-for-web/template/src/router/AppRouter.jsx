import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Routes } from "./router.config";

import Login from "pages/Login/index";
import NotFound from "pages/NotFound/index";

export default function AppRouter(props) {
  return (
    <Router>
      <Switch>
        {Routes.map((route, index) => (
          <PrivateRoute key={index} exact path={route.path} isAuth={true}>
            {/* <AppLayout content={<route.component />} /> */}
            <route.component />
          </PrivateRoute>
        ))}
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
