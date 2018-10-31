import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';

const NextPage: React.SFC = () => {
    return (
        <Fragment>
            <h2>This is the NextPage</h2>
        </Fragment>
    )
}

const Routes: React.SFC = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/next" component={NextPage} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </Fragment>
)

export default Routes;