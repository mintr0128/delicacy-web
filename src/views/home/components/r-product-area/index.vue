<template>
    <div class="container">
        <div class="bg-white min-height border-radius padding pb-5 mb-5 r-box-shadow">
            <div class="r-product-area-top">
                <div class="flex items-baseline text-sm">
                    <div class=" text-xl mr-4 text-black  ">{{ areaData.name }}</div>
                    <div class="mr-4 text-gray-400">美味{{ areaData.name }}</div>
                    <div class="text-gray-400">营养健康</div>
                </div>
                <div class="primary-color " @click="goSearch(areaData)">
                    查看更多>
                </div>
            </div>
            <div class="flex justify-between ph-21 pt-4 mb-4" v-if="arrdata">
                <div v-for="item, index  in arrdata.children" :key="index" class=" w-56 radius hover-boxshaow  r-box-shadow"
                    @click="goUrl(item)">
                    <div class=" h-60">
                        <img v-lazy="item.picture" alt="" class="w-60  h-60">
                    </div>
                    <div class="flex flex-col bg-green p-2 radius-f ">
                        <div class="p-2 hov-green">{{ item.name }}</div>
                        <div class="p-2 text-gray-400 truncate"> <i class="iconfont icon-meishi mr-2"></i>主料：{{ item.zhuliao
                        }}</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    name: 'rproductarer',
    props: {
        areaData: {
            type: Object,
            default: () => {
                return []
            }
        }
    },
    setup(props) {
        const store =useStore()
        const router = useRouter()
        const arrdata = computed(() => {
            return {
                ...props.areaData,
                children: props.areaData.children ? props.areaData.children.slice(0, 4) : []
            }
        })
        const goSearch = (v) => {

            store.commit('user/setUserActive', v.name)
            router.push({
                name: 'searchFood',
                query: {
                    name: v.name,
                    id: v.id,
                    describe: v.describe
                }
            })
        }
        const goUrl = (v) => {

            router.push({
                name: 'food',
                params: {
                    id: v.id
                }

            })

        }
        return {
            goSearch,
            arrdata,
            goUrl
        }
    }
}
</script>

<style scoped lang="scss">
.radius {
    border-radius: 8px;
    overflow: hidden;
}

.radius-f {
    border-radius: 0 0 8px 8px;
}

.ph-21 {
    height: 21rem;
}
</style>
