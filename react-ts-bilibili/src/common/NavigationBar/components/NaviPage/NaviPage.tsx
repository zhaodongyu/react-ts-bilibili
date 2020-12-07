import React from 'react';

// 公共图片按钮组件
import Link from '../../../Link/Link';

import {
    navi_page_data,
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
                <li key={index} className='nav-page-item'>
                    <a href={link}>
                        <Link title={title} />
                    </a>
                </li>
            )
        });
    };

    return (
        <ul className='nav-page-ul'>
            {renderChildren(navi_page_data)}
        </ul>
    )
};


export default NaviPage;