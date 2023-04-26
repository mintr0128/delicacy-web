<template>
  <div class="testpage">
    <div class="bg">
      <div class="main">
        <div class="continer">
          <div>
            <form class="lists">
              <div class="inpc">
                <label>食物名称：</label>
                <input type="text" v-model="formData.name">
              </div>
              <div class="inpc">
                <label>食物描述：</label>
                <input type="text" v-model="formData.decs">
              </div>
              <div class="inpc">
                <label>主料：</label>
                <input type="text" v-model="formData.zhuliao">
              </div>
              <div class="inpc">
                <label>辅料：</label>
                <input type="text" v-model="formData.fuliao">
              </div>
              <div class="inpc">
                <label>口味：</label>
                <input type="text" v-model="formData.taste">
              </div>
              <div class="inpc">
                <label>花费时间：</label>
                <input type="text" v-model="formData.spendtime">
              </div>
              <div class="inpc">
                <label for="">制作难度：</label>
                <input type="text" v-model="formData.diffcu">
              </div>
              <div class="inpc">
                <label for="">分类：</label>
                <input type="text" v-model="formData.auth">
              </div>
              <div class="inpc">
                <label for="">关联id(f_id)：</label>
                <input type="text" v-model="formData.f_id">
              </div>
              <div class="inpc">
                <label for="">分类关联id(g_id)：</label>
                <input type="text" v-model="formData.g_id">
              </div>
              <div class="inpc">
                <label for="">上传图片：</label>
                <input type="file" @change="onchanges($event)">
              </div>
              <div class="inpc">
                <label for="">上传图片(id)：</label>
                <input type="text" v-model="formData.picture" >
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
</template>

<script>
import { reactive, onMounted, ref } from 'vue'
import rbutton from '@/library/components/r-button'
import Message from '@/utils/messageUI'
import { reqInsFoodinfo, reqInsFoodpic } from '@/api/food'


export default {
  name: "testpage",
  setup() {
    const formData = reactive({
      name: "",
      decs: "",
      zhuliao: "",
      fuliao: "",
      taste: "",
      spendtime: "",
      diffcu: "",
      auth: "",
      f_id: "",
      g_id: "",
      picture:"",
      
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
        console.log(formData);
        let res = await reqInsFoodinfo(formData)
        if (res.status === 200) {
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

    }
   
    const onchanges = async (event) => {
      const file = event.target.files[0]
      let fd = new FormData()
      fd.append('picture', file)
      fd.append('id',picId.value)
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
         
      }else{
        Message({
            type: "error",
            text: res.message
          })
      }
      
    }

    return {
      formData,
      insertFood,
      picData,
      onchanges,
      picId
    }
  },
  components: {
    rbutton,


  }
}
</script>

<style scoped lang="scss">
.bg {
  background: rgba(245, 245, 245);
  width: 100vw;
  height: 100vh;

  .main {
    width: 70%;
    height: 100%;
    margin: 0 auto;

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
            border: 1px solid #d9d9d9;
            width: 100%;
            height: 50%;
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
