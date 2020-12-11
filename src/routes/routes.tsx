import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Home from './../pages/Home/Home';
import Login from './../pages/Login/Login';
import NoPage from './../pages/NoPage/NoPage';

export default(
    <div>
        <Switch>
            <Route exact path='/' render={() => (
                <Redirect to="/home" />
            )}
            />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/noPage' component={NoPage}/>
            <Redirect to="/noPage" />
        </Switch>
    </div>
)