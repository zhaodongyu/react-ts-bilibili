import React from 'react';


interface LinkProps{
    img?: any;
    title: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const { img, title } = props;

    return (
        <span className='link' >
            {img && <img src={img} alt={title} />}
            {title}
        </span>
    )
};

export default Link;