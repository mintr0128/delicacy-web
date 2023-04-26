import ajax from '@/utils/request'

// // 用户登录接口
// export function userlogin (params) {
//   return request('/login', 'POST', params)
// }

//注册账号
export const reqRegisterUser = (data) => {
  return ajax({
    url: '/unlimit/user/reguser',
    method: 'post',
    data: data
  })
}
//登录
export const reqLoginUser = (data) => {
  return ajax({
    url: "/unlimit/user/login",
    method: 'post',
    data: data
  })
}
//获取用户信息
export const reqGetUserInFO = () => {
  return ajax({
    url: '/limit/userinfo/getuserinfo '
  })
}

//登出
export const reqLogout = () => ajax.get('/limit/userinfo/logout')

//食物点赞
export const reqInsFoodlike = data => ajax({
  url: '/limit/userinfo/insFoodlike',
  method: 'post',
  data: data
})
//收藏
export const reqInsFoodCollect = data => ajax({
  url: '/limit/userinfo/insFoodCollect',
  method: 'post',
  data: data
})

//修改密码
export const  updateUserPassword = data => ajax({
  url: '/limit/userinfo/updateUserPassword',
  method: 'post',
  data: data
})

//上传user图片
export const reqInsUserPic = data => ajax({
  url: '/limit/userinfo/insUserPic',
  method: 'post',
  data: data
})
