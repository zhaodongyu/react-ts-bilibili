import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes/routes';

// 引入scss样式
import './styles/index.scss';

// 公共导航栏
import NavigationBar from './common/NavigationBar/NavigationBar'

// 路由

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavigationBar />
            {routes}
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

