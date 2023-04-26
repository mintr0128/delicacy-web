<template>
    <div class="foodinfo-innerproduct">
        <div class="food-partone mt-6 p-4 flex justify-between">
            <div class="bg-green-50 mr-8 food-partone-r recipe_topimgw ">
                <img :src="foodinfo.picture" alt="" class="w-full   h-full">
            </div>
            <div class="bg-gray-50 food-partone-l">
                <h1 class="mb-4 h-12 text-3xl mt-4">{{ foodinfo.name }}</h1>
                <div class="mb-4 text-sm text-gray-500">{{ foodinfo.describe }}</div>
                <div class="info2 flex mb-4">
                    <div class=" w-7/12">
                        <div class=" rounded-xl bg-white  h-40 mr-4 info2-item info2-item1">
                            <em>分类</em>
                            <strong>{{ foodinfo.auth }}</strong>
                        </div>
                        <div class=" rounded-xl bg-white  h-40 mr-4 info2-item info2-item2">

                            <em>口味</em>
                            <strong>{{ foodinfo.taste }}</strong>
                        </div>
                        <div class=" rounded-xl bg-white  h-40 info2-item info2-item3">

                            <em>时间</em>
                            <strong>{{ foodinfo.spendtime }}</strong>
                        </div>
                        <div class=" rounded-xl bg-white   h-40 info2-item info2-item4">
                            <em>难度</em>
                            <strong>{{ foodinfo.diffcu }}</strong>
                        </div>
                    </div>
                    <div class="w-20  mr-5 bg-white  rounded-xl overflow-hidden toolbar-left">
                        <span title="点赞！" @click="snedLike(0)" class="like  flex top-hover-green m-4  flex-col "
                            :class="{ 'active-like-or-col': midLikeCollect.idlike }">
                            <svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z">
                                </path>
                            </svg>
                            <span class="info-text w-9 flex justify-center">{{
                                midLikeCollect.like }}
                            </span>
                        </span>
                    </div>
                    <div class=" w-20  bg-white rounded-xl overflow-hidden toolbar-left">
                        <span title="收藏！" @click="sendCollect(1)" class="top-hover-green  collect flex m-4 flex-col "
                            :class="{ 'active-like-or-col': midLikeCollect.idcoll }">
                            <!-- <canvas width="34" height="34" class="ring-progress"
                                    style="width:34px;height:34px;left:-3px;top:-3px;"></canvas> -->
                            <svg width="36" height="36" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" class="icon"
                                style="fill:;">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z">
                                </path>
                            </svg>
                            <span class="info-text w-9 flex justify-center">{{
                                midLikeCollect.collect }}</span>
                        </span>
                    </div>

                </div>

                <div class=" mb-4 rounded-xl  h-28 flex  overflow-hidden">
                    <div class="bg-yellow-300 w-1/5 p-4 font-bold">
                        主料
                    </div>
                    <div class=" bg-white w-4/5  p-4">
                        <div class="showlittletas hover-green hover-boxshaow" v-for="item, index in foodinfo.zhuliao"
                            :key="index">
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div class=" mb-4 rounded-xl  h-28 flex  overflow-hidden">
                    <div class="bg-yellow-300 w-1/5  p-4 font-bold">
                        辅料
                    </div>
                    <div class=" bg-white w-4/5  p-4">
                        <div class="showlittletas hover-green hover-boxshaow" v-for="item, index in foodinfo.fuliao"
                            :key="index">
                            {{ item }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { reactive, computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import { throttle } from '@/utils/index'
import { reqGetFoodinfoData, reqGetLikenum, reqGetCollectnum } from '@/api/food'
import { reqInsFoodlike, reqInsFoodCollect } from '@/api/user'
import Message from '@/utils/messageUI'
import Bus from '@/utils/bus'
export default {
    name: 'foodtop',
    setup() {
        const route = useRoute()
        const store = useStore()
        onMounted(async () => {
            let { status, result: { picture, name, describe, auth, taste, spendtime, diffcu, zhuliao, fuliao } } = await reqGetFoodinfoData({
                id: route.params.id
            })
            if (status == 200) {
                foodinfo.picture = picture
                foodinfo.name = name
                foodinfo.describe = describe
                foodinfo.auth = auth
                foodinfo.taste = taste
                foodinfo.spendtime = spendtime + 'in'
                foodinfo.diffcu = diffcu
                foodinfo.zhuliao = zhuliao
                foodinfo.fuliao = fuliao
            }
            getLikenumber({
                namedetail: foodinfo.name,
                u_id: store.state.user.profile.id
            })
            getCollectnum({
                namedetail: foodinfo.name,
                u_id: store.state.user.profile.id
            })

        })
        const foodinfo = reactive({
            picture: '',
            name: '',
            desdescribec: '',
            auth: "",
            taste: '',
            spendtime: '',
            diffcu: "新手难度",
            zhuliao: [],
            fuliao: []
        })
        const midLikeCollect = reactive({
            like: "",
            collect: "",
            idlike: false,
            idcoll: false
        })
        const userLike = reactive({
            id: null,
            u_id: null,
            f_id: null,
            //type 判断点赞还是收藏  0；点赞 1：收藏 2：点赞+收藏
            type: null,
            namedetail: '',
        })
        const userCollect = reactive({
            id: null,
            u_id: null,
            f_id: null,

            type: null,
            namedetail: '',
        })

        Bus.$on('changeMsg', data => {
            const { like, collect } = data
            //midLikeCollect.like = like
            // midLikeCollect.collect = collect
        })
        const snedLike = throttle(async (data) => {
           
            if (!store.getters['user/isLogin']) {
                Message({
                    type: 'warn',
                    text: '请登录！',
                    offsetTop: 170
                })
                return
            }
            userLike.namedetail = foodinfo.name
            userLike.u_id = store.state.user.profile.id
            userLike.id = uuidv4()
            userLike.f_id = route.params.id
            userLike.type = data
            let res = await reqInsFoodlike(userLike)
            if (res.status == 200) {
                let type = res.message == '点赞成功！' ? 'success' : 'warn'
                Message({
                    type: type,
                    text: res.message,
                    offsetTop: 170
                })
            }
            getLikenumber({
                namedetail: foodinfo.name,
                u_id: store.state.user.profile.id
            })
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
            userCollect.namedetail = foodinfo.name
            userCollect.u_id = store.state.user.profile.id
            userCollect.id = uuidv4()
            userCollect.f_id = route.params.id
            userCollect.type = data[0]
            let res = await reqInsFoodCollect(userCollect)
            if (res.status == 200) {
                let type = res.message == '收藏成功！' ? 'success' : 'warn'
                Message({
                    type: type,
                    text: res.message,
                    offsetTop: 170
                })
            }
            getCollectnum({
                namedetail: foodinfo.name,
                u_id: store.state.user.profile.id
            })
        })
        const getLikenumber = async (data) => {
            let res = await reqGetLikenum(data)
            midLikeCollect.like = res.result.num
            midLikeCollect.idlike = res.result.isuserId
        }
        const getCollectnum = async (data) => {
            let res = await reqGetCollectnum(data)
            midLikeCollect.collect = res.result.num
            midLikeCollect.idcoll = res.result.isuserId
        }
        return {
            foodinfo,
            midLikeCollect,
            userLike,
            userCollect,
            sendCollect,
            snedLike,
            getLikenumber,
            getCollectnum
        }
    }
}
</script>
<style  scoped lang="scss">
.foodinfo-innerproduct {
    padding-bottom: 43px;
    border-radius: 8px;

    .food-partone {
        padding-top: 16px;
        background-color: #fff;
        padding: 20px 20px 10px 20px;
        border-radius: 8px;
        box-sizing: border-box;

        .food-partone-r {
            flex-grow: 1;
        }

        .food-partone-l {
            flex-grow: 5;

            .info2 {
                height: 160px;
                margin: 25px 0px 16px 0px;

            }
        }
    }

}

.recipe_topimgw {
    vertical-align: top;
    height: 535px;
    border-radius: 8px;
    overflow: hidden;
    min-width: 350px;
    max-width: 475px;
    // background-image: url('https://st-cn.meishij.net/r/173/81/3832923/s3832923_151709231529871.jpg');
    // background-position: center center;
    // background-size: cover;
    // background-repeat: no-repeat;
}

.info2-item {
    display: inline-block;
    vertical-align: top;
    height: 160px;
    width: 80px;
    margin-right: 20px;
    border-radius: 16px;
    background: #fff url('../../../assets/images/foodinfolist.png') no-repeat;
    background-size: 80px 640px;
    position: relative;
    position: relative;
    overflow: hidden;

    em {
        font-size: 12px;
        color: #666;
        line-height: 18px;
        position: absolute;
        left: 12px;
        bottom: 37px;
        font-weight: 400;
    }

    strong {
        font-size: 14px;
        color: #222;
        line-height: 20px;
        position: absolute;
        left: 12px;
        bottom: 17px;
        font-weight: 600;
    }
}

.info2-item1 {
    background-position: 0 0;
}

.info2-item2 {
    background-position: 0px -160px;
}

.info2-item3 {
    background-position: 0px -320px;
}

.info2-item4 {
    background-position: 0px -480px;
}

.showlittletas {
    font-size: 15px;
    color: #222;
    border-radius: 8px;
    background: #f5f5f5;
    display: inline-block;
    vertical-align: top;
    margin: 0px 12px 12px 0px;
    height: 32px;
    padding: 0px 10px;
    line-height: 32px;
    border-radius: 8px;

}

.top-hover-green {
    transition: all 0.3s;

    &:hover {
        fill: $txColor;
        color: $txColor ;
    }
}

.active-like-or-col {
    transition: all 0.3s;
    fill: $txColor;
    color: $txColor ;
}

.likeSca {
    transform: scale(1.1);
}</style>