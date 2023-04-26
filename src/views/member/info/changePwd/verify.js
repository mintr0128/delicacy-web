export default {
 
  oldPwd(value) {
    if (!value) return '请输入旧密码'
    return true
  },
  newPwd(value) {
    if (!value) return '请输入新密码'
    return true
  }
}
