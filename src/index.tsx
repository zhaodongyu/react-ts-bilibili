import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes/routes';
import {Provider} from 'react-redux';

// 引入scss样式
import './styles/index.scss';

// 公共导航栏
import NavigationBar from './common/NavigationBar/NavigationBar'

// redux数据
import store from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <NavigationBar />
                {routes}
            </Router>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);

