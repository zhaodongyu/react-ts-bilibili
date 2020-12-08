import React from 'react';
import ContentList from './ContentList/ContentList'
import RankList from './RankList/RankList'

const contentData = {
    anime: {
        data: [
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
            },
            {
                title: `【宫崎骏】唯有童年与美食不可辜负`,
                imgUrl: `http://localhost:3000/static/akari.jpg`
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
                Object.keys(contentData).map((contentClass, index) =>{

                    const {data} = contentData[contentClass];
                    return (
                        <ContentList key={index} renderData={data} />
                    )
                })
            }
            <RankList />
        </div>
    );
};

export default ContentBox;
