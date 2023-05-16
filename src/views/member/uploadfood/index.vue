<template>
  <div class="order-page">
    <div class="my-history">
      <div class="r-row-item-component">
        <!--标题区域-->
        <div class="row-head">
          <p>食谱上传</p>
        </div>
        <!--商品列表区域-->
        <div class="row-body">
          <div class="product-list">
            <div class="testpage">
              <div class="bg">
                <div class="main">
                  <div class="continer">
                    <div>
                      <form ref="formValRef" class="lists">
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>食物名称：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.name">
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>食物描述：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.describe">
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>主料：(请用顿号分隔)</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.zhuliao">
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>辅料：(请用顿号分隔)</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.fuliao">
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>口味：</label>
                          <!-- <input class="ant-input ml-3" type="text" v-model="formData.taste"> -->
                          <select v-model="formData.taste" class="ant-input ml-3" required>
                            <option value="原味">原味</option>
                            <option value="鲜咸">鲜咸</option>
                            <option value="咸味">咸味</option>
                            <option value="甜味">甜味</option>
                            <option value="微辣">微辣</option>
                            <option value="清淡">清淡</option>
                            <option value="咸香">咸香</option>
                            <option value="奶香">奶香</option>
                            <option value="微辣">微辣</option>
                            <option value="麻辣">麻辣</option>
                            <option value="其他">其他</option>
                          </select>
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>花费时间：</label>
                          <!-- <input class="ant-input ml-3" type="text" v-model="formData.spendtime"> -->
                          <select v-model="formData.spendtime" class="ant-input ml-3" required>
                            <option value="15m">15min</option>
                            <option value="30m">30min</option>
                            <option value="45m">45min</option>
                            <option value="60m">60min</option>
                          </select>
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>制作难度：</label>
                          <!-- <input class="ant-input ml-3" type="text" v-model="formData.diffcu"> -->
                          <select v-model="formData.diffcu" class="ant-input ml-3" required>
                            <option value="简单">简单</option>
                            <option value="一般">一般</option>
                            <option value="困难">困难</option>
                          </select>
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>分类：</label>
                          <div class="flex">
                            <select v-model="formauth.auth1" class="ant-input ml-3" required style="margin-right: 1rem;">
                              <option v-for="item, index in secMeun" :key="index" :value="item.name"> {{ item.name }}
                              </option>
                            </select>
                            <select v-model="formauth.auth2" class="ant-input ml-3" required>
                              <option v-for="item, index in secMeun" :key="index" :value="item.name"> {{ item.name }}
                              </option>
                            </select>
                            <!-- <input class="ant-input ml-3 h-full " type="text" v-model="formData.auth"
                              style="margin-right: 1rem;">
                            <input class="ant-input ml-3 h-full" type="text" v-model="formData.auth"> -->
                          </div>
                        </div>
                        <div class="inpc " style="display: none;">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>关联id(f_id)：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.f_id">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>分类关联id(g_id)：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.g_id">
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>上传图片：</label>
                          <input class="ant-input ml-3" type="file" @change="onchanges($event)">
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>上传图片(id)：</label>
                          <input readonly="readonly"  class="ant-input ml-3" type="text" v-model="formData.picture">
                        </div>
                        <div class="" style="width: 45%">
                          <img :src="picData.path">
                        </div>
                      </form>
                      <rbutton class="btn" @click="insertFood">提交</rbutton>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, reactive, computed } from 'vue'

