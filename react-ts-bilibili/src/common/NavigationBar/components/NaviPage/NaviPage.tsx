import React from 'react';

import {
    NAVI_PAGE_DATA,
    NAV_PAGE_UL_CLASS,
    NAV_PAGE_ITEM_CLASS,
} from './../../contants';

// 展示导航的元素接口类型
interface NaviPageItemProps {
    title: string,
    link: string,
}


const NaviPage: React.FC = () => {

    // 根据数据渲染子元素
    const renderChildren = (childrenData: Array<NaviPageItemProps>) => {
        return childrenData.map((child, index) => {
            const {title, link} = child;
            return (
                <li key={index} className={NAV_PAGE_ITEM_CLASS}>
                    <a href={link}>
                        {title}
                    </a>
                </li>
            )
        });
    };

    return (
        <ul className={NAV_PAGE_UL_CLASS}>
            {renderChildren(NAVI_PAGE_DATA)}
        </ul>
    )
};


export default NaviPage;