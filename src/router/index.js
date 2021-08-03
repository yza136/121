import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/content/index';
import Board from '../pages/content/board';
import DataManage from '../pages/content/dataManage';
import Edit from '../pages/edit';

const BasicRoute = () => (
    <div>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/board" component={Board}/>
           <Route  path="/DataManage" component={DataManage}/>
           <Route  path="/edit" component={Edit}/>
        </Switch>
    </div>
);
export default BasicRoute 