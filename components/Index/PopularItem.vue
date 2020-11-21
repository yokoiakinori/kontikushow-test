<template>
  <div class="popularItem" :class="responsiveCheck">
    <div class="componentHeader">
      <PopularItemIcon class="icon" />
      <h2>人気の商品</h2>
    </div>
    <ul>
      <PIpost
        v-for="post in posts"
        :key="post.name"
        :post="post"
        class="post"
      ></PIpost>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: Number,
    }
  },
  computed: {
    posts() {
      return this.$store.state.popularItem
    },
  },
  methods: {},
  mounted() {
    this.$store.commit('setpopularItem')
  },
}
</script>

<style lang="scss" scoped>
.mobile {
  flex-flow: column;
  align-items: center;
  margin-top: 30px !important;
  .componentHeader {
    text-align: center;
    margin-bottom: 5px;
    width: 100%;
    justify-content: center;
  }
  ul {
    padding: 0;
    flex-flow: column;
    .post {
      margin-right: 0px !important;
      margin: 20px 0;
      width: 100% !important;
    }
  }
}
.popularItem {
  width: 100%;
  display: flex;
  margin-top: 60px;
  margin-bottom: 75px;
  ul {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }
}
.post {
  margin-right: 45px;
  width: calc(90% / 3);
  &:last-child {
    margin-right: 0;
  }
}
</style>
