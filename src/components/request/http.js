import axios from 'axios';
import router from '../../router';
import Vue from 'vue';
let v = new Vue();
//环境的切换
if (process.env.NODE_ENV == 'development') {//开发环境
    axios.defaults.baseURL = "https://www.manxi-inc.com/manxi-website";

} else if (process.env.NODE_ENV == 'debug') {//测试环境
    axios.defaults.baseURL = "https://www.manxi-inc.com/manxi-website";

} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = "https://www.manxi-inc.com/manxi-website"
}
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = false;
axios.defaults.headers.post['Content-Type'] = "application/json"
//get请求
export function fetchGet(url, params, responseType) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params }, responseType).then(res => {
            resolve(res)
        }, error => {
            reject(error)
        }).catch((error) => {
            reject(error)
        })
    })
}
//post请求
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res)
        }, error => {
            reject(error)
        }).catch((error) => {
            reject(error)
        })
    })
}
export default {
    fetchGet, fetchPost
}
