<template>
  <div class="popularItem" :class="responsiveCheck">
    <h2>人気の商品</h2>
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
  h2 {
    text-align: center;
    margin-bottom: 5px;
    width: 100%;
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
h2 {
  font-size: 20px;
  color: $green;
  width: 20%;
  text-align: left;
}
.post {
  margin-right: 45px;
  width: calc(90% / 3);
  &:last-child {
    margin-right: 0;
  }
}
</style>
