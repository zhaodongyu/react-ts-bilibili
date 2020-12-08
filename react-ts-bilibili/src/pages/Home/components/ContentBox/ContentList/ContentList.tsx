import React from 'react';

interface renderItemInterface {
    title: string;
    imgUrl: string;
}

interface renderDataProps {
    renderData: Array<renderItemInterface>
}

const ContentList: React.FC<renderDataProps> = (props) => {
    const {renderData} = props;

    return (
        <div className="content-list-container">
            {
                renderData.map((child, index) => {
                    const {title, imgUrl} = child;
                    return (
                        <div className="content-item-container" key={index}>
                            <div className="content-img-container">
                                <img src={imgUrl} alt={title} />
                            </div>
                            <span className="content-title">{title}</span>
                        </div>)
                })
            }
        </div>
    )
};

export default ContentList;