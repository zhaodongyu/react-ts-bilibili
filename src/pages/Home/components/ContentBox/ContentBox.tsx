import React, {useContext} from 'react';
import ContentList from './ContentList/ContentList';
import RankList from './RankList/RankList';
import Elevator from './../Elevator/Elevator';

import {HomeContext} from '../../Home';

const ContentBox: React.FC = () => {

    // 获取Context中的数据
    const {contentData} = useContext(HomeContext);

    const renderContent = () => {
        return Object.keys(contentData).map((contentClass, index) => {
            const {data, title, imgUrl} = contentData[contentClass];
            return (
                <div className="content-container"
                     key={index}
                     id={contentClass}
                >
                    <ContentList renderData={data} title={title} imgUrl={imgUrl}/>
                    <RankList imgUrl={imgUrl}/>
                </div>
            )
        })
    };

    return (
        <div>
            {renderContent()}
            <Elevator />
        </div>
    );
};

export default ContentBox;