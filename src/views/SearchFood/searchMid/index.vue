<template>
    <div class="home-innerproduct">
        <div v-if="secLists.resList.length != 0" class="home-partone">
            <div class="w-full">
                <div class="goods-list">
                    <ul class=" flex flex-wrap">
                        <li class=" w-1/5 mb-8 text-sm r-box-shadow rounded-lg p-3" v-for="item, index in finList.resList"
                            :key="item.id">
                            <div class=" flex items-center flex-col  ">
                                <div class="rounded-lg overflow-hidden " @click="goDetail(item.id)">
                                    <!-- <router-link :to="{
                                        name: 'detail',
                                        params: {
                                            detaid: goods.id
                                        }
                                    }">
                                        <img v-lazy="goods.defaultImg" />
                                    </router-link> -->
                                    <a href="javascript:;" >
                                        <img class="w-44 h-44" v-lazy="item.picture" alt="">
                                    </a>
                                </div>
                                <div class=" mt-2 mb-2  hov-green">
                                    <div>
                                        <span class="text-base text-green-500"> {{ item.name }}</span>
                                    </div>
                                </div>
                                <div class=" mb-2 text-green-500">
                                    <i class="">已有<span class="">{{ item.comml.length }}</span>条评价</i>
                                </div>
                                <div class=" flex justify-between w-full">
                                    <rbutton :width="70" :height="27" @click="goDetail(item.id)">查看</rbutton>
                                    <rbutton :width="70" :height="27" @click="sendCollect(item)"> 收藏</rbutton>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="comment-pagination flex justify-center mb-8 mt-8">
                <rpagination :total="secLists.resList.length" @currentpage="changepage" :currentPage="reqparmas.page"
                    :pageSize="reqparmas.pageSize">
                </rpagination>
            </div>
        </div>
        <div v-if="secLists.resList.length == 0" class="home-partone">
            <div class="home-partone  r-box-shadow mb-4">
                <h1 class="mb-4 h-12 text-3xl mt-4 text-red-600">暂无结果，请重新搜索！</h1>
            </div>
        </div>
    </div>
</template>

<script >
import { computed, watch, reactive, onMounted } from 'vue'
import { useStore, } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { throttle } from '@/utils/index'
import { v4 as uuidv4 } from 'uuid';
import {  reqInsFoodCollect } from '@/api/user'
import Message from '@/utils/messageUI'
export default {
    name: 'searchMid',
    setup(props) {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const secLists = computed(() => {
            return store.state.food.searchNavsec
        })
        const finList = reactive({
            name: '',
            resList: [],
        })
        const reqparmas = reactive({
            // 当前页码
            page: 1,
            // 每页数量
            pageSize: 10,
            // 是否选择图片
            hasPicture: null,
            // 选择的标签
            tag: null,
            // 排序
            sortField: null,
        })
        watch(() => secLists, (v) => {
            finList.name = v.value.name
            finList.resList = arrGroup(v.value.resList, reqparmas.pageSize)[0]
            
        }, {
            deep: true,
            immediate: true
        })
        const goDetail = (v) => {
            router.push({
                name: 'food',
                params: {
                    id: v
                }
            })
        }
        const userCollect = reactive({
            id: null,
            u_id: null,
            f_id: null,

            type: null,
            namedetail: '',
        })
        const sendCollect = throttle(async (data) => {
            if (!store.getters['user/isLogin']) {
                Message({
                    type: 'warn',
                    text: '请登录！',
                    offsetTop: 170
                })
                return
            }
            
            userCollect.namedetail = data.name
            userCollect.u_id = store.state.user.profile.id
            userCollect.id = uuidv4()
            userCollect.f_id = data.id
            userCollect.type = 1
            console.log(userCollect);
            let res = await reqInsFoodCollect(userCollect)
            if (res.status == 200) {
                let type = res.message == '收藏成功！' ? 'success' : 'warn'
                Message({
                    type: type,
                    text: res.message,
                    offsetTop: 170
                })
            }
           
        })
        const changepage = (v) => {
            finList.resList = arrGroup(secLists.value.resList, reqparmas.pageSize)[v - 1]
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
        watch(() => route.query.keyward, (v) => {
            store.dispatch('food/getUsersearchlist', {
                keyward: route.query.keyward
            })
        }, {

        })
        onMounted(() => {

            store.dispatch('food/getUsersearchlist', {
                keyward: route.query.keyward
            })
        })
        return {
            secLists,
            reqparmas,
            finList,
            goDetail,
            changepage,
            sendCollect,
            userCollect
        }
    }
}
</script>
<style lang="scss" scoped>
.minheight {
    min-height: 3rem;
}
</style>
