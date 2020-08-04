import axios from 'axios';
import router from './router';
import Vue from 'vue';
let v = new Vue();
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = false;
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
