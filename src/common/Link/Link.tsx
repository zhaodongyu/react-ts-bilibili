import React from 'react';

// 连接类型
export enum LinkTypeEnum {
    Large = `lg`,
    Small = `sm`,
    Medium = `med`
}

interface LinkProps {
    imgUrl?: string;
    title: string;
    linkType?: LinkTypeEnum;
}

const Link: React.FC<LinkProps> = (props) => {
    const {imgUrl, title, linkType} = props;

    let classNames = `link link-${LinkTypeEnum.Large}`;
    if (linkType) {
        classNames = `link link-${linkType}`;
    }

    return (
        <span className={classNames}>
            {imgUrl && <img src={imgUrl} alt={title}/>}
            {title}
        </span>
    )
};

export default Link;