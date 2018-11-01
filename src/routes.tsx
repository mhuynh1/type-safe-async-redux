import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import BusinessesPage from './pages/BusinessesPage';
import Biz from './pages/Biz';

const Routes: React.SFC = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={BusinessesPage} />
            <Route exact path="/:id/:name" component={Biz} />
            <Route component={() => <div>Not Found</div>} />
        </Switch>
    </Fragment>
)

export default Routes;