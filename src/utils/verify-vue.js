export default {
  // 验证账号 函数
  account (value) {
    if (!value) return '请输入用户名！'
    return true
  },
  // 验证密码
  password (value) {
    if (!value) return '请输入密码！'
    return true
  },
  // 验证用户是否选中协议
  agreement (value) {
    if (!value) return '请选择用户协议！'
    return true
  },
  //邮箱
  email(value){
    let reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
    if (!value) return '请输入邮箱！'
    if(!reg.test(value)) return '请输入正确的邮箱'
    return true
  }
}
