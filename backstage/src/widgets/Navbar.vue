<template>
    <div class="navbar">
        <div class="brand" :style="{ width: brand.width + 'px' }">
        </div>
        <div class="menu" :style="{ left: brand.width + 'px' }">
            <el-menu mode="horizontal" text-color="#ffd" background-color="#122">
                <el-menu-item index="1">
                    <span>首页</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="userbar">
            <userbar/>
        </div>
    </div>
</template>

<script>
import Userbar from './Userbar.vue';

export default {
    components: {
        Userbar,
    },
    props: {
        brand: {
            default() {
                return {
                    width: 300,
                };
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;

    .brand {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: #123;
    }

    .menu {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 80px;
        bottom: 0;
        text-align: left;
    }

    .userbar {
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 80px;
        right: 0;
        bottom: 0;
    }
}
</style>
