<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <transition
          ><NewsPost
            :post="post"
            :index="index"
            v-if="index < appearItem"
          ></NewsPost
        ></transition>
      </li>
    </ul>
    <button @click="addItem()" class="shadebutton">Read More</button>
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
          id: 1,
          image: '/images/kontikushow-dummy-big.jpg',
          date: '2020年9月22日',
          message: '【夏の新作】「ゲンゴロウモビール」販売開始',
        },
        {
          id: 2,
          image: '/images/kontikushow-dummy-big.jpg',
          date: '2020年9月22日',
          message: '【夏の新作】「ゲンゴロウモビール」販売開始',
        },
        {
          id: 2,
          image: '/images/kontikushow-dummy-big.jpg',
          date: '2020年9月22日',
          message: '【夏の新作】「ゲンゴロウモビール」販売開始',
        },
        {
          id: 2,
          image: '/images/kontikushow-dummy-big.jpg',
          date: '2020年9月22日',
          message: '【夏の新作】「ゲンゴロウモビール」販売開始',
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
  flex-wrap: wrap;
  li {
    width: calc(100% / 2);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 15px;
  }
}
</style>
