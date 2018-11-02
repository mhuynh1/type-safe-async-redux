import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homePage";
import PizzaPage from "./pages/pizza";
import CoffeePage from "./pages/coffee";

const Routes: React.SFC = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/pizza" component={PizzaPage} />
      <Route path="/coffee" component={CoffeePage} />
      <Route component={() => <div>Not Found</div>} />
    </Switch>
  </Fragment>
);

export default Routes;
