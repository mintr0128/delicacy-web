import ajax from '@/utils/request'
const commUrl = '/limit/userinfo'

//用户评论
export const reqInsComment = data =>{
    return ajax({
        url:`${commUrl}/insComment`,
        method: 'post',
        data: data
    })
  }