import React, {useState} from 'react';
import Button from '../../common/Button/Button';
import {withRouter} from 'react-router-dom';
import {login} from './api'

interface HistoryProps {
    history: any;
}

interface LoginInterface{
    result: string
}

const Login: React.FC = (props) => {

    const {history} = (props as HistoryProps);

    // 用户名
    const [username, setUsername] = useState(``);
    const [password, setPassword] = useState(``);


    // 输入登陆信息
    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    };

    const loginClick = () => {

        const loginData = {
            username: username,
            password: password
        };

        login(loginData).then( (res: any) => {
            const loginResult: LoginInterface = res.data;

            if (loginResult.result === "success") {
                history.push("/");
            }else{
                console.log(`login failed!`);
            }

        });

    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <div className="login-form-item">
                    <div>用户名：</div>
                    <div className="login-form-input-container">
                        <input type="text" onChange={onChangeUsername}/>
                    </div>
                </div>
                <div className="login-form-item">
                    <div>密码：</div>
                    <div className="login-form-input-container">
                        <form>
                            <input type="password" onChange={onChangePassword} autoComplete="" />
                        </form>
                    </div>
                </div>
                <div className="login-btn-container">
                    <Button title='登录' onClick={loginClick}/>
                </div>
            </div>
        </div>
    )
};

export default withRouter(Login);