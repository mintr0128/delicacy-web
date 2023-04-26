<template>
  <div class="r-product-components hover-boxshaow r-box-shadow" @click="goUrl">
    <!--商品图片区域-->
    <div class="r-product-img">
      <img alt="" v-lazy="product.picture">
    </div>
    <div class="r-product-info">
      <h4 class="ellipsis hov-green" :title="product.name">{{ product.name }}</h4>
      <div class="r-product-info-buttom">
        <rprice size="13" :price="product.taste" class="but-rp"></rprice>
        <div v-if="product.auth" class="buttom-auth">分类：{{ product.auth }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'rproduct',
  props: {
    // 商品数据
    product: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const router = useRouter()
    const goUrl = () => {
      //console.log(props.product.id);
      router.push({
        name: 'food',
         params: {
           id: props.product.id
         }

      })
      // router.push({
      //   path: '/goodsdetail/' + props.product.id
      // })
    }
    return {
      goUrl
    }
  }
}
</script>

<style scoped lang="scss">
.r-product-components {
  cursor: pointer;
  width: 260px;
  overflow: hidden;
  border-radius: 8px;



  .r-product-img {
    img {
      width: 100%;
      height: 260px;
    }
  }

  .r-product-info {
    height: 98px;
    background-color: #F0F9F4;
    padding: 10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      display: flex;
      justify-content: center;
      font-size: 16px;
      color: #333;
      margin-bottom: 10px;
      width: 80%;

    }
  }
}

.r-product-info-buttom {
  display: flex;
  justify-content: space-between;
  width: 95%;
  align-items: baseline;
  font-size: 13px;

  .buttom-auth {

    color: #999;
  }
}

.but-rp::before {
  content: '口味:';

}</style>