import rbutton from '@/library/components/r-button'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { reqInsFoodinfo, reqInsFoodpic } from '@/api/food'
import { reqGetAdminFoodClassify } from '@/api/user'
// 消息提示
import confirm from '@/utils/confirmUI'
import Message from '@/utils/messageUI'
export default {
  name: 'uploadfood',
  setup() {
    onMounted(() => {
      getsecMeun()
    })
    let secMeun = reactive([])
    let formauth = reactive({
      auth1: "",
      auth2: "",
    })
    const formdom = ref('formValRef')
    const getsecMeun = async () => {
      let menures = await reqGetAdminFoodClassify()
      if (menures.status == 200) {
        menures.results.forEach(v => {
          secMeun.push({
            id: v.id,
            name: v.name,
          })
        })
      }
    }
    const formData = reactive({
      name: "",
      describe: "",
      zhuliao: "",
      fuliao: "",
      taste: "",
      spendtime: "",
      diffcu: "",
      auth: "",
      f_id: "",
      g_id: "",
      picture: "",

    })

    let picData = reactive({
      fieldname: "",
      originalname: "",
      mimetype: "",
      path: "",
      size: null
    })
    let picId = ref(null)


    const regData = (formData) => {
      let res = { ...formData }
      let flag = true
      for (const i of Object.keys(res)) {
        if (res[i] === '') {
          flag = false;
          break
        }
      }
      return flag
    }
    const insertFood = async () => {
      if (regData(formData)) {
        let res = await reqInsFoodinfo(formData)
        if (res.status === 200) {
          Message({
            type: "success",
            text: res.message
          })
          formData.auth = ''
          formData.name = ""
          formData.describe = ""
          formData.zhuliao = ""
          formData.fuliao = ""
          formData.taste = ""
          formData.spendtime = ""
          formData.diffcu = ""
          formData.auth = ""
          formData.f_id = ""
          formData.g_id = ""
          formData.picture = ""

          formauth.auth1 = ''
          formauth.auth2 = ''
          picData.fieldname = '';
          picData.originalname = '';
          picData.mimetype = ''
          picData.path = '';
          picData.size = ''
        } else {
          Message({
            type: "error",
            text: res.message
          })
          formData.auth = ''
          formData.name = ""
          formData.describe = ""
          formData.zhuliao = ""
          formData.fuliao = ""
          formData.taste = ""
          formData.spendtime = ""
          formData.diffcu = ""
          formData.auth = ""
          formData.f_id = ""
          formData.g_id = ""
          formData.picture = ""
          formauth.auth1 = ''
          formauth.auth2 = ''
          picData.fieldname = '';
          picData.originalname = '';
          picData.mimetype = ''
          picData.path = '';
          picData.size = ''
        }
      } else {
        Message({
          type: "error",
          text: '输入不正确，请完善！'
        })
      }
    }
    const onchanges = async (event) => {
      const file = event.target.files[0]
      let fd = new FormData()
      fd.append('picture', file)
      fd.append('id', picId.value)
      let res = await reqInsFoodpic(fd)
      const { fieldname, originalname, mimetype, path, size } = res.data
      if (res.status === 200) {
        picData.fieldname = fieldname;
        picData.originalname = originalname;
        picData.mimetype = mimetype
        picData.path = path;
        picData.size = size
        formData.picture = path
        Message({
          type: "success",
          text: res.message
        })

      } else {
        Message({
          type: "error",
          text: res.message
        })
      }

    }
    watch(() => [formauth.auth1, formauth.auth2], (newval) => {
      let bool = true
      for (const key in newval) {
        if (newval[key] == '' || newval == null) {
          bool = false
          break
        }
      }
      if (newval[0] == newval[1]) {
        bool = false
      }
      if (bool) {
        secMeun.forEach(v => {
          if (v.name == newval[0]) {
            formData.f_id = v.id.toString()
          }
          if (v.name == newval[1]) {
            formData.g_id = v.id.toString()
          }
        })
        formData.auth = newval[0] + '、' + newval[1]
      }

    })
    return {
      formData,
      insertFood,
      picData,
      onchanges,
      picId,
      getsecMeun,
      secMeun,
      formauth,
      formdom
    }
  },
  components: {
    rbutton,
  }
}
</script>

<style scoped lang="scss">
.order-page {
  width: 100%;
  background-color: #fff;
  border-radius: $borderRadius;
  overflow: hidden;

  .order-content {
    padding: 18px;
    box-sizing: border-box;

    .order-pagination {
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loading {
      height: 600px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: #999;
      }
    }
  }
}

.r-row-item-component {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;

  .row-head {
    width: 100%;
    padding: 10px 0 15px 0;

    p {
      font-size: 18px;
      font-weight: bold;
      line-height: 40px;
    }

    border-bottom: 1px solid #f5f5f5;
  }

  .row-body {
    margin-top: 20px;
  }
}

.my-collect,
.my-history {

  border-radius: $borderRadius;
  // overflow: hidden;

  .myhistory-list {
    display: flex;
    align-items: center;

    .hitstory-item {
      margin-right: 30px;
      cursor: pointer;
      width: 160px;
      height: 160px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;

      .item-content {
        bottom: -160px;
        border-radius: 10px;
        position: absolute;
        width: 160px;
        height: 160px;
        color: #fff;
        padding: 10px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.3);
        transition: all .3s;
      }

      &:hover {
        .item-content {
          bottom: 0;
        }
      }

      img {
        width: 100%;
      }
    }
  }
}

.bg {
  background: rgba(245, 245, 245);
  width: 100%;
  height: 100%;

  .main {
    height: 100%;


    .continer {
      background-color: #fff;
      width: 100%;
      height: 100%;

      .lists {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        form {
          width: 100%;
        }

        .inpc {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          height: 65px;
          width: 45%;
          margin: 8px 16px;

          input {
            height: 36px;
            width: 100%;
          }

          select {
            height: 36px;
            width: 100%;
          }
        }
      }
    }

  }
}

.btn {
  margin: 8px 16px;
}
</style>
