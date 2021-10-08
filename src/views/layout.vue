<template>
  <el-container>
    <el-header>portfolio</el-header>
    <el-main> <router-view /></el-main>
    <el-footer> For Jang Jong-doo's portfolio </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #ededed;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
