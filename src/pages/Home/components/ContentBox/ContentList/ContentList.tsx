import React from 'react';
import Link, {LinkTypeEnum} from './../../../../../common/Link/Link';

interface renderItemInterface {
    title: string;
    imgUrl: string;
}

interface renderDataProps {
    renderData: Array<renderItemInterface>
    imgUrl: string;
    title: string;
}

const ContentList: React.FC<renderDataProps> = (props) => {

    const {renderData, imgUrl, title} = props;

    return (
        <div>
            <header className="content-header-container">
                <Link imgUrl={imgUrl} title={title} linkType={LinkTypeEnum.Medium}/>
            </header>
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
        </div>
    )
};

export default ContentList;