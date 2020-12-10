import React, {useContext} from 'react';
import {HomeContext} from '../../Home';

interface RecommendDataInterface {
    title: string;
    img: string;
}

const WrapReport: React.FC = () => {

// 获取Context中的数据
    const {recommendData} = useContext(HomeContext);
    const {carouselImg, recommendData: renderData} = recommendData;

// 渲染轮播图
    const renderCarousel = () => {
        return (
            <div className="carousel-container" style={{
                background: `center / contain no-repeat url(${carouselImg})`
            }}>
            </div>
        )
    };

// 渲染推荐
    const renderRecommend = (recommendData: Array<RecommendDataInterface>) => {
        return (
            <div className="recommend-container">
                {
                    recommendData.map((child, index) => {
                        const {img, title} = child;
                        return (
                            <div key={index} className="recommend-item" style={{
                                background: `center / contain no-repeat url(${img})`
                            }}>
                                <div className="recommend-item-title">
                                    {title}
                                </div>
                            </div>)
                    })
                }
            </div>
        )
    };

    return (
        <div className="wrap-report-container">
            {renderCarousel()}
            {renderRecommend(renderData)}
        </div>
    );
};

export default WrapReport;