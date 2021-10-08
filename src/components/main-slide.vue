<template>
  <div>
    <el-row class="container">
      <el-col :span="24">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="(item, index) in slide_item" :key="index">
            <h3>{{ item.title }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide_item: [
        { title: '한국항로표지기술원' },
        { title: '흥국생명' },
        { title: '맘스터치' }
      ]
    }
  }
}
</script>

<style lang="scss">
.el-carousel__item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h3 {
    color: #475669;
    font-size: 14px;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
