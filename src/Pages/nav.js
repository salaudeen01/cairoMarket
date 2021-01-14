import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import RouteWithLayout from '../RouteWithLayout';

const Nav = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/landing"
      />
      {routes.map((route, idx) => {
        return(
        <RouteWithLayout
          key={idx}
          path={route.path}
          exact={route.exact}
          component={route.component}
          layout={route.layout}
        />)
      })}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Nav;
