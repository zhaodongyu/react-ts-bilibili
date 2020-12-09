import React, {createContext, useEffect, useState} from 'react';
import {getContentData} from "./api";

// 上方菜单
import Menu from './components/Menu/Menu';

// 中间导航
import WrapReport from './components/WrapReport/WrapReport';

// 下方内容
import ContentBox from './components/ContentBox/ContentBox';

export const ContentContext = createContext({});

const Home: React.FC = () => {

    const [contentData, setContentData] = useState({});

    useEffect(() => {

        getContentData().then((res) => {
            setContentData(res.data);
        })

    }, []);

    return (
        <div className="home-container">
            <ContentContext.Provider value={contentData}>
                <Menu />
                <WrapReport />
                <ContentBox />
            </ContentContext.Provider>
        </div>
    );
}

export default Home;
