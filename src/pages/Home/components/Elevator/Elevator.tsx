import React, {useContext} from 'react';
import {ContentContext} from './../../Home';

const Elevator: React.FC = () => {

    const contentData = useContext(ContentContext);
    const list: Array<string> = [];
    const idList: Array<string> = [];

    Object.keys(contentData).forEach((contentClass) => {
        list.push(contentData[contentClass].title);
        idList.push(contentClass);
    });

    const handleClick = (index: number) => {
        const id: string = idList[index];
        const domElement: HTMLElement | null = document.getElementById(id);
        // 滚动
        if (domElement) {
            window.scrollTo({
                top: domElement.offsetTop,
                behavior: `smooth`
            });
        }
    };


    return (
        <div className="elevator-container">
            {
                list.map((item, index) => {
                    return (
                        <div className="elevator-item" key={index} onClick={() => {
                            handleClick(index)
                        }}>{item}</div>
                    )
                })
            }
        </div>
    )
};

export default Elevator;