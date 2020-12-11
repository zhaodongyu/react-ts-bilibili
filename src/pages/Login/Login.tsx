import React from 'react';
import Button from "../../common/Button/Button";

const Login: React.FC = () => {

    const handleClick = () => {

        console.log(123);

    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <div className="login-form-item">
                    <div>用户名：</div>
                    <div className="login-form-input-container">
                        <input type="text"/>
                    </div>
                </div>
                <div className="login-form-item">
                    <div>密码：</div>
                    <div className="login-form-input-container">
                        <input type="password"/>
                    </div>
                </div>
                <div className="login-btn-container">
                    <Button title='登录' onClick={() => {
                        handleClick()
                    }}/>
                </div>
            </div>
        </div>
    )
};

export default Login;