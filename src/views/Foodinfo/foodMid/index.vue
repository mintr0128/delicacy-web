<template>
  <div class="foodinfo-mid">
    <div class="mid-cont">
      <h1 class="mb-4 h-12 text-3xl mt-4">{{ foodDeatil.namedetail }}</h1>
      <div v-for="item, index in detailList " :key="index" class="mid-step flex mb-12">
        <div class="w-1/12  h-32  rounded-xl mr-12 bg-yellow-300 mid-step-num">
          <strong>步骤</strong>
          <em>step</em>
          <p>{{ index + 1 }}</p>
        </div>
        <div class="w-5/6  rounded-xl  mid-step-cont">
          <!-- <img v-lazy="item.picture" alt=""> -->
          <img class="rounded-xl overflow-hidden" v-lazy="item.picture" alt="">
          <p>{{ item.detail }}</p>
        </div>
      </div>


    </div>
  </div>
</template>

<script >
import { reqgetFooddetail } from '@/api/food'
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import Bus from '@/utils/bus'
import Message from '@/utils/messageUI'
export default {
  name: 'foodMid',
  setup(props) {
    const route = useRoute()
    const foodDeatil = reactive({
      id: null,
      namedetail: "",
      detail: [],
      picture: [],
      isequPicDetLength: null,
      like: null,
      collect: null
    })
    const detailList = reactive([])
    onMounted(async () => {
      let res = await reqgetFooddetail({ f_id: route.params.id })
      if (res.status == 400) {
        Message({
          type: "error",
          text: res.message
        })
        return
      }
      const { result: { id, namedetail, detail, picture, isequPicDetLength, like, collect } } = res
      if (res.status == 200) {
        foodDeatil.id = id,
          foodDeatil.namedetail = namedetail
        foodDeatil.detail = detail
        foodDeatil.picture = picture
        foodDeatil.isequPicDetLength = isequPicDetLength
        foodDeatil.like = like
        foodDeatil.collect = collect
        picture.forEach((item1, index1) => {
          detail.forEach((item2, index2) => {
            if (index1 == index2) {
              detailList.push({
                picture: item1,
                detail: item2
              })
            }
          })
        })
        sendmsg(like, collect)
      }

    })
    //自定义事件
    function sendmsg(like, collect) {
      Bus.$emit('changeMsg', {
        like,
        collect
      })
    }

    return {
      foodDeatil,
      detailList,
      sendmsg
    }

  }
}
</script>
<style  scoped lang="scss">
.foodinfo-mid {
  padding-bottom: 43px;
  border-radius: 8px;

  .mid-cont {
    background-color: #fff;
    padding: 20px 20px 10px 20px;
    border-radius: 8px;
    box-sizing: border-box;

    .mid-step {
      position: relative;
      min-height: 128px;

      .mid-step-num {
        border-radius: 16px;
        border-bottom-right-radius: 2px;

        strong {
          font-size: 20px;
          text-align: right;
          color: #000;
          font-weight: 600;
          line-height: 22px;
          margin-top: 17px;
          display: block;
          padding-right: 20px;
        }

        em {
          font-size: 12px;
          text-align: right;
          color: #000;
          font-weight: 600;
          line-height: 14px;
          display: block;
          padding-right: 20px;
        }

        p {
          font-size: 36px;
          text-align: right;
          color: #000;
          font-weight: 600;
          line-height: 70px;
          display: block;
          padding-right: 20px;
        }
      }

      .mid-step-cont {
        img {
          border-radius: 4px;
          display: block;
          width: 60%;
          margin-bottom: 15px;
        }

        p {
          width: 70%;
          font-size: 18px;
          color: #222;
          line-height: 28px;
          font-weight: 600;
          padding: 2px 0px 20px 0px;
        }
      }
    }
  }
}
</style>
