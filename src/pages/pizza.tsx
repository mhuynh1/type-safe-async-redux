import React, { Component } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import PizzaListings from "./Pizza/PizzaListings";
import Biz from "./Pizza/Biz";

type AllProps = RouteComponentProps<{}>;
class PizzaPage extends Component<AllProps> {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`} component={PizzaListings} />
        <Route path={`${match.path}/:id/:name`} component={Biz} />
      </Switch>
    );
  }
}
export default PizzaPage;
