import React, {createContext, useEffect, useState} from 'react';
import {getContentData, getMenuData, getRecommendData} from "./api";
import {connect} from 'react-redux';

// 上方菜单
import Menu from './components/Menu/Menu';

// 中间导航
import WrapReport from './components/WrapReport/WrapReport';

// 下方内容
import ContentBox from './components/ContentBox/ContentBox';

interface HomeProps {
    isLogin: boolean
}

interface MenuDataInterface {
    primary: Array<any>;
    channel: Array<any>;
    friend: Array<any>;
}

interface RecommendDataInterface{
    recommendData: Array<any>;
    carouselImg: string;
}

interface IHomeContext {
    contentData: object;
    menuData: MenuDataInterface;
    recommendData: RecommendDataInterface;
    isLogin: boolean
}

const defaultRenderData = {
    contentData: {},
    menuData: {
        primary: [],
        channel: [],
        friend: [],
    },
    recommendData: {
        recommendData: [],
        carouselImg: "",
    },
    isLogin: false,
};

export const HomeContext = createContext<IHomeContext>(defaultRenderData);


const Home: React.FC<HomeProps> = (props) => {
    const {isLogin} = props;

    const [renderData, setRenderData] = useState(defaultRenderData);

    useEffect(() => {

        const [indexContentData, indexMenuData, indexRecommendData] = [0, 1, 2];

        Promise.all([getContentData(), getMenuData(), getRecommendData()]).then( (resList) => {

            setRenderData({
                contentData: (resList[indexContentData] as any).data,
                menuData: (resList[indexMenuData] as any).data,
                recommendData: (resList[indexRecommendData] as any).data,
                isLogin,
            })

        }).catch( () => {
            console.error(`get render data error`);
        });

    }, [isLogin]);

    return (
        <div className="home-container">
            <HomeContext.Provider value={renderData}>
                <Menu />
                <WrapReport />
                <ContentBox />
            </HomeContext.Provider>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
};

export default connect(mapStateToProps, null)(Home);
