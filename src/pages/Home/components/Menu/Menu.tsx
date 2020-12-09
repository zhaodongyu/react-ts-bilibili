import React, {useEffect, useState} from 'react';
import IconButton from '../../../../common/IconButton/IconButton';
import Link, {LinkTypeEnum} from '../../../../common/Link/Link';
import {getMenuData} from './../../api';

interface primaryDataInterface {
    title: string,
    imgUrl: any,
}

interface channelDataInterface {
    title: string,
    number: number,
}

interface friendLinkInterface {
    title: string,
    imgUrl: any,
}

const Menu: React.FC = () => {

    const [primaryData, setPrimaryData] = useState([]);
    const [channelData, setChannelData] = useState([]);
    const [friendData, setFriendData] = useState([]);

    useEffect(() => {
        getMenuData().then((res) => {
            const {data} = res;
            setPrimaryData(data.primary);
            setChannelData(data.channel);
            setFriendData(data.friend);
        })
    }, ["primaryData", "channelData", "friendData"]);

    // 渲染上方导航
    const renderPrimary = (menuData: Array<primaryDataInterface>) => {
        return (
            menuData.length > 0 && <ul className='primary-container'>
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
    const renderChannel = (channelData: Array<channelDataInterface>) => {
        return <div className="channel-container">{
            channelData.length > 0 && channelData.map((child, index) => {
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
            {friendLinkData.length > 0 && friendLinkData.map((child, index) => {
                const {title, imgUrl} = child;
                return (
                    <span key={index} className="friend-link-tips">
                        <Link title={title} linkType={LinkTypeEnum.Small}
                              imgUrl={imgUrl}
                        />
                    </span>
                )
            })}
        </div>
    };

    return (
        <div className="wrap-container">
            <div className="wrap-item-container">
                {renderPrimary(primaryData)}
                <span className="home-line"/>
                {renderChannel(channelData)}
                <span className="home-line"/>
                {renderFriendLink(friendData)}
            </div>
        </div>
    );
};

export default Menu;
