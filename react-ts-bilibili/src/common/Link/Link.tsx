import React from 'react';


const ImgDefaultWidth: string = `32px`;
const ImgDefaultHeight: string = `32px`;
const defaultFontColor: string = `#fff`;

interface LinkProps{
    img?: any;
    title: string;
    imgWidth?: string;
    imgHeight?: string;
    fontColor?: string;
}

const Link: React.FC<LinkProps> = (props) => {
    const { img, title, imgWidth, imgHeight, fontColor } = props;

    return (
        <span className='link' style={
            {color: fontColor ? fontColor: defaultFontColor}
        }>
            {img && <img src={img}
                         style={
                             {
                                 width: imgWidth ? imgWidth:ImgDefaultWidth,
                                 height: imgHeight ? imgHeight:ImgDefaultHeight,
                             }
                         }
                         alt={title} />}
            {title}
        </span>
    )
};

export default Link;