<template>
  <div class="info-page">
    <!--顶部用户信息-->
    <div class="top-info">
      <div class="left-user-avatar">
        <img :src="userpic" alt="">
        <div class="welcome-text">
          <h3>你好! {{ userProfile.nickname }}</h3>
          <p>欢迎来到美食天下！</p>
        </div>
      </div>
      <div class="right-user-select">
        <ul>
          <li @click="showAddressdialog = true">
            <i class="iconfont icon-huiyuan"></i>
            <p>更改密码</p>
          </li>
          <!-- <li >
            <i class="iconfont icon-shezhi"></i>
            <p>会员中心</p>
          </li>
          <li >
            <i class="iconfont icon-dizhi1"></i>
            <p>会员中心</p>
          </li> -->
        </ul>
      </div>
    </div>
    <!--我的收藏数据-->
    <div class="my-collect">
      <myCenter title="个人信息" :profile="profile"></myCenter>
      <!-- <rowitme  :data-list="hotProduct" ></rowitme> -->
    </div>
    <!--我的点赞-->
    <mylikelist></mylikelist>
     <!--我的收藏-->
    <mycollect></mycollect>
    <!--我的评论-->
    <mycomment></mycomment>
    <changepwd v-model:visible="showAddressdialog" @addressSuccess="addressSuccess"> </changepwd>
  </div>
</template>

<script>
// veux
import { useStore } from 'vuex'
// vue
import { computed, onMounted, ref, reactive } from 'vue'
// 消息提示
import message from '@/utils/messageUI'
// 商品列表数据
import rowitme from '../component/r-rowitem'

// vuerouter
import { useRouter } from 'vue-router'
import changepwd from './changePwd/index.vue'
// 空值组件
import rempty from '@/components/r-empty'
import myCenter from './myCenter/index.vue'

import mylikelist from './mylikelist/index.vue'
import mycollect from './mycollect/index.vue'
import mycomment from './mycomment/index.vue'
export default {
  name: 'info',
  setup() {
    // vuex
    const store = useStore()
    // vue-router
    const router = useRouter()
    // 热销商品数据
    const hotProduct = ref([])
    // 我的足迹数据
    const myhistStory = ref([])
    // 获取vuex用户信息
    const userProfile = computed(() => {
      return store.state.user.profile
    })
    const showAddressdialog = ref(false)
    // 跳转页面
    const goPgae = () => {
      message({
        type: 'warn',
        text: '暂未开发！',
        offsetTop: 170
      })
    }
    const userpic = computed(() => {
      return store.state.user.profile.user_pic
    })
    onMounted(() => {
     // getLikeFood()
    })
    // 跳转链接
    const goUrl = (item) => {
      router.push('/goodsDetail/' + item.spu.id)
    }
    const profile = computed(() => {
      return store.state.user.profile
    })
    const addressSuccess = () => {
      //成功回调
    }
    return {
      userProfile,
      goPgae,
      hotProduct,
      myhistStory,
      goUrl,
      profile,
      showAddressdialog,
      addressSuccess,
      userpic,
    }
  },
  components: {
    rowitme,
    rempty,
    myCenter,
    changepwd,
    mylikelist,
    mycollect,
    mycomment
  }
}
</script>

<style scoped lang="scss">
.info-page {
  width: 100%;

  .top-info {
    border-radius: $borderRadius;
    width: 100%;
    height: 100px;
    background-color: $txColor;
    background-image: url("../../../assets/images/bglogo.png");
    background-size: 180px;
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-user-avatar {
      display: flex;
      align-items: center;
      height: 60px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        border: 2px solid #fff;
        margin-left: 10px;
      }

      .welcome-text {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        justify-content: space-between;
        color: #fff;

        h3 {
          margin-top: 5px;
        }

        p {
          margin-bottom: 5px;
        }
      }
    }

    .right-user-select {
      margin-right: 150px;

      ul {
        display: flex;
        align-items: center;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;

          p {
            font-size: 14px;
            color: #fff;
          }

          i {
            font-size: 28px;
            color: #fff;
          }
        }
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

    .product-list {
      //display: flex;
    }
  }
}

.my-collect,
.my-history {
  margin-top: 20px;
  border-radius: $borderRadius;
  overflow: hidden;

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
</style>
