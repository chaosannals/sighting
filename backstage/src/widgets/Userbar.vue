<template>
    <el-popover class="userbar" trigger="click" placement="bottom-end">
        <div slot="reference" class="reference-frame">
            <div class="avatar-frame">
            </div>
            <div class="sign">
                <span>▼</span>
            </div>
        </div>
        <div class="">
        </div>
    </el-popover>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.userbar {
    position: relative;
    width: 100%;
    height: 100%;
    background: #123;

    .avatar-frame {
        width: 50px;
        height: 50px;
        margin: 5px;
        border: none;
        border-radius: 50%;
        background: #fff;
    }

    .sign {
        position: absolute;
        right: 10px;
        bottom: 2px;
        font-size: 12px;
    }
}
</style>
