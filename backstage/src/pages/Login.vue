<template>
    <el-container class="login-page">
        <el-header>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="8">&nbsp;</el-col>
                <el-col :span="8">
                    <el-form class="login-form" size="small" label-width="100px">
                        <el-form-item label="用户名">
                            <el-input/>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input/>
                        </el-form-item>
                        <el-form-item style="text-align: right;">
                            <el-button>
                                <span>登录</span>
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">&nbsp;</el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.login-form {
    padding: 1em;
    border: 1px solid #bbb;
}
</style>
