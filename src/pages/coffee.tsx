import React, { Component } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import CoffeeListings from "./Coffee/CoffeeListings";
import Biz from "./Coffee/Biz";

type AllProps = RouteComponentProps<{}>;
class CoffeePage extends Component<AllProps> {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`} component={CoffeeListings} />
        <Route path={`${match.path}/:id/:name`} component={Biz} />
      </Switch>
    );
  }
}
export default CoffeePage;
