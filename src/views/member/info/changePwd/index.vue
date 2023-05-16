<template>
  <div class="r-addAddressDialog-components">
    <rdialog width="42%" height="auto" v-model:visible="visible" title="修改密码" @close="closedialog" @confirm="confirm">
      <Form class="address-form" :validation-schema="addformVerify" autocomplete="off" ref="formCom">
        <ul>
          <li>
            <span>旧密码：</span>
            <Field type="text" placeholder="请输入旧密码" v-model.trim="formData.oldPwd" name="receiver"></Field>
          </li>
          <li>
            <span>新密码：</span>
            <Field type="text" placeholder="请输入新密码" v-model.trim="formData.newPwd" name="contact" maxlength="11"></Field>
          </li>

        </ul>
      </Form>
    </rdialog>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
// dialog 组件
import rdialog from '@/components/r-dialog/index.vue'
// api 接口
import { updateUserPassword } from '@/api/user'
// 验证组件
import { Form, Field } from 'vee-validate'
// 表单验证函数
import xmschema from './verify'
// vue
import { reactive, ref } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
export default {
  name: 'changePwd',
  setup(props, { emit }) {
    // 表单实例
    const formCom = ref(null)
    const router = useRouter()

    const closedialog = () => {
      console.log('关闭');
      // 清空表单数据
      clearFormData()
      // 自定义事件
      emit('update:visible', false)
    }
    // 表单验证
    const addformVerify = {
      oldPwd: xmschema.oldPwd,
      newPwd: xmschema.newPwd,

    }
    // 表单数据
    const formData = reactive({
      oldPwd: '',
      newPwd: '',
    })

    // 清空表单数据
    const clearFormData = () => {
      formData.oldPwd = ''
      formData.newPwd = ''
    }
    const confirm = async () => {
      // 登录之前验证表单 校验通过请求登录api接口
      const verify = await formCom.value.validate()
      if (!verify) {
        message({
          type: 'error',
          text: '信息还没填写完整！',
          offsetTop: 170
        })
        return
      }
      if (formData.newPwd == formData.oldPwd) {
        message({
          type: 'error',
          text: '新旧密码不能相同！',
          offsetTop: 170
        })
        return
      }
      // 请求接口

      //  await addAddressData(formData)

      let res = await updateUserPassword(formData)
      console.log(res);
      if (res.status == 200) {
        message({
          type: 'success',
          text: '密码修改成功！',
          offsetTop: 170
        })
        router.push('/login')
        return
      } else {
        message({
          type: 'error',
          text: res.message,
          offsetTop: 170
        })
      }
      emit('update:visible', false)
      // 清空表单数据
      clearFormData()


      emit('addressSuccess')
    }
    return {
      closedialog,
      addformVerify,
      formData,

      confirm,
      formCom,

    }
  },
  props: {
    // 是否显示对话框
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    rdialog,
    Form,
    Field
  }
}
</script>

<style scoped lang="scss">
.r-addAddressDialog-components {
  width: 100%;

  .address-form {
    padding: 30px;
    box-sizing: border-box;

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      li {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 20px 0;

        span {
          font-size: 16px;
          display: inline-block;
          width: 100px;
          text-align: right;
        }

        input {
          width: 100%;
          height: 40px;
          padding: 10px;
          box-sizing: border-box;
          border: 1px solid #e6e6e6;
          border-radius: 3px;
        }

        :deep {
          .r-selectcity-components {
            width: 100% !important;
          }

          .selectcity-box {
            margin-left: 0;
            border-radius: 0;
            height: 40px;
            justify-content: space-between;

            p {
              color: #d2d2d2 !important;
            }

            .full {
              color: #333 !important;
            }
          }

          .city-data-box {
            top: 50px;
            left: 0;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
