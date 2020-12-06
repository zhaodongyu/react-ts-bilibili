import React, { FC }from 'react';

// 左侧导航栏组件
import NaviPage from './components/NaviPage/NaviPage'

const NavigationBar: FC = () => {

    return (
        <div className="navigation">
            <NaviPage />
        </div>
    )
};


export default NavigationBar;