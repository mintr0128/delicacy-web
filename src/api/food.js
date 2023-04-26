import ajax from '@/utils/request'
const headers = {
    'Content-Type': 'multipart/form-data;charset=utf-8'
}
const foodUrl = '/unlimit/food'
//插入食物信息接口
export const reqInsFoodinfo = (data) => {
    return ajax({
        url: '/unlimit/food/insFoodinfo',
        method: 'post',
        data: data
    })
}
//插入食物图片接口
export const reqInsFoodpic = (data) => {
    return ajax({
        url: "/unlimit/food/insFoodpic",
        method: 'post',
        data: data,

    })
}
  //获取swiper首页接口
export const reqGetFoodSwiper = ()=>{
    return ajax({
        url:'/unlimit/food/getFoodSwiper',
        method:'get'
    })
}
//获取 nav首页接口
export const reqGetFoodNav = ()=>{
    return ajax({
        url:"/unlimit/food/getFoodNav",
        method:"get"
    })
}

//首页推荐

export const reqGetProductData = ()=>{
    return ajax({
        url:`${foodUrl}/getProductData`,
        method:'get'
    })
}

export const reqGetHotBrandData = ()=>{
    return ajax({
        url:`${foodUrl}/getHotBrandData`,
        method:'get'
    })
}

export const reqGetFoodinfoData = (data)=>{
    return ajax({
        url:`${foodUrl}/getFoodinfoData`,
        method: 'post',
        data:data
    })
}

//插入多张食物图片
export const reqInsFoodDeatilpic = data =>{
    return ajax({
        url:`${foodUrl}/insFoodDeatilpic`,
        method: 'post',
        data:data
    })
}

//插入多张食物详情 
export const reqInsFoodDeatils = data =>{
    return ajax({
        url:`${foodUrl}/insFoodDeatils`,
        method: 'post',
        data:data
    })
}
//获取食物多张图片接口
export const reqgetFooddetail = data =>{
    return ajax({
        url:`${foodUrl}/getFooddetail`,
        method: 'post',
        data:data
    })
}

//获取食物评论
export const reqGetFoodcomment = data =>{
    return ajax({
        url:`${foodUrl}/gerFoodcomment`,
        method: 'post',
        data:data
    })
}

//获取食物搜索分类导航栏

export const reqGetFoodclassify = () =>{
    return ajax({
        url:`${foodUrl}/getFoodclassify`,
        method:'get'
    })
}

//获取食物不同分类二级菜单
export const reqSearchShowlist = data =>{
    return ajax({
        url:`${foodUrl}/getSearchShowlist`,
        method: 'post',
        data:data
    })
}

//用户搜索
export const reqUsersearchlist = data =>{
    return ajax({
        url:`${foodUrl}/getUsersearchlist`,
        method: 'post',
        data:data
    })
}

//点赞数量
export const reqGetLikenum = data =>{
    return ajax({
        url:`${foodUrl}/getLikenum`,
        method: 'post',
        data:data
    })
}

//收藏数量

export const reqGetCollectnum = data =>{
    return ajax({
        url:`${foodUrl}/getCollectnum`,
        method: 'post',
        data:data
    })
}



