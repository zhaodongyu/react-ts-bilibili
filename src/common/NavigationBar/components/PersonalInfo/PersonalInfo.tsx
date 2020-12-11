import React from 'react';

// 公共图片按钮组件
import Link from '../../../Link/Link';

// 公共按钮
import Button from '../../../Button/Button';

// 公共图片地址
const loginImg = `http://localhost:3000/static/akari.jpg`;

const PersonalInfo: React.FC = (props) => {


    const titleLogin = `登录`;
    const titleRegister = `注册`;
    const submit = `投稿`;
    const submitStyle = {
        marginLeft: `14px`,
        background: `#FB7299`,
    };

    const handleClick = () => {
        console.log(123);
    };

    const renderLogout = () => {
        return (
            <div className="personal-info">
                <Link imgUrl={loginImg} title={titleLogin}
                      onClick={handleClick}
                />
                <Link title={titleRegister} />
                <Button title={submit}
                        style={submitStyle as React.CSSProperties}
                        />
            </div>
        )
    };
    return (
        renderLogout()
    );
};

export default PersonalInfo;