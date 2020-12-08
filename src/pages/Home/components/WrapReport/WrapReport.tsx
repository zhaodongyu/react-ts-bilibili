import React from 'react';

const recommendData = [
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`../../../../static/akari.jpg`).default
    },
];

// 轮播图背景图
const carouselImg = require(`../../../../static/akari.jpg`).default;

interface recommendDataInterface {
    title: string;
    img: any;
}

const WrapReport: React.FC = () => {

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
    const renderRecommend = (recommendData: Array<recommendDataInterface>) => {
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
            {renderRecommend(recommendData)}
        </div>
    );
};

export default WrapReport;