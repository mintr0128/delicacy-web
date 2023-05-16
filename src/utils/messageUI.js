// 使用createVnode 函数和render函数
import { createVNode, render } from 'vue'
// 导入消息组件
import rmessage from '../library/components/r-message'
// 准备一个dom容器 等待节点渲染进去
const div = document.createElement('div')
// 设置容器的类名
div.setAttribute('class', 'r-message-container')
// 把节点放到body中
document.body.appendChild(div)
// 消息提示函数
// let final = null
// let thatfin = final
// final = Date.now();
// if (Date.now() - thatfin <= duration) {
//   if (final == null) {
//     return
//   }
// }
function getMessagess() {
  return new Promise((resolve, reject) => {
    resolve(div.children)
  })
}
const message = ({ type, text, offsetTop, duration = 3500 }) => {
  let isDeleteMessagess = true
  let offsetToparr = [170, 120, 70, 20]
  const messagess = document.createElement('div')
  messagess.setAttribute('class', 'r-message-content')
  document.querySelector('.r-message-container').appendChild(messagess)
  if (div.children.length > 3) {
    div.removeChild(div.firstElementChild)
    isDeleteMessagess = false
  }

  if (div.children.length == 1) {
    offsetTop = offsetToparr[0]
  } else if (div.children.length == 2) {
    offsetTop = offsetToparr[1]
  } else {
    offsetTop = offsetToparr[2]
  }
  getMessagess().then(e => {
    if (e.length >= 2) {
      if (e[0].children[0].style.top) {
        e[0].children[0].style.top = `${offsetToparr[0]}px`
      }
      if (e[1].children[0].style.top) {
        e[1].children[0].style.top = `${offsetToparr[1]}px`
      }
    }
  })
  // 计时器
  let timer = null
  // 根据组件创建一个虚拟节点
  const vNode = createVNode(rmessage, { type, text, offsetTop })
  // 把虚拟节点 渲染到指定的容器中
  render(vNode, messagess)
  // 清除定时器
  clearTimeout(timer)
  // 多少秒关闭
  timer = setTimeout(() => {
    render(null, messagess)
    if (isDeleteMessagess) {
      div.removeChild(div.firstElementChild)
    }
  }, duration)
}

export default message
