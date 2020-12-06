import React from 'react';

interface ButtonProps{
    title: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {title, style, onClick} = props;

    const handleClick = () => {

        // 点击事件
        if (onClick) {
            onClick();
        }
    };

    return (
        <span className='button' style={style} onClick={handleClick}>
            {title}
        </span>
    )
};

export default Button;