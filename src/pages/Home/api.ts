/**
 * Created by Administrator on 2020/12/9.
 */
import axios from 'axios';

export const getContentData = () => {
    return axios.get("/api/getContentData.json").then((res) => {
        console.log(res);
    })
};