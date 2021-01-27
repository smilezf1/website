
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = { newsList: null },
    mutations = {
        setArticleList(state, val) {
            state.newsList = val
        }
    }
export default new Vuex.Store({ state, mutations })
