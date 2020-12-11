import React from 'react';
import {withRouter} from 'react-router-dom';

// 左侧导航栏组件
import NaviPage from './components/NaviPage/NaviPage'

// 中间搜索栏
import SearchBar from './components/SearchBar/SearchBar';

// 右侧个人中心
import PersonalInfo from './components/PersonalInfo/PersonalInfo';

interface HistoryProps {
    history: any;
}

const NavigationBar: React.FC<HistoryProps> = (props) => {

    const {history} = props;
    if(history.location.pathname === `/noPage`){
        return (
            <div />
        )
    }

    return (
        <div>
            <div className="navigation">
                <NaviPage />
                <SearchBar />
                <PersonalInfo />
            </div>
            <div className="header-banner"></div>
        </div>
    )
};


export default withRouter(NavigationBar);