<template>
  <div class="order-page">
    <div class="my-history">
      <div class="r-row-item-component">
        <!--标题区域-->
        <div class="row-head">
          <p>留言管理</p>
        </div>
        <!--商品列表区域-->
        <div class="row-body">
          <div class="product-list">
            <div class="ant-table">
              <div class="ant-table-container">
                <div class="ant-table-content">
                  <table style="table-layout: auto;">
                    <thead class="ant-table-thead">
                      <tr>
                        <th class="ant-table-cell">食物名称</th>
                        <th class="ant-table-cell">留言内容</th>
                        <th class="ant-table-cell">留言时间</th>
                        <th class="ant-table-cell">留言用户</th>
                        <th class="ant-table-cell">菜品图片</th>
                        <th class="ant-table-cell">操作</th>
                      </tr>
                    </thead>
                    <tbody class="ant-table-tbody">
                      <template v-if="showlikeFoodList.showlist.length != 0">
                        <tr v-for="item, index in showlikeFoodList.showlist" :key="index"
                          class="ant-table-row ant-table-row-level-0">
                          <td class="ant-table-cell">{{ item.names }}</td>
                          <td v-if="item.content" class="ant-table-cell">{{ item.content }}</td>
                          <td v-if="item.times" class="ant-table-cell">{{ item.times }}</td>
                          <td v-if="item.username" class="ant-table-cell">
                            {{ item.username }}
                          </td>
                          <td v-if="item.foodpicture" class="ant-table-cell">
                            <img :src="item.foodpicture" alt="" v-if="item.foodpicture"
                              class=" w-24 h-24 p-2 rounded-2xl">
                          </td>
                          <td class="ant-table-cell">
                            <rbutton @click="goDeatli(item.f_id, item.auth)" :height="35" :width="70" class="mb-2">去查看</rbutton>
                            <rbutton @click="deleteDeatli(item)" :height="35" :width="70" color="#ff4d4f">删除</rbutton>
                          </td>
                        </tr>
                      </template>
                      <template v-else>
                        <div class=" flex  justify-center">
                          <h1 class="mb-4 h-8 text-3xl mt-4 text-red-600">暂无数据！</h1>
                        </div>
                      </template>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
          <div class="comment-pagination flex justify-center mb-8 mt-8">
            <rpagination :total="finList.likeArrs.length" @currentpage="changepage" :currentPage="reqparmas.page"
              :pageSize="reqparmas.pageSize">
            </rpagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, reactive } from 'vue'
// tab组件
// import rtab from './component/r-tab'
// // 订单组件
// import orderitem from './component/r-orderitem'
// api
import { reqGetAdminallComment,reqDeleteAdminallComment } from "@/api/user"

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
// 消息提示
import confirm from '@/utils/confirmUI'
import message from '@/utils/messageUI'
export default {
  name: 'userDetail',
  setup() {
    onMounted(() => {
      getLikeFood()
    })
    const router = useRouter()
    const store = useStore()
    let showlikeFoodList = reactive({
      showlist: []
    })
    const getLikeFood = async () => {
      finList.likeArrs = []
      let res = await reqGetAdminallComment()
      if (res.status == 200) {
        if (Array.isArray(res.results)) {
          res.results.forEach(v => {
            finList.likeArrs.push(v)
          })
        }
      }
      showlikeFoodList.showlist = arrGroup(finList.likeArrs, reqparmas.pageSize)[0]
    }
    const reqparmas = reactive({
      // 当前页码
      page: 1,
      // 每页数量
      pageSize: 4,
      // 是否选择图片
      hasPicture: null,
      // 选择的标签
      tag: null,
      // 排序
      sortField: null,
    })
    // let likeArrs = reactive([])
    const finList = reactive({
      name: '',
      likeArrs: [],
    })
    const changepage = (v) => {
      showlikeFoodList.showlist = arrGroup(finList.likeArrs, reqparmas.pageSize)[v - 1]
      reqparmas.page = v
    }
    //数组切割  arr：数组 needGropL每一项的长度
    function arrGroup(arr, needGropL) {
      let resarr = []
      let index = 0
      while (index < arr.length) {
        resarr.push(arr.slice(index, index += needGropL))
      }
      return resarr
    }
    const goDeatli = (v, auth) => {
      store.commit('user/setUserActive', auth.split('、')[0])
      router.push({
        name: 'food',
        params: {
          id: v
        }
      })
    }

    const deleteDeatli = (v) => {
      confirm({
        type: 'warn',
        title: '温馨提示！',
        content: '确定删除该评论吗？',
      }).then(vs => {
        reqDeleteAdminallComment({
          id: v.id
        }).then(res => {
          if (res.status == 200) {
            message({
              type: 'success',
              text: '删除成功！',
              offsetTop: 170
            })
            getLikeFood()
          } else {
            message({
              type: 'warning',
              text: '删除失败！',
              offsetTop: 170
            })
          }
        })
      }).catch(vs => {
        // console.log('取消');
      })
    }
    return {
      getLikeFood,
      reqparmas,
      changepage,
      finList,
      showlikeFoodList,
      goDeatli,
      deleteDeatli
    }
  },
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

    .product-list {
      //display: flex;
    }
  }
}

.my-collect,
.my-history {

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
