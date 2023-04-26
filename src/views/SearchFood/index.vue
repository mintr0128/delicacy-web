<template>
    <div class="search-page">
        <div class="container">
            <searchHeader></searchHeader>
            <searchMid></searchMid>
        </div>
    </div>
</template>
<script>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import searchHeader from './searchHeader/index.vue'
import searchMid from './searchMid/index.vue'
export default {
    name: "searchFood",
    setup(props) {
        // const route = useRoute()

        onMounted(() => {
            // console.log(route.query);
        })
        return {

        }
    },
    components: {
        searchHeader,
        searchMid
    }
}

</script>
<style lang="scss" scoped>
.search-page {
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
