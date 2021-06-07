import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  SignupSimple as SignupSimpleView,
  Login as LoginView,
  Nosotros as NosotrosView,
  NotFound as NotFoundView,
  Cotizacion as CotizacionView,
  Servicios as ServiciosView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home"
      />
      <RouteWithLayout
        component={SignupSimpleView}
        exact
        layout={MainLayout}
        path="/signup-simple"
      />
      <RouteWithLayout
        component={LoginView}
        exact
        layout={MainLayout}
        path="/login"
      />
       <RouteWithLayout
        component={NosotrosView}
        exact
        layout={MainLayout}
        path="/Nosotros"
      />
      <RouteWithLayout
        component={CotizacionView}
        exact
        layout={MainLayout}
        path="/Cotizacion"
      />
       <RouteWithLayout
        component={ServiciosView}
        exact
        layout={MainLayout}
        path="/Servicios"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" status="404" />
    </Switch>
  );
};

export default Routes;
