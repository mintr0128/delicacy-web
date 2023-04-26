<template>
    <div class="foodinfo-page">
        <div class="container">
            <foodTop></foodTop>
            <foodMid></foodMid>
            <foodBotton></foodBotton>
        </div>
    </div>
</template>
<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import foodTop from './foodTop/index.vue'
import foodMid from './foodMid/index.vue'
import foodBotton from './foodBotton/index.vue'

export default {
    name: 'food',
    setup() {
        const route = useRoute()

        const baccimg = computed(() => {
            return {
                'background-image': 'url(' + foodinfo.picurl + '),',
                'background-position': 'center center;',
                'background-size': 'cover;',
                'background-repeat': 'no-repeat;'
            }
        })
        
        return {
            baccimg
        }
    },
    components: {
        foodTop,
        foodMid,
        foodBotton
    }
}
</script>
<style scoped lang="scss">
.foodinfo-page {
    background-color: #f5f5f5;
    overflow: hidden;

    .container {
        width: 1240px;
        margin: 0 auto;
        position: relative;
        min-width: 1240px;
    }
}
</style>