<template>
  <div class="r-menu-component">
    <div class="r-menu-item">
      <div class="r-menu-title">个人中心</div>
      <ul>
        <li>
          <RouterLink to="/member/info" exact-active-class="menuActive">个人中心</RouterLink>
        </li>
        <!-- <li>个人信息</li>
        <li>安全设置</li>
        <li>地址管理</li>
        <li>我的积分</li> -->
      </ul>
    </div>
    <div class="r-menu-item" v-if="isAdmin">
      <div class="r-menu-title">美食管理</div>
      <ul>
        <li>
          <RouterLink to="/member/order" exact-active-class="menuActive">美食详情</RouterLink>
        </li>
        <li>
          <RouterLink to="/member/uploadfood" exact-active-class="menuActive">上传食谱</RouterLink>
        </li>
        <li>
          <RouterLink to="/member/uploadmethod" exact-active-class="menuActive">上传工艺</RouterLink>
        </li>
      </ul>
    </div>
    <div class="r-menu-item" v-if="isAdmin">
      <div class="r-menu-title">用户管理</div>
      <ul>
        <li>
          <RouterLink to="/member/userDetail" exact-active-class="menuActive">用户详情</RouterLink>
        </li>
        <!-- <li>
          <RouterLink to="/member/usermange" exact-active-class="menuActive">用户管理</RouterLink>
        </li> -->
        <li>
          <RouterLink to="/member/usetcomments" exact-active-class="menuActive">留言管理</RouterLink>
        </li>
      </ul>
    </div>
    <!-- <div class="r-menu-item">
      <div class="r-menu-title">帮助中心</div>
      <ul>
        <li>帮助中心</li>
        <li>在线客服</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { computed, reactive, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'rmenu',
  setup() {
    const store = useStore()
    const isAdmin = computed(() => {
      return store.state.user.profile.id == 1?true:false

    })
    onMounted(()=>{
      console.log(isAdmin.value);
    })
    return {
      isAdmin
    }
  }
}
</script>

<style scoped lang="scss">
.r-menu-component {
  width: 248px;
  background-color: #fff;
  border-radius: $borderRadius;
  box-sizing: border-box;
  padding: 20px;

  .r-menu-item {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 20px;
    margin-bottom: 30px;

    .r-menu-title {
      font-size: 16px;
      font-weight: bold;
      position: relative;
      padding-left: 10px;

      &:after {
        content: '';
        display: inline-block;
        width: 3px;
        height: 20px;
        background-color: $txColor;
        position: absolute;
        left: 0;
        border-radius: 5px;
      }
    }

    ul {
      margin-top: 20px;

      li {
        width: 100%;
        border-radius: 6px;
        display: flex;
        padding: 10px 0px;
        box-sizing: border-box;
        align-items: center;
        color: #333;
        transition: all .3s;
        cursor: pointer;

        a {
          display: block;
          width: 100%;
          transition: all .3s;

          &.menuActive {
            display: block;
            border-radius: 6px;
            padding: 10px;
            width: 100%;
            height: 100%;
            background-color: $txColor;
            color: #fff;
            font-weight: bold;
          }

          &:hover {
            display: block;
            border-radius: 6px;
            padding: 10px;
            width: 100%;
            height: 100%;
            background-color: $txColor;
            color: #fff;
            font-weight: bold;
          }
        }

      }
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
