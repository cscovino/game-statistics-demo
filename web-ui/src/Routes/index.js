import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import History from './History';
import NotFound from './NotFound';
import Top from './Top';

function Routes() {
    return (
        <Switch>
            <Route exact path='/'>
                <History />
            </Route>
            <Route path='/top'>
                <Top />
            </Route>
            <Route path='/notfound'>
                <NotFound />
            </Route>
            <Redirect to='/notfound' />
        </Switch>
    );
}

export default Routes;