import React, { FC }from 'react';

// 左侧导航栏组件
import NaviPage from './components/NaviPage/NaviPage'

// 中间搜索栏
import SearchBar from './components/SearchBar/SearchBar';

// 右侧个人中心
import PersonalInfo from './components/PersonalInfo/PersonalInfo';

const NavigationBar: FC = () => {

    return (
        <div className="navigation">
            <NaviPage />
            <SearchBar />
            <PersonalInfo />
        </div>
    )
};


export default NavigationBar;