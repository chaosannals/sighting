<template>
    <div class="sidebar">
        <el-menu :collapse="collapse" class="menu" mode="vertical">
            <el-menu-item index="1">
                <span>管理员</span>
            </el-menu-item>
            <el-menu-item index="2">
                <span>管理员</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: {
        collapse: {
            default: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
    overflow-y: auto;
    width: 100%;
    height: 100%;

    .menu {
        height: 100%;
    }
}
</style>
