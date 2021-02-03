import { fetchGet, fetchPost } from '../http';
let articleService = {
    //文章列表
    articleList(params) {
        return fetchPost("/platform/information/queryPageInformationList", params).then(res => res.data)
    },
    //查询文章
    searchArticleById(params) {
        return fetchGet(`/platform/information/findInformationById?id=${params}`).then(res => res.data)
    },
}
export default articleService