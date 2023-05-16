<template>
    <div class="r-row-item-component">
        <!--标题区域-->
        <div class="row-head">
            <p>{{ title }}</p>
        </div>
        <!--商品列表区域-->
        <div class="row-body">
            <div>
                <ul class="">
                    <li class="mb-2 p-4 flex">昵称:<div class="ml-4"><span class="">{{ profile.nickname }}</span></div>
                    </li>
                    <li class="mb-2 p-4 flex">账号:<div class="ml-4"><span class="">{{ profile.username }}</span></div>
                    </li>
                    <li class="mb-2 p-4 flex">邮箱:<div class="ml-4"><span class="">{{ profile.email }}</span></div>
                    </li>
                    <li v-if="!profile.user_pic" class="mb-2 p-4 flex">头像:
                        <div class="ml-4 flex">
                            <span class="">{{ profile.user_pic ? profile.user_pic : '请上传头像' }}</span>
                            <div class="inpc ml-4 flex">

                                <input type="file" @change="onchanges($event)">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import message from '@/utils/messageUI'
import { useStore } from 'vuex'
import { reactive, onMounted } from 'vue'
import { reqInsUserPic } from '@/api/user'
export default {
    name: 'myCenter',
    props: {
        // 标题区域
        title: {
            type: String,
            default: '默认标题'
        },

        profile: {
            type: Object,
            default: () => { }
        }
    },
    setup(props) {
        const store = useStore()
        const onchanges = async (e) => {
            const file = e.target.files[0]
            if (file.type == 'image/jpeg' || file.type == 'image/png') {
                let fd = new FormData()
                fd.append('user_pic', file)
                fd.append('id', store.state.user.profile.id)
                let res = await reqInsUserPic(fd)
                console.log(res);

            } else {
                message({
                    type: 'warn',
                    text: '图片格式有误！',
                    offsetTop: 170
                })
                return
            }

        }
        return {
            onchanges
        }
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
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
            display: flex;
        }
    }
}

.inpc {
    display: flex;
    height: 65px;

    input {
        border: 1px solid #d9d9d9;
        width: 100%;
        height: 50%;
    }
}
</style>
