import React from 'react';

// 公共图片按钮组件
import Link from '../../../Link/Link';

// 公共按钮
import Button from '../../../Button/Button';

// 公共图片地址
const loginImg = require(`./../../../../static/akari.jpg`);

const PersonalInfo: React.FC = () => {

    const titleLogin = `登录`;
    const titleRegister = `注册`;
    const submit = `投稿`;
    const submitStyle = {
        marginLeft: `14px`,
    };


    const renderLogout = () => {
        return (
            <div className="personal-info">
                <Link img={loginImg.default} title={titleLogin} />
                <Link title={titleRegister} />
                <Button title={submit}  style={submitStyle as React.CSSProperties} />
            </div>
        )
    };
    return (
        renderLogout()
    );
};

export default PersonalInfo;