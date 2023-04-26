<template>
  <!-- <rredpack v-model="showRenpick"></rredpack> -->
  <div class="index-page">
    <div class="container">
      <!--轮播图区域 分类区域-->
      <div class="index-cate-swiper">
        <div class="cate-area">
          <rcategory></rcategory>
        </div>
        <!--轮播图区域-->
        <div class="swiper-area">
          <rswiper :swiperData="indexState.bannerData" :durationTime="4000"></rswiper>
        </div>
      </div>
    </div>
    <!--首页商品内容区域-->
    <div class="index-product-area">
      <div class="container">
        <div class="index-innerproduct">
          <!--新鲜好物 人气推荐-->
          <div class="parduct-partone r-box-shadow" ref="hotproduct">
            <transition name="fade">
              <rindexproduct :productInfo="indexState.newProductData" v-if="indexState.newProductData.length > 0"
                title="为你推荐" productDesc="每日推荐 猜你喜欢"></rindexproduct>
              <mainskeleton v-else></mainskeleton>
            </transition>
          </div>
          <!--人气推荐-->
          <div class="product-parttwo r-box-shadow" ref="brandproduct">
            <rpopularity title="热门美食" desc="经典味道 健康保证" :brandData="breanDataList" v-if="breanDataList.length > 0">
            </rpopularity>
            <div class="brand-skeleton" v-else>
              <template v-for="i in 5" :key="i">
                <rskeleton bg="#e4e4e4" width="230px" height="306px" animated></rskeleton>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--首页主要内容区域-->
    <div class="index-main-product-area  " ref="mainproduct" v-if="innerproductList.length > 0">
      <!-- <template v-for="(item,index) in indexState.indexGoods" :key="index">
          <indexmainproduct :productData="item"></indexmainproduct>
        </template> -->
      <template v-for="item, index in innerproductList" :key="index">
        <rproductarea :areaData="item"></rproductarea>
      </template>

    </div>
    <!--最新专题-->
    <div class="index-new-product" ref="newproduct">
      <div class="container">
        <newSpecproduct :newspec="indexState.newSpecdataspec"></newSpecproduct>
      </div>
    </div>
  </div>
</template>

<script>
// vue onMounted 实例挂载完成 reactive 响应式数据
import { computed, onMounted, reactive, ref } from 'vue'
// 分类组件
import rcategory from './components/r-category/index'
//其他分类
import rproductarea from './components/r-product-area/index.vue'
import { useStore } from 'vuex'
// 轮播图组件
import rswiper from '@/components/r-swiper/index'
// 首页商品组件
import rindexproduct from '@/components/r-indexproduct/index'
// 人气推荐组件
import rpopularity from '@/components/r-popularity/index'
// 主商品组件
import indexmainproduct from '@/components/r-indexmainproduct/index'
// 最新专题组件
import newSpecproduct from '@/components/r-newspec/index'
// 骨架
import mainskeleton from '@/components/r-skeletonproduct'
// 红包组件
import rredpack from '@/components/r-redpack'
// 数据懒加载hook
import useLazyData from '@/hook/useLazyData'
// api
import { getBnanerData, getHotBrandData, getIndexGoods, getNewProductData, getNewSpecData } from '@/api/home'
import { getLocalStorageData } from '@/utils/storage'
import { reqGetFoodSwiper, reqGetProductData, reqGetHotBrandData } from '@/api/food'
export default {
  name: 'index',
  setup() {
    const store = useStore()
    const showbox = ref(false)
    // 是否显示红包弹窗
    const showRenpick = ref(true)
    // 人气商品 ref
    const hotproduct = ref(null)
    // 热门商品 ref
    const brandproduct = ref(null)
    // 主商品 ref
    const mainproduct = ref(null)
    // 新品商品 ref
    const newproduct = ref(null)
    // 轮播图数据
    const indexState = reactive({
      // 轮播图数据
      bannerData: [],
      // 新鲜好物数据
      newProductData: [],
      // 品牌数据
      brandData: [],
      // 首页商品数据
      indexGoods: [],
      // 最新专题数据
      newSpecdataspec: [],


    })
    onMounted(() => {
      // 获取banner数据
      getBanner()
      // 检查是否打开过红包
      //openRedpack()
    })
    // 是否打开红包弹窗
    const openRedpack = () => {
      if (getLocalStorageData('openredpack')) {
        showRenpick.value = false
      } else {
        showRenpick.value = false
      }
    }
    // 获取轮播图数据
    const getBanner = async () => {
      let res = await reqGetFoodSwiper()
      if (res.status == 200) {
        indexState.bannerData = res.data
      }

      //indexState.bannerData = result
    }
    // 人气商品数据懒加载
    indexState.newProductData = useLazyData(hotproduct, reqGetProductData)
    // 获取热门好物数据 懒加载
    indexState.brandData = useLazyData(brandproduct, () => reqGetHotBrandData(10))
    // 计算属性 截取热门好物的数据 只要5条品牌数据
    const breanDataList = computed(() => {
      return indexState.brandData
    })
    //其他 
    const innerproductList = computed(() => {
      let res = store.state.category.cateList.map((item, index) => {
        if (item.id === 117) {
          item.children.reverse()
        }
        return {
          ...item,
        }
      })

      return res.splice(0, 3)
    })
    // 获取首页商品区块数据懒加载
    indexState.indexGoods = useLazyData(mainproduct, getIndexGoods)
    // 获取最新专题 数据懒加载
    indexState.newSpecdataspec = useLazyData(newproduct, getNewSpecData)

    return { indexState, showbox, hotproduct, brandproduct, breanDataList, mainproduct, newproduct, showRenpick, innerproductList }
  },
  components: {
    rcategory,
    rproductarea,
    rswiper,
    rindexproduct,
    rpopularity,
    indexmainproduct,
    newSpecproduct,
    mainskeleton,
    rredpack
  }
}
</script>

<style scoped lang="scss">
//组件过渡动画
//动画之前
.fade-enter-from {
  opacity: 0;
}

//动画中
.fade-enter-leave {
  transition: all .3s;
}

//动画后
.fade-enter-to {
  opacity: 1;
}

//离开前
.fade-leave-from {
  opacity: 1;
}

//离开中
.fade-leave-active {
  transition: all .3s;
}

//离开后
.fade-leave-to {
  opacity: 0;
}

.index-page {
  background-color: #f5f5f5;
  overflow: hidden;

  .container {

    //overflow: hidden;
    .index-cate-swiper {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }

    .brand-skeleton {
      display: flex;
      justify-content: space-between;
    }
  }

  .index-product-area {
    width: 100%;
    background-color: #f5f5f5;
    margin-top: 48px;

    .index-innerproduct {
      padding-bottom: 43px;
      border-radius: $borderRadius;

      .parduct-partone {
        padding-top: 16px;
        background-color: #fff;
        padding: 20px 20px 10px 20px;
        border-radius: $borderRadius;
        box-sizing: border-box;
      }
    }

    .product-parttwo {
      background-color: #fff;
      margin-top: 40px;
      padding: 20px 20px 10px 20px;
      border-radius: $borderRadius;
    }
  }

  .index-main-product-area {
    background-color: #f5f5f5;
  }

  //最新专题
  .index-new-product {
    width: 100%;
    background-color: #f5f5f5;
    padding-bottom: 40px;
  }
}
</style>
