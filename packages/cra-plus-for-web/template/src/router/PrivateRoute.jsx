import React from "react";
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

  const {isAuth} = useSelector(state => state.auth)
  // let { isAuth } = { ...rest };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
