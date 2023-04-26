// 把一维数组分割成二维数组
export function sliceArr(arr, size) {
  // 判断是否为数组
  if (arr instanceof Array && arr.length > 0) {
    const sliceArr = []
    // 根据数组进行判断一共要分割出多少个二维数组 向上取整
    const total = Math.ceil(arr.length / size)
    for (let i = 0; i < total; i++) {
      sliceArr.push(arr.slice(i * size, (i + 1) * size))
    }
    return sliceArr
  } else {
    return []
  }
}

// 获取随机数 max-min
export function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}


//防抖 多次操作合并变成一次操作
export function debounce(fn, waittime = 1000) {
  let timeout = null;
  return args => {     //返回函数，args为函数的参数
    if (timeout)
      clearTimeout(timeout)
    timeout = setTimeout(fn, waittime);
  }
}


//节流  一定时间内只调用一次  提交表单、高频监听事件
export function throttle(fn, waittime = 1000) {
  let timer = null;
  return function () {
    let that = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.call(that, args)
        timer = null
      }, waittime)
    }
  }
}