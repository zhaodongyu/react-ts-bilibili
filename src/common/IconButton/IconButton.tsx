import React from 'react';

interface IconButtonProps{
    title: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    imgUrl: string;
}

const Button: React.FC<IconButtonProps> = (props) => {
    const {title, style, onClick, imgUrl} = props;

    const handleClick = () => {

        // 点击事件
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='icon-button' style={style} onClick={handleClick}>
            <div className='icon-img-container'>
                <img src={ imgUrl } alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
};

export default Button;