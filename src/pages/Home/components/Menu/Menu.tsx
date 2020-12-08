import React from 'react';
import IconButton from '../../../../common/IconButton/IconButton';
import Link, {LinkTypeEnum} from '../../../../common/Link/Link';

const menuData = [
    {
        title: `首页`,
        img: require(`../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`../../../../static/package-secured.png`).default,
    },
    {
        title: `首页`,
        img: require(`../../../../static/package-secured.png`).default,
    },
];

const channelData = [
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
    {
        title: `动画`,
        number: 400,
    },
];

const friendLinkData = [
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
    {
        title: `专栏`,
        img: require(`../../../../static/akari.jpg`).default,
    },
];

interface primaryDataInterface {
    title: string,
    img: any,
}

interface channelDataInterface {
    title: string,
    number: number,
}

interface friendLinkInterface {
    title: string,
    img: any,
}

const Menu: React.FC = () => {

    // 渲染上方导航
    const renderPrimary = (menuData: Array<primaryDataInterface>) => {
        return (
            <ul className='primary-container'>
                {
                    menuData.map((child, index) => {
                        const {title, img} = child;
                        return (
                            <li key={index}>
                                <IconButton title={title} img={img}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };

    // 渲染中间分区
    const renderChannel = (channelData: Array<channelDataInterface>) => {
        return <div className="channel-container">{channelData.map((child, index) => {
            const {title, number} = child;
            return (
                <span className="channel-tips" key={index}>
                    {title}
                    <em>{number}</em>
                </span>)
        })}</div>;
    };

    // 渲染右侧友情链家
    const renderFriendLink = (friendLinkData: Array<friendLinkInterface>) => {
        return <div className="friend-link-container">
            {friendLinkData.map((child, index) => {
                const {title, img} = child;
                return (
                    <span key={index} className="friend-link-tips">
                        <Link title={title} linkType={LinkTypeEnum.Small}
                              img={img}
                        />
                    </span>
                )
            })}
        </div>
    };

    return (
        <div className="wrap-container">
            <div className="wrap-item-container">
                {renderPrimary(menuData)}
                <span className="home-line"/>
                {renderChannel(channelData)}
                <span className="home-line"/>
                {renderFriendLink(friendLinkData)}
            </div>
        </div>
    );
};

export default Menu;
