import React from 'react';

// 上方菜单
import Menu from './components/Menu/Menu';

// 中间导航
import WrapReport from './components/WrapReport/WrapReport';

// 下方内容
import ContentBox from './components/ContentBox/ContentBox';

function Home() {
    return (
        <div className="home-container">
            <Menu />
            <WrapReport />
            <ContentBox />
        </div>
    );
}

export default Home;
