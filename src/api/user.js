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
export const updateUserPassword = data => ajax({
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

export const reqGetLikeFood = () => ajax.get('/limit/userinfo/getLikeFood')

export const reqGetCollectFood = () => ajax.get('/limit/userinfo/getCollectFood')

export const reqGetuserComment = () => ajax.get('/limit/userinfo/getuserComment')

export const reqGetAdminallfood = () => ajax.get('/limit/userinfo/getAdminallfood')

export const reqDeleteAdminallfood = (data) => ajax({
  url: '/limit/userinfo/deleteAdminallfood',
  method: 'post',
  data: data
})

export const reqGetAdminalluser = () => ajax.get('/limit/userinfo/getAdminalluser')

export const reqDeleteAdminalluser = (data) => ajax({
  url: '/limit/userinfo/deleteAdminalluser',
  method: 'post',
  data: data
})

export const reqGetAdminallComment = () => ajax.get('/limit/userinfo/getAdminallComment')

export const reqDeleteAdminallComment = (data) => ajax({
  url: '/limit/userinfo/deleteAdminallComment',
  method: 'post',
  data: data
})


export const reqGetAdminFoodClassify = () => ajax.get('/limit/userinfo/getAdminFoodClassify')


export const reqCanInsertFoodMethod = () => ajax.get('/limit/userinfo/canInsertFoodMethod')


