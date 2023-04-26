

//二次封装axios
import axios from "axios";
//引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//当前模块引入 store
import store from '../store'
import Message from '@/utils/messageUI'
NProgress.configure({ showSpinner: false })
//1利用axios对象的create方法，创建axios实例
//2：request就是axios，对其配置
const service = axios.create({
    baseURL: "/api",// 基础路径
    timeout: 5000// 连接请求超时时间
})

//请求拦截器
service.interceptors.request.use((config)=>{
    //config：配置对象，对象有headers请求头
    if(store.state.user.token) {
        //console.log(store.state.user.token);
        config.headers.Authorization = store.state.user.token;
       
    }  
    NProgress.start()
    return config
})

//响应拦截器
service.interceptors.response.use((response)=>{
    //成功回调
    NProgress.done()
    return response.data
},(error)=>{
    NProgress.done()
    Message({
        type: 'error',
        text: `请求出错:${error.message||'未知错误'}`,
        offsetTop: 170
      })
   // alert(`请求出错:${error.message||'未知错误'}`)
    return Promise.reject(error)
})

//对外暴露
export default service;

