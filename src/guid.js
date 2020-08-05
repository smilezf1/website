/* function getGuid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4())
}
export default { getGuid } */
/* import Vue from 'vue';
import http from '../src/http'
let v = new Vue()
const _this = this;
function getGuid() {
    let baseUrl = v.api.baseUrl;
    http.fetchGet(baseUrl + "/common/verifyCode/generateKey").then(res => {
        if (res.status == '200') {
            console.log(res.data)
        }
    })
}
export default { getGuid } */