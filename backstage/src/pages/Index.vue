<template>
    <el-container class="index-page">
        <el-header class="header">
            <navbar/>
        </el-header>
        <el-container>
            <el-aside>
                <sidebar/>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Navbar from '@/widgets/Navbar.vue';
import Sidebar from '@/widgets/Sidebar.vue';

export default {
    components: {
        Navbar,
        Sidebar,
    },
}
</script>

<style lang="scss" scoped>
.index-page {
    width: 100%;
    height: 100%;

    .header {
        padding: 0;
    }
}
</style>
