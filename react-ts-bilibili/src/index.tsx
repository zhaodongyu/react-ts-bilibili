import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';

// 引入scss样式
import './styles/index.scss';

// 公共导航栏
import NavigationBar from './common/NavigationBar/NavigationBar'
import HeaderAdv from './common/HeaderAdv/HeaderAdv'

// 路由

ReactDOM.render(
    <React.StrictMode>
        <NavigationBar />
        <HeaderAdv />
        <Home />
    </React.StrictMode>,
    document.getElementById('root')
);

