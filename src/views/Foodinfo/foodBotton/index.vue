<template>
    <div class="foodinfo-Botton">
        <div class="Botton-cont">
            <h1 class="mb-4 h-12 text-3xl mt-4">评论</h1>
            <div class="  h-24  ml-14 flex mb-12">
                <div class="reply-box-avatar bg-green-100 w-1/6 rounded-3xl mr-6">
                </div>
                <div v-if="$store.getters['user/isLogin']" class="reply-box-warp   mr-6 w-5/6">
                    <textarea v-model="commons.content" class="reply-box-textarea focus  text-gray-500"
                        placeholder="这里需要一条查重率0%的评论(评论不多余500字)"></textarea>
                </div>
                <div v-if="!$store.getters['user/isLogin']"
                    class="notlogin  filter-blur-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl  mr-6 w-5/6">
                    <rbutton @click="gotologin">登录后可留言</rbutton>
                </div>
                <rbutton :height="96" @click="publishCon">发布</rbutton>
            </div>
            <template v-if="isShowlist">
                <div v-for="item in commonList" :key="item.id" class="h-32  rbm-w-82  ml-14 flex mb-12 ">
                    <div class="reply-box-avatar bg-green-100 w-1/6 rounded-3xl mr-6">
                        <img class="userpic" :src="userpic" alt="">
                    </div>
                    <div class="reply-box-warp   mr-6 w-5/6 flex flex-col">
                        <span class=" h-6 text-xs text-gray-400">用户：{{ item.username }}</span>
                        <span class="auto-box-warp-h text-lg text-gray-600">{{ item.content }}</span>
                        <span class="h-6 text-xs text-gray-400">评论时间：{{ item.times }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { throttle } from '@/utils/index'
import dayjs from 'dayjs'
import { reqInsComment } from '@/api/comment'
import { reqGetFoodcomment } from '@/api/food'
// 消息提示
import Message from '@/utils/messageUI'
export default {
    name: 'foodBotton',
    setup(props) {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        onMounted(async () => {
            getCommonList()
            //console.log(userpic);
        })
        const commonList = reactive([])
        const isShowlist = ref(false)
        const commons = reactive({
            u_id: null,
            f_id: null,
            isComm: '0',
            content: '',
            times: '',
            username: ''
        })
        const publishCon = throttle(async () => {
            if (store.getters['user/isLogin']) {
                if (commons.content.length == 0) {
                    Message({
                        type: 'warn',
                        text: '评论不能为空！',
                        offsetTop: 170
                    })
                    return
                }
                if (commons.content.length > 500) {
                    Message({
                        type: 'warn',
                        text: '评论字数过多！',
                        offsetTop: 170
                    })
                    return
                }
                commons.u_id = store.state.user.profile.id
                commons.f_id = route.params.id
                commons.times = dayjs().format('YYYY-MM-DD HH:mm:ss')
                commons.username = store.state.user.profile.username
                let res = await reqInsComment(commons)
                if (res.status == 200) {
                    commons.content = ''
                    Message({
                        type: 'success',
                        text: '评论成功！',
                        offsetTop: 170
                    })
                    getCommonList()
                }
            } else {
                Message({
                    type: 'error',
                    text: '尚未登录，请登录！',
                    offsetTop: 170
                })
            }
        }, 300)
        const getCommonList = async () => {
            let res = await reqGetFoodcomment({
                f_id: route.params.id
            })
            if (res.status == 200) {
                if (commonList.length != 0) {
                    commonList.splice(0, commonList.length)
                }
                res.result.reverse().forEach(v => {
                    commonList.push(v)
                });
                //  console.log('commonList', commonList);
                isShowlist.value = true
            }
        }
        const gotologin = () => {
            router.push('/login')
        }
        const userpic = computed(() => {
            return store.state.user.profile.user_pic
        })
        return {
            publishCon,
            commons,
            getCommonList,
            commonList,
            isShowlist,
            gotologin,
            userpic
        }
    }
}
</script>
<style  scoped lang="scss">
.foodinfo-Botton {
    padding-bottom: 43px;
    border-radius: 8px;

    .Botton-cont {
        background-color: #fff;
        padding: 20px 20px 10px 20px;
        border-radius: 8px;
        box-sizing: border-box;

        .reply-box-textarea {
            width: 100%;
            height: 100%;
            padding: 5px 10px;
            border: 1px solid $borderColor;
            border-radius: 6px;
            font-family: inherit;
            resize: none;
            outline: none;
        }
    }
}

.rbm-w-82 {
    width: 82.5%;

    .reply-box-warp {
        border-bottom: 1px solid $borderColor;

        .auto-box-warp-h {
            height: calc(100% - 48px);
        }
    }


}

.notlogin {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;


    .auto-box-warp-h {
        height: calc(100% - 48px);
    }
}

.userpic {
    width: 128px;
    height: 128px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fff;
    margin-left: 10px;
}
</style>
