import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../pages/Home/Home';

export default(
    <div>
        <Route exact path='/' component={Home} />
    </div>
)