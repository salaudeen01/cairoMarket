import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from '../routes';
import RouteWithLayout from '../RouteWithLayout';

const MainLayout = React.lazy(() => import('../layouts/Main'));
const MinimalLayout = React.lazy(() => import('../layouts/Minimal'));
const Login = React.lazy(() => import('./Login'));
const Register = React.lazy(() => import('./Register'));
const Page404 = React.lazy(() => import('./Page404'));

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
