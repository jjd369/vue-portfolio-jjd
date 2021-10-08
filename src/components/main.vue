<template>
  <div class="container">
    <template v-for="(item, index) in pf_list">
      <el-row :gutter="20" type="flex" justify="space-around" :key="index">
        <el-col :span="16">
          <a class="img-wrap" href="#" target="_blank">
            <img
              class="w-100"
              src="@/assets/img/portfolio_img.png"
              alt="item1_img"
            />
          </a>
        </el-col>
        <el-col :span="8">
          <ul>
            <li>
              <h3>{{ item.title }}</h3>
            </li>
            <li>{{ item.txt1 }}</li>
            <li>{{ item.txt2 }}</li>
            <li>{{ item.txt3 }}</li>
            <li>
              <button @click="increment()">{{ count }}</button>
              <el-button type="success">Success</el-button>
            </li>
            <li>
              <el-button>detail</el-button>
              <el-button type="success">github</el-button>
            </li>
          </ul>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      pf_list: [
        {
          title: '한국항로표지기술원',
          txt1: '익스플로러 8까지의 호환성을 고려했습니다.',
          txt2: '메인페이지와 다양한 서브페이지 구현했습니다.',
          txt3: 'js/jquery를 이용하여 다양한 동작들 구현했습니다.',
        },
        {
          title: '흥국생명',
          txt1: '반응형 페이지로 제작했습니다.',
          txt2: 'breakpoint는 1200px, 1000px ,768px입니다.',
          txt3: '기존의 로고의 색상과 어울리는 색상배합으로 구성했습니다.',
        },
        {
          title: '한국항로표지기술원',
          txt1: '익스플로러 8까지의 호환성을 고려했습니다.',
          txt2: '메인페이지와 다양한 서브페이지 구현했습니다.',
          txt3: 'js/jquery를 이용하여 다양한 동작들 구현했습니다.',
        },
        {
          title: '맘스터치',
          txt1: '모바일 페이지로 제작했습니다.',
          txt2: '메인페이지와 다양한 서브페이지들을 제작했습니다.',
          txt3: '타사의 모바일 홈페이지와 비슷한 구성요소로 구성했습니다.',
        },
      ],
    }
  },
  computed: {
    ...mapState(['count']),
  },
  methods: {
    ...mapMutations(['increment']),
  },
}
</script>
<style lang="scss" scoped>
.img-wrap {
  width: 70%;
}
li {
  margin-bottom: 20px;
}
</style>
