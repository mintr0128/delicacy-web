<template>
  <div class="login-page">
    <!--左侧区域-->
    <div class="login-left bg-blue-500">
      <div class="logo-area" @click="goHome">
        <span class=" text-white font-bold">去首页</span>
      </div>
      <!--标语区域-->
      <div class="login-slogan-area">
        <div class="inner-slogan">
          <!--多语言标识-->
          <div class="slogan-box">
            <div class="line-one" v-for="(item, index) in languageList" :key="index">{{ item }}</div>
          </div>
          <div class="line-two">美食天下你的健康管理助手！</div>
        </div>
      </div>
    </div>
    <!--右侧区域-->
    <div class="login-right">
      <div class="login-inner-form">
        <div class="weclome-slogan">
          <h3>欢迎</h3>
          <h3 class=" text-blue-400">注册</h3>
          <h3>,很高兴您来到这里</h3>
        </div>
        <!--表单区域-->
        <Form class="form-area" ref="formCom" :validation-schema="loginSchema" autocomplete="off" v-slot="{ errors }">
          <!--用户名-->
          <div class="username-area flex">
            <label class=" w-20 mt-2"><span class="text-red-500">*</span>用户名:</label>
            <div>
              <Field :class="[errors.account ? errorStyle : '']" class="ant-input ml-3 " type="text" placeholder="请输入用户名"
                v-model="formdata.account" name="account">
              </Field>
              <div class="error relative" v-if="errors.account">
                <span class="error-text text-red-500 absolute top-1">{{ errors.account }}</span>
              </div>
            </div>
          </div>
          <!--密码-->
          <div class="password-area flex mt-8">
            <label class=" w-20 mt-2"><span class="text-red-500">*</span>密码:</label>
            <div>
              <Field :class="[errors.password ? errorStyle : '']" class="ant-input ml-3"
                :type="!showpwd ? 'password' : 'text'" placeholder="请输入密码" v-model="formdata.password" name="password">
              </Field>
              <!--是否查看密码-->
              <div>
                <div class="checkpassword iconfont icon-biyanjing" @click="lookpwd" v-if="showpwd"></div>
                <div class="checkpassword iconfont icon-yanjing" @click="lookpwd" v-else></div>
              </div>
              <!--错误提示-->
              <div class="error relative" v-if="errors.password">
                <span class="error-text text-red-500 absolute top-1">{{ errors.password }}</span>
              </div>
            </div>

          </div>
          <!--邮箱-->
          <div class="emial flex mt-8">
            <label class=" w-20 mt-2"><span class="text-red-500">*</span>邮箱:</label>
            <div>
              <Field :class="[errors.email ? errorStyle : '']" class="ant-input ml-3 " type="text" placeholder="请输入邮箱"
                v-model="formdata.email" name="email">
              </Field>
              <div class="error relative" v-if="errors.email">
                <span class="error-text text-red-500 absolute top-1">{{ errors.email }}</span>
              </div>
            </div>
          </div>
          <div class="nickname flex mt-8">
            <label class=" w-20 mt-2"><span class="text-red-500"> &nbsp;</span>昵称:</label>
            <div>
              <Field  class="ant-input ml-3 " type="text" placeholder="请输入昵称"
                v-model="formdata.nickname" name="nickname">
              </Field>
            </div>
          </div>
          <!--登录按钮-->
          <div class="login-button ">
            <rbutton color="#3B82F6" :radius="40" @click="register" :disabled="loginloading" :loading="loginloading" loadingText="登录中...">
              注册</rbutton>
          </div>
          <!--是否同意协议-->
          <div class="agreement">
            <div class="agreement-checkbox">
              <Field class="bg-blue" v-model="formdata.agreement" color="#3B82F6" as="rcheckbox" name="agreement"></Field>
              <span>我已接受同意xxxx</span>
              <a href="javascript:;" class="agreement-link" @click="goAgreement">隐私条款</a>
            </div>
            <!--错误提示-->
            <div class="error" v-if="errors.agreement">
              <i class="iconfont icon-cuowu"></i>
              <span class="error-text">{{ errors.agreement }}</span>
            </div>
          </div>
          <div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
// 验证组件
import { Form, Field } from 'vee-validate'
// 表单验证函数
import xmschema from '@/utils/verify-vue'
// vue
import { computed, reactive, ref } from 'vue'
// vue-router
import { useRouter, useRoute } from 'vue-router'
// api 用户登录
import { userlogin } from '@/api/user'
// 导入消息提示组件
import Message from '@/utils/messageUI'
// vuex
import { useStore } from 'vuex'

import { reqRegisterUser } from '@/api/user'

