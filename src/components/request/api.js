
const baseUrl = "https://www.manxi-inc.com/manxi-website";
import { fetchGet, fetchPost } from './http'
//获取Guid
let guidService = {
    getGuid() {
        return fetchGet("/common/verifyCode/generateKey").then(res => res.data)
    }
}
let userInfoService = {
    sendMailPersonalInfo(params) {
        return fetchPost("/api/mail/info/sendMailPersonalInfo", params).then(res => res.data)
    }
}
export default {
    baseUrl, guidService, userInfoService
}