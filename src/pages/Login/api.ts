import axios from 'axios';

interface loginData{
    username: string;
    password: string;
}

// 登陆
export const login = (data: loginData) => {
    return axios.get(`/api/login.json`, {data}).then((res) => ({data: res.data})).catch( () => {
        console.error(`get content data failed!`)
    });
};
