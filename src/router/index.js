import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/content/index';
import Board from '../pages/content/board';

const BasicRoute = () => (
    <div>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/board" component={Board}/>
        </Switch>
    </div>
);
export default BasicRoute 