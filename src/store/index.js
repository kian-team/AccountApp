import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // token: ''|| localStorage.getItem('token'),
    token: localStorage['site_current_token'] ? localStorage['site_current_token'] : '',             //token
    account_id: localStorage['site_current_account_id'] ? localStorage['site_current_account_id'] : 0,       //当前account_id
    app_id: localStorage['site_current_app_id'] ? localStorage['site_current_app_id'] : '',          //当前 app_id
    retry_count: 0,//登录重试次数,防止同一页面中多个ajax同时触发登录操作
    after_login_go: localStorage['site_current_login_go'] ? localStorage['site_current_login_go'] : '',//登录后跳转
    showAddBtn: true
  },
  mutations: {
    set_token(state, token) {
      state.token = token;
      localStorage['site_current_token'] = token;
    },
    set_accountid(state, aid) {
      state.account_id = aid;
      localStorage['site_current_account_id'] = aid;
    },
    set_appid(state, appid) {
      state.app_id = appid
      localStorage['site_current_app_id'] = appid;
    },
    retry_count_add(state) {
      state.retry_count++;
    },
    set_login_go(state, path) {
      state.after_login_go = path;
      localStorage['site_current_login_go'] = path;
    },
    setToken(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    removeToken(state) {
      localStorage.removeItem('token');
      state.token = null
    },
    toggleAddBtn(state, flag){
      state.showAddBtn = flag
    }
  },
  actions: {
  },
  modules: {
  }
})
