// vue-router
import { reqLoginUser, reqGetUserInFO, reqLogout } from "@/api/user";
import { setToken, getToken, removeToken } from '@/utils/token'
import router from '@/router/index'
// 消息提示组件
import Message from '@/utils/messageUI'
// 用户模块
const user = {
  // 开启vuex命名空间
  namespaced: true,
  // 数据
  state() {
    return {
      // 用户数据
      profile: {
        // 用户id
        id: '',
        // 用户头像
        user_pic: '',
        // 用户昵称
        nickname: '',
        // 状态
        status: '',
        username: '',
        // email
        email: '',
      },
      // 用户当前访问的类目
      userActive: '',
      token: getToken(),
      userInfo: {},
    }
  },
  mutations: {
    // 设置用户信息 用户手机号 用户头像 用户昵称 账户 手机 token
    GETUSERLOGIN(state, value) {
      state.token = value;
    },
    GETUSERINFO(state, value) {
      state.profile = value;
    },
    //退出登录，清除token
    CLEAR(state, value) {
      state.profile = {}
      state.token = ''
      state.userInfo = ''
      removeToken()
    },
    setUserActive(state, name) {
      state.userActive = name
    },
  },
  actions: {
    //登录业务
    async getUserLogin(context, data) {
      let result = await reqLoginUser(data);
      // console.log(result);
      //服务器返回token ，用户唯一标识
      //通过不同的token，服务器进行展示
      if (result.status == 200) {
        context.commit('GETUSERLOGIN', result.token);
        setToken(result.token);
        return 'ok'
      } else {
        return Promise.reject(new Error("faile"));
      }
    },
    //获取用户信息
    async GetUserInFO(context, data) {
      let res = await reqGetUserInFO()
      // console.log(res);
      if (res.status === 200) {
        context.commit('GETUSERINFO', res.data);
      }
    },
    //登出
    async userLogout(context, data) {
      let result = await reqLogout();
      if (result.status == 200) {
        Message({
          type: 'success',
          text: '退出成功！',
          offsetTop: 30,
          duration: 1500
        })
        context.commit("CLEAR");
        router.push('/login')
        return 'ok';
      } else {
        return Promise.reject(new Error('faile'));
      }
    }
  },
  getters: {
    isLogin(state) {
      let bool = false
      if (state.token == '' || state.token == null) {
        bool = false
      } else {
        bool = true
      }
      
      return bool
    }
  }
}
export default user
