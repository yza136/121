import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/content/index';
import Board from '../pages/content/board';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/board" component={Board}/>
        </Switch>
    </HashRouter>
);
export default BasicRoute  