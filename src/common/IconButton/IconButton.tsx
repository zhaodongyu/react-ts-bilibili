import React from 'react';

interface IconButtonProps{
    title: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    img: any;
}

const Button: React.FC<IconButtonProps> = (props) => {
    const {title, style, onClick, img} = props;

    const handleClick = () => {

        // 点击事件
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className='icon-button' style={style} onClick={handleClick}>
            <div className='icon-img-container'>
                <img src={ img } alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
};

export default Button;