export default {
  name: "register",
  setup() {
    // vue-router
    const router = useRouter()
    // vuex
    const store = useStore()
    // 当前路由对象
    const route = useRoute()
    // form表单组件
    const formCom = ref(null)
    // 是否显示密码
    const showpwd = ref(false)
    // 按钮加载状态
    const loginloading = ref(false)
    // 表单数据
    const formdata = reactive({
      // 用户名
      account: '',
      // 密码
      password: '',
      email: '',
      nickname:"",
      // 用户是否同意协议
      agreement: false
    })
    // 语言language
    const sloganLanguage = ref('您好！')
    // 语言列表数据
    const languageList = ref(['您好！', '안녕하세요！', 'こんにちは!', 'Hola!', 'Hello!', '歡迎你！', '您好！'])
    // 跳转到首页
    const goHome = () => {
      // 设置vuex 为分类数据的第一项数据
      store.commit('user/setUserActive', cateList.value[0].name)
      // 回到首页
      router.push('/')
    }
    // 获取导航分类数据
    const cateList = computed(() => {
      return store.state.category.cateList
    })

    // 用户点击登录按钮
    const register = async () => {

      // 登录之前验证表单 校验通过请求登录api接口
      const verify = await formCom.value.validate()
      if (!verify) return
      // 登录参数

      let userinfo = {
        username: formdata.account,
        password: formdata.password,
        email:formdata.email,
        nickname:formdata.nickname,
      }
      // 登录按钮loading加载
      loginloading.value = true
      // 登录
      try {

        console.log(userinfo);
        let res = await reqRegisterUser(userinfo)

        console.log(res);
        if (res.status == 200) {
          Message({
            type: 'success',
            text: res.message,
          })
          formdata.password=''
          formdata.account='',
          formdata.email='',
          formdata.nickname=''
          formdata.agreement=false
          router.push('/login')
        }


        loginloading.value = false
      } catch (e) {
        // 消息提示
        Message({
          type: 'error',
          text: '注册失败',
          duration: 3000
        })
        loginloading.value = false
      }
    }
    // 表单验证规则
    const loginSchema = {
      // 账号验证方式
      account: xmschema.account,
      // 密码验证方式
      password: xmschema.password,
      email: xmschema.email,
      // 用户协议验证方式 用户是否同意协议
      agreement: xmschema.agreement
    }
    // 用户点击显示密码
    const lookpwd = () => {
      showpwd.value = !showpwd.value
    }
    // 点击登录方式
    const gologinType = (type) => {
      Message({
        type: 'error',
        text: '客官此登录方式暂未开通┗|｀O′|┛ 嗷~~',
        duration: 3000
      })
    }
    // 跳转到协议页面
    const goAgreement = () => {
      router.push('/agreement')
    }
    const errorStyle = ref('error')
    return {
      // 随机语言
      sloganLanguage,
      // 用户电话回到首页
      goHome,
      // 用户点击登录按钮
      register,
      // 登录提交表单信息
      formdata,
      // 表单验证方式
      loginSchema,
      // form表单组件
      formCom,
      // 登录加载
      loginloading,
      // 是否显示密码
      showpwd,
      // 用户点击眼睛
      lookpwd,
      // 登录方式
      gologinType,
      // 跳转到协议
      goAgreement,
      // 语言list
      languageList,
      // 用户分类列表
      cateList,
      errorStyle
    }
  },
  components: {
    Form,
    Field
  }
}
</script>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  .login-left {
    width: 30%;
    height: 100vh;
    // background-color: $txColor;
    background-image: url("../../assets/images/bglogo.png");
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 400px;

    .logo-area {
      cursor: pointer;
      width: 80px;
      margin: 20px;

      &:hover {
        animation: shake .83s;
      }

      img {
        display: inline-block;
        width: 100%;
      }
    }

    .login-slogan-area {
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
      color: #fff;
      margin-top: 45%;
      height: 40px;

      .inner-slogan {
        margin: 0 auto;

        .slogan-box {
          width: 200px;
          height: 40px;
          overflow: hidden;
        }
      }

      .line-one {
        font-size: 28px;
        font-weight: bold;
        height: 40px;
        display: flex;
        align-items: center;
        animation: rowup 8s ease infinite;
        // 动画延迟时间
        animation-delay: 1.5s;
        animation-fill-mode: forwards;
        //row 是一行  column column 是纵向
      }

      .line-two {
        width: 300px;
        font-size: 35px;
        font-weight: bold;
        margin: 8px 0;
      }
    }
  }

  .login-right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .login-inner-form {
      margin-left: 150px;

      .weclome-slogan {
        display: flex;

        h3 {
          font-weight: normal;
          font-size: 29px;
          color: #333;

          &:nth-child(2) {
            color: $txBulecolor;
            margin: 0 10px;
          }
        }
      }

      .form-area {
        margin-top: 60px;

        input {
          width: 500px;
          height: 40px;
          //  border-bottom: 1px solid #c9c9c9;
          font-size: 15px;

          &::placeholder {
            color: #484848;
          }


        }

        .password-area {
          // width: 500px;

          position: relative;

          .iconfont {
            position: absolute;
            right: 360px;
            top: 10px;
            bottom: 4px;
            font-size: 16px;
            cursor: pointer;
          }
        }

        .login-button {
          margin-top: 50px;

          :deep {
            button {
              width: 500px;
              height: 42px;
              font-weight: bold;
              font-size: 15px;
            }
          }
        }

        .agreement {
          margin: 25px 0;
          display: flex;
          flex-direction: column;

          .agreement-checkbox {
            display: flex;
            align-items: center;

            .agreement-link {
              color: $txBulecolor;
              margin-left: 3px;
            }
          }

          .register {
            margin-top: 25px;
          }
        }

        .other-login-type {
          .title {
            font-size: 14px;
            color: #333;
          }

          ul {
            display: flex;
            align-items: center;
            margin-top: 20px;

            li {
              display: flex;
              align-items: center;
              margin-right: 20px;
              cursor: pointer;
              position: relative;
              transition: all .3s;

              .iconfont {
                font-size: 35px;
                color: #12b7f5;
              }

              &:last-child {
                img {
                  width: 28px;
                  height: 28px;
                }
              }

              img {
                width: 30px;
                height: 30px;
              }

              .hot-tag {
                background-color: $errorColor;
                color: #fff;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;
                font-size: 10px;
                padding: 1px 3px;
                position: absolute;
                right: -12px;
                top: -5px;
                animation: shake 2s infinite;
              }

              &:hover {
                transform: scale(1.2);
              }
            }
          }
        }

        .error {


          .iconfont {
            color: $warnColor;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
.bg-blue>.icon-duoxuan_xuanzhong{
  color: #3B82F6!important;
}
</style>







