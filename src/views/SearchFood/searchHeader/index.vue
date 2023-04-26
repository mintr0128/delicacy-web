<template>
    <div class="search-header-innerproduct">
        <div class="header-partone mt-6 p-4 flex justify-between flex-col">
            <div class="w-full mb-4 text-sm">
                <span>当前位置：</span>
                <span>首页 ></span>
                <span class=" ml-1">搜索 ></span>
                <span class=" ml-1">{{ brides.describe }} ></span>
                <span class="text-green-400 ml-1">{{ brides.name }}</span>
                <span class="mr-1 ml-3">|</span>
                <span>为您找到 <span class=" text-green-400">{{ showListlength }}</span> 个结果</span>
            </div>
            <div class=" w-full">
                <div v-for="items, index in SearchList " :key="items.id" class=" flex minheight h-10 mb-4">
                    <div class=" bg-gray-100 rounded-lg  mr-5 w-1/12 flex justify-center items-center">
                        <span class=" hover-green text-sm font-semibold">{{ items.describe }}</span>
                    </div>
                    <div class="w-10/12 text-sm text-gray-500">
                        <ul class="h-full flex items-center flex-wrap ">
                            <li v-for="item, indexs in items.childrens " :key="indexs" class="hover-green w-1/12 "
                                :class="[item.name == brides.name ? 'color-green' : '']" @click="snedSearch(item)">
                                <a>{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-1/12"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { reqSearchShowlist } from '@/api/food'
export default {
    name: "searchHeader",
    setup(props) {
        const route = useRoute()
        const store = useStore()
        const brides = reactive({
            describe: '常见菜式',
            name: "热菜"
        })

        onMounted(async () => {
            await store.dispatch('food/getClassify')
            brides.name = store.state.food.searchNavsec.name || route.query.keyward
            // console.log(store.state.food.searchNavsec);
            // console.log(route.query);
            if (route.query.hasOwnProperty('name') && route.query.hasOwnProperty('id') && route.query.hasOwnProperty('describe')) {
                brides.describe = route.query.describe
                brides.name = route.query.name
                store.dispatch('food/getSearchShowlist', {
                    id: route.query.id,
                    name: route.query.name
                })

            }
        })
        const SearchList = computed(() => {
            return store.state.food.foodSearchList
        })
        const snedSearch = (v) => {
            brides.describe = v.describe
            brides.name = v.name
            store.dispatch('food/getSearchShowlist', {
                id: v.id,
                name: v.name
            })
        }
        const showListlength = computed(() => {
            return store.state.food.searchNavsec.resList.length
        })
        watch(() => route.query.keyward, (v) => {
            brides.name = v
        }, {
        })
        return {
            brides,
            SearchList,
            snedSearch,
            showListlength
        }
    }
}

</script>
<style lang="scss" scoped>
.search-header-innerproduct {
    padding-bottom: 43px;
    border-radius: 8px;

    .header-partone {
        padding-top: 16px;
        background-color: #fff;
        padding: 20px 20px 10px 20px;
        border-radius: 8px;
        box-sizing: border-box;
    }
}

.minheight {
    min-height: 3.5rem;
}

.color-green {
    color: #19ce06;
}
</style>
