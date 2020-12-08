import React from 'react';
import ContentList from './ContentList/ContentList'
import RankList from './RankList/RankList'

const contentData = {
    anime: {
        data: [
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `213`
            },

        ],
        title: `动画`,
        titleImgUrl: `123`
    }
};

const ContentBox: React.FC = () => {


    return (
        <div className="content-container">
            {
                Object.keys(contentData).map((contentClass) =>{

                    const {data} = contentData[contentClass];
                    return (
                        <ContentList renderData={data} />
                    )

                })
            }
            <RankList />
        </div>
    );
};

export default ContentBox;
