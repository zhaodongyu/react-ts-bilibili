/**
 * Created by Administrator on 2020/12/9.
 */
import axios from 'axios';

// 内容区域数据
export const getContentData = () => {
    return axios.get(`/api/getContentData.json`).then((res) => ({data: res.data})).catch( () => {
        console.error(`get content data failed!`)
    });
};

// 菜单栏数据
export const getMenuData = () => {
    return axios.get(`/api/getMenuData.json`).then((res) => ({data: res.data})).catch( () => {
        console.error(`get menu data failed!`)
    });
};

// 推荐数据
export const getRecommendData = () => {
    return axios.get(`/api/getRecommendData.json`).then((res) => ({data: res.data})).catch( () => {
        console.error(`get recommend data failed!`)
    });
};