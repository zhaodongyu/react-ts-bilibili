import React from 'react';

interface LinkProps{
    imgUrl?: string;
    title: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const { imgUrl, title } = props;

    return (
        <span className='link' >
            {imgUrl && <img src={imgUrl} alt={title} />}
            {title}
        </span>
    )
};

export default Link;