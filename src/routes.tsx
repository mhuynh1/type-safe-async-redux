import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const HomePage: React.SFC = () => {
    return (
        <Fragment>
            <h2>HomePage</h2>
            <Link to="/next">Go to Next Page</Link>
        </Fragment>
    )
}

const NextPage: React.SFC = () => {
    return (
        <Fragment>
            <h2>This is the NextPage</h2>
        </Fragment>
    )
}

const Routes: React.SFC = () => (
    <Fragment>
        <h1>Main Header</h1>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/next" component={NextPage} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </Fragment>
)

export default Routes;