<template>
  <div>
    <!-- header -->
    <el-row class="container">
      <el-col class="header" :span="24">
        <div class="logo-wrap">
          <router-link :to="{ name: 'main' }">
            <img src="@/assets/img/logo_jjd.png" alt="로고" />
          </router-link>
        </div>
        <div class="link-list">
          <el-link
            type="success"
            @click="$router.push({ name: 'main' }).catch(() => {})"
            >porfolio</el-link
          >
          <el-link
            type="warning"
            @click="$router.push({ name: 'about' }).catch(() => {})"
            >about me</el-link
          >
        </div>
      </el-col>
      <el-col> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
// $TEXT_DEAFULT: #ff8855;

.header {
  height: 80px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-wrap {
    width: 80px;
    a {
      display: block;
    }
    img {
      width: 100%;
    }
  }
  .el-link {
    padding: 5px;
  }
  .el-link--inner {
    margin: 0 10px;
    font-size: 20px;
  }
}
</style>
