<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
    <ul>
      <li v-for="(post, index) in posts" :key="index" :class="responsiveCheck">
        <transition
          ><NewsPost
            :post="post"
            :index="index"
            v-if="index < appearItem"
          ></NewsPost
        ></transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'NEWS',
    }
  },
  data() {
    return {
      posts: [
        {
          date: '2020年9月22日',
          title: '【夏の新作】「ゲンゴロウモビール」販売開始',
          message:
            'ITEMページにて新作「ゲンゴロウモビール」の情報を掲載しました。',
        },
        {
          date: '2020年9月22日',
          title: '【夏の新作】「ゲンゴロウモビール」販売開始',
          message:
            'ITEMページにて新作「ゲンゴロウモビール」の情報を掲載しました。',
        },
        {
          date: '2020年9月22日',
          title: '【夏の新作】「ゲンゴロウモビール」販売開始',
          message:
            'ITEMページにて新作「ゲンゴロウモビール」の情報を掲載しました。',
        },
        {
          date: '2020年9月22日',
          title: '【夏の新作】「ゲンゴロウモビール」販売開始',
          message:
            'ITEMページにて新作「ゲンゴロウモビール」の情報を掲載しました。',
        },
      ],
      appearColumn: 1,
    }
  },
  computed: {
    appearItem() {
      return this.appearColumn * 4
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-flow: column;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;
  }
}
</style>
