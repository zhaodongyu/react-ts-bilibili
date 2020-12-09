/**
 * Created by Administrator on 2020/12/9.
 */
import axios from 'axios';

// 内容区域数据
export const getContentData = () => {
    return axios.get(`/api/getContentData.json`).then((res) => ({data: res.data}));
};

// 菜单栏数据
export const getMenuData = () => {
    return axios.get(`/api/getMenuData.json`).then((res) => ({data: res.data}));
};