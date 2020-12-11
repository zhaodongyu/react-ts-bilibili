import React, {useContext} from 'react';
import IconButton from '../../../../common/IconButton/IconButton';
import Link, {LinkTypeEnum} from '../../../../common/Link/Link';
import {HomeContext} from '../../Home';

interface PrimaryDataInterface {
    title: string,
    imgUrl: string,
}

interface ChannelDataInterface {
    title: string,
    number: number,
}

interface FriendLinkInterface {
    title: string,
    imgUrl: string,
}

const Menu: React.FC = () => {

// 共享数据
    const {menuData} = useContext(HomeContext);

// 渲染上方导航
    const renderPrimary = (menuData: Array<PrimaryDataInterface>) => {
        return (
            <ul className='primary-container'>
                {
                    menuData.map((child, index) => {
                        const {title, imgUrl} = child;
                        return (
                            <li key={index}>
                                <IconButton title={title} imgUrl={imgUrl}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    };

// 渲染中间分区
    const renderChannel = (channelData: Array<ChannelDataInterface>) => {
        return (
            <div className="channel-container">
                {
                    channelData.map((child, index) => {
                        const {title, number} = child;
                        return (
                            <span className="channel-tips" key={index}>
                                {title}
                                <em>{number}</em>
                            </span>
                        )
                    })
                }
            </div>
        );
    };

// 渲染右侧友情链家
    const renderFriendLink = (friendLinkData: Array<FriendLinkInterface>) => {
        return <div className="friend-link-container">
            {
                friendLinkData.map((child, index) => {
                    const {title, imgUrl} = child;
                    return (
                        <span key={index} className="friend-link-tips">
                            <Link title={title} linkType={LinkTypeEnum.Small}
                                imgUrl={imgUrl}
                            />
                        </span>
                    )
                })
            }
        </div>
    };

    return (
        <div className="wrap-container">
            <div className="wrap-item-container">
                {renderPrimary(menuData.primary)}
                <span className="home-line"/>
                {renderChannel(menuData.channel)}
                <span className="home-line"/>
                {renderFriendLink(menuData.friend)}
            </div>
        </div>
    );
};

export default Menu;