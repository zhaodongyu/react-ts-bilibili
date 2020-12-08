import React from 'react';

// 连接类型
export enum LinkTypeEnum {
    Large = `lg`,
    Small = `sm`
}

interface LinkProps {
    img?: any;
    title: string;
    linkType?: LinkTypeEnum;
}

const Link: React.FC<LinkProps> = (props) => {
    const {img, title, linkType} = props;

    let classNames = `link link-${LinkTypeEnum.Large}`;
    if (linkType) {
        classNames = `link link-${linkType}`;
    }

    return (
        <span className={classNames}>
            {img && <img src={img} alt={title}/>}
            {title}
        </span>
    )
};

export default Link;