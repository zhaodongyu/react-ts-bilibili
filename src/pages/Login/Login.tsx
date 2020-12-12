import React, {useState} from 'react';
import Button from '../../common/Button/Button';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './api'
import {actionCreators} from './store';


interface HistoryProps {
    history: any;
    loginSuccess: Function
}

interface LoginInterface{
    result: string
}

const Login: React.FC<HistoryProps> = (props) => {

    const {history, loginSuccess} = props;

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
                loginSuccess();
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

const mapStateToProps = (state: any) => {
    return {
        isLogin: state.login.isLogin
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginSuccess: () => {
            dispatch(actionCreators.loginSuccess());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));