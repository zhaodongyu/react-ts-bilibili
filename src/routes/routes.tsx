import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';

export default(
    <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
    </div>
)