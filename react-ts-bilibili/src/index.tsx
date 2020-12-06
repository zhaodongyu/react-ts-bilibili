import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 引入scss样式
import './styles/index.scss';

// 公共导航栏
import NavigationBar from './common/NavigationBar/NavigationBar'

ReactDOM.render(
    <React.StrictMode>
        <NavigationBar />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

