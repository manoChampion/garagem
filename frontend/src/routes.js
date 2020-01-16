import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import ShowCar from './pages/ShowCar';
import RegisterNewCar from './pages/RegisterNewCar';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/cars/new" component={RegisterNewCar}/>
        <Route exact path="/cars" component={ShowCar}/>
    </Switch>
);

export default Routes;