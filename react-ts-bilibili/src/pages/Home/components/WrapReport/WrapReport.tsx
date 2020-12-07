import React from 'react';

const recommendData = [
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
    {
        title: `【明日方舟】同人动画Just Believe you`,
        img: require(`./../../../../static/akari.jpg`).default
    },
];

interface recommendDataInterface {
    title: string;
    img: any;
}

function WrapReport() {

    // 渲染轮播图
    const renderCarousel = () => {
        return (
            <div className="carousel-container"></div>
        )
    };

    // 渲染推荐
    const renderRecommend = (recommendData: Array<recommendDataInterface>) => {
        return (
            <div className="recommend-container">
                {
                    recommendData.map(() => {
                        return (<div className="recommend-item">
                            123
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
}

export default WrapReport;
