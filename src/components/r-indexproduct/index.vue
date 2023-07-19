<template>
  <div class="r-indexproduct-components">
    <div class="r-indexproduct-top">
      <div class="r-indexproduct-title">
        <h3>{{ title }}</h3>
        <span>{{ productDesc }}</span>
      </div>
      <div class="r-product-more" @click="goSearch">
        <span>查看更多</span>
        <i class="iconfont icon-jiantou"></i>
      </div>
    </div>
    <div class="r-indexproduct-list">
      <template v-for="(item, index) in productInfo" :key="index">
        <rproduct :product="item" :price="item.taste"></rproduct>
      </template>
    </div>
  </div>
</template>

<script>
// 商品组件
import rproduct from '@/components/r-product/index'
import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue';
export default {
  name: 'rindexproduct',
  props: {
    // 商品数据
    productInfo: {
      type: Object,
      default: () => {
        // eslint-disable-next-line vue/require-valid-default-prop
        return []
      }
    },
    // 商品模块标题
    title: {
      type: String,
      default: '请填写内容'
    },
    // 商品模块描述
    productDesc: {
      type: String,
      default: '请填写副标题'
    }
  },
  setup(props) {
    const router = useRouter()
    onMounted(() => {
      // console.log(props.productInfo );
    })
    const goSearch = (v) => {
      router.push({
        name: 'searchFood',
        query: {
          name: '热菜',
          id: 114,
          describe: '常见菜式'
        }
      })
    }
    return {
      goSearch
    }
  },
  components: {
    rproduct,

  }
}
</script>

<style scoped lang="scss">
.r-indexproduct-components {
  padding-bottom: 20px;
  width: 100%;

  .r-indexproduct-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .r-indexproduct-title {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      display: flex;
      align-items: center;

      h3 {
        font-size: 20px;
        margin-right: 10px;
      }

      span {
        font-size: 14px;
        color: #999;
      }
    }

    .r-product-more {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 14px;
        color: $txColor;
      }

      .icon-jiantou {
        font-size: 10px !important;
        color: $txColor;
        margin-left: 5px;
      }
    }
  }

  .r-indexproduct-list {
    display: flex;
    justify-content: space-between;
  }
}</style>
