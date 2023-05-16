// vue-router
import { createRouter, createWebHashHistory } from 'vue-router'
// vuex
import store from '@/store'
// lanyout组件
const layout = () => import('@/views/layout')
// home组件
const index = () => import('@/views/home/index')
// category组件
const category = () => import('@/views/category')
// 二级分类页面
const subcategory = () => import('@/views/category/sub')
// 商品详情页面
const goodsDetail = () => import('@/views/goods')
// 购物车页面
const cartpage = () => import('@/views/cart')
// 登录页面
const loginpage = () => import('@/views/login')
// 协议页面
const agreement = () => import('@/views/agreement')
// 订单确认页面
const checkorder = () => import('@/views/checkorder')
// 支付页面
const pay = () => import('@/views/pay')
// 我的界面
const member = () => import('@/views/member')

// 我的界面子页面
const info = () => import('@/views/member/info')
// 我的界面订单界面

// 我的界面订单详情页面
const orderdetail = () => import('@/views/member/detail')


const userDetail = () => import('@/views/member/userDetail')
const usermange = () =>import('@/views/member/usermange')
const usetcomments = () => import('@/views/member/usetcomments')

const order = () => import('@/views/member/order')
const uploadfood = () =>import('@/views/member/uploadfood')
const uploadmethod = () =>import('@/views/member/uploadmethod')
// 404页面 没有找到该页面
const notpage = () => import('@/views/notpage')
// 测试页面
const testpage = () => import('@/views/testpage')
const register = () => import('@/views/register')

const food = () => import('@/views/Foodinfo')
const insfooddetail = () => import('@/views/Insfooddetail')
const searchFood = () => import('@/views/SearchFood')
// 路由规则
const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children: [
      // 首页
      { path: '/', name: 'index', component: index, meta: { title: '美食天下' } },
      // 分类页面
      { path: '/category/:id', name: 'category', component: category, meta: { title: '加载中...' } },
      // 二级分类页面
      { path: '/category/sub/:id', name: 'subcategory', component: subcategory, meta: { title: '加载中...' } },
      // 商品详情页面
      { path: '/goodsdetail/:id', name: 'goodsdetail', component: goodsDetail, meta: { title: '加载中...' } },
      // 购物车界面
      { path: '/cart', name: 'cartpage', component: cartpage, meta: { title: '购物车' } },
      // 订单确认页面
      { path: '/checkorder', name: 'checkorder', component: checkorder, meta: { title: '订单确认页面' } },
      // 支付页面
      { path: '/pay/:id', name: 'pay', component: pay, meta: { title: '订单支付' } },
      { path: '/food/:id', name: 'food', component: food, meta: { title: "食物详情" } },
      { path: '/searchFood', name: 'searchFood', component: searchFood, meta: { title: "搜索食物" } },
      // 我的界面
      {
        path: '/member',
        name: 'member',
        component: member,
        meta: { title: '我的' },
        redirect: '/member/info',
        children: [
          { path: 'info', name: 'info', component: info, meta: { title: '我的信息' } },
          { path: 'order', name: 'order', component: order, meta: { title: '美食详情' } },
          { path: 'uploadfood', name: 'uploadfood', component: uploadfood, meta: { title: '上传食谱' } },
          { path: 'uploadmethod', name: 'uploadmethod', component: uploadmethod, meta: { title: '上传工艺' } },
          { path: 'userDetail', name: 'userDetail', component: userDetail, meta: { title: '用户详情' } },
          { path: 'usermange', name: 'usermange', component: usermange, meta: { title: '用户管理' } },
          { path: 'usetcomments', name: 'usetcomments', component: usetcomments, meta: { title: '用户详情' } },
          { path: 'orderdetail/:id', name: 'orderdetail', component: orderdetail, meta: { title: '留言管理' } }
        ]
      },
      // 协议页面
      { path: '/agreement', name: 'agreement', component: agreement, meta: { title: '美食天下-协议' } }
    ]
  },
  // 登录界面
  { path: '/login', name: 'loginpage', component: loginpage, meta: { title: '欢迎登录' } },
  // 测试页面
  { path: '/testpage', name: 'testpage', component: testpage, meta: { title: '测试页面' } },
  //插入多张食物页面
  { path: '/insfooddetail', name: "insfooddetail", component: insfooddetail, meta: { title: '插入多张食物页面' } },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {
      title: '欢迎注册'
    }
  },
  // 404页面
  { path: '/:pathMatch(.*)*', name: 'notpage', component: notpage, meta: { title: '没找到该页面' } }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 给页面设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 判断是否已经登录 如果用户已经登录 再次进入登录页面 直接返回
  // 获取token
  const token = store.state.user.profile.token
  if (token) {
    if (to.path === '/login') {
      next('/')
    }
  }
  next()
})

export default router
