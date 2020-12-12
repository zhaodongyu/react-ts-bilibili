import React from 'react';
import {connect} from 'react-redux';

// 公共图片按钮组件
import Link from '../../../Link/Link';

import {Link as RouterLink} from 'react-router-dom';

// 公共按钮
import Button from '../../../Button/Button';

// 公共图片地址
const loginImg = `http://localhost:3000/static/akari.jpg`;

interface PersonalInfoProps {
    isLogin: boolean
}

const PersonalInfo: React.FC = (props) => {

    const {isLogin} = (props as PersonalInfoProps);

    const titleLogin = `登录`;
    const titleLogout = `退出`;
    const titleRegister = `注册`;
    const submit = `投稿`;
    const submitStyle = {
        marginLeft: `14px`,
        background: `#FB7299`,
    };


    const renderLogin = () => {

        if (isLogin) {
            return (
                <div className="personal-info">

                    <Link imgUrl={loginImg} title={titleLogout}
                    />


                    <Button title={submit}
                            style={submitStyle as React.CSSProperties}
                    />
                </div>
            )
        }

        return (
            <div className="personal-info">

                <RouterLink to="/login">
                    <Link imgUrl={loginImg} title={titleLogin}
                    />
                </RouterLink>

                <Link title={titleRegister}/>
                <Button title={submit}
                        style={submitStyle as React.CSSProperties}
                />
            </div>
        )
    };
    return (
        renderLogin()
    );
};


const mapStateToProps = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
};

export default connect(mapStateToProps, null)(PersonalInfo);
