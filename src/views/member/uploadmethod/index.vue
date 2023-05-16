<template>
  <div class="order-page">
    <div class="my-history">
      <div class="r-row-item-component">
        <!--标题区域-->
        <div class="row-head">
          <p>工艺上传</p>
        </div>
        <!--商品列表区域-->
        <div class="row-body">
          <div class="product-list">
            <div class="testpage">
              <div class="bg">
                <div class="main">
                  <div class="continer">
                    <div>
                      <form class="lists">
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>食物名称：</label>
                          <!-- <input class="ant-input ml-3" type="text" v-model="formData.namedetail"> -->
                          <select v-model="formData.namedetail" class="ant-input ml-3" required
                            @change="changenamedetail($event)">
                            <option v-for="item, index in Insfoodmethodlist" :key="index" :value="item.name"> {{ item.name
                            }}
                            </option>
                          </select>
                        </div>
                        <div class="inpc">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span> 食物详情：(请用*隔开)</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.detail">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>用户id(u_id)：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.u_id">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>分类食物id(g_id)：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.f_id">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>点赞数：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.like">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>收藏数：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.collect">
                        </div>
                        <div class="inpc" style="display: none;">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>评论数：</label>
                          <input class="ant-input ml-3" type="text" v-model="formData.comment">
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>上传图片：</label>
                          <input class="ant-input ml-3" type="file" multiple @change="onchanges($event)">
                        </div>
                        <div class="inpc">
                          <label for="" class=" w-40 mt-2 mb-2"><span class="text-red-500">*</span>上传图片(id)：</label>
                          <input readonly="readonly" class="ant-input ml-3" type="text" v-model="formData.picture">
                        </div>
                        <!-- <div class="" style="width: 45%">
                  <img :src="picData.path">
                </div> -->
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
import { ref, onMounted, reactive, } from 'vue'
import rbutton from '@/library/components/r-button'
import { useStore } from 'vuex'
import { reqCanInsertFoodMethod } from '@/api/user'
// 消息提示
import Message from '@/utils/messageUI'
import { reqInsFoodDeatilpic, reqInsFoodDeatils } from '@/api/food'
export default {
  name: 'uploadmethod',
  setup() {
    onMounted(() => {
      getCanInsfoodmethod()
    })
    const store = useStore()
    const getCanInsfoodmethod = async () => {
      let res = await reqCanInsertFoodMethod()
      if (res.status == 200) {
        res.results.forEach(v => {
          Insfoodmethodlist.push(v)
        })
      }
    }
    const Insfoodmethodlist = reactive([])
    const formData = reactive({
      namedetail: "",
      picture: "",
      detail: "",
      u_id: "null",
      f_id: null,
      like: "0",
      collect: '0',
      comment: "null",
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
      formData.u_id = store.state.user.profile.id
      formData.like = 0
      formData.collect = 0
      formData.comment = null
      if (formData.namedetail == '' || formData.detail == '' || formData.picture == '') {
        Message({
          type: "error",
          text: '输入不完整'
        })
        return
      }

      let res = await reqInsFoodDeatils(formData)
      if (res.status == 200) {
        Message({
          type: "success",
          text: res.message
        })
        formData.namedetail = ''
        formData.detail = ''
        formData.f_id = ''

      } else {
        Message({
          type: "error",
          text: res.message
        })
      }
    }

    const onchanges = async (event) => {
      const file = event.target.files
      let fd = new FormData()
      Array.from(file).forEach(element => {
        fd.append('picture', element)
      });
      fd.append('picture', file)
      let res = await reqInsFoodDeatilpic(fd)
      const { data } = res
      if (res.status === 200) {
        let strPath = ''
        data.forEach((item, index) => {
          index != data.length - 1 ? strPath += item.path + '*' : strPath += item.path
        })
        formData.picture = strPath
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
    const changenamedetail = (e) => {
      Insfoodmethodlist.forEach(v => {
        if (v.name == e.target.value) {
          formData.f_id = v.id
        }
      })
    }
    return {
      formData,
      insertFood,
      picData,
      onchanges,
      picId,
      Insfoodmethodlist,
      changenamedetail
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
