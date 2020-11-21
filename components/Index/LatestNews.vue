<template>
  <div class="indexNews" :class="responsiveCheck">
    <div class="componentHeader">
      <NewsIcon class="icon" />
      <h2>ニュース</h2>
    </div>
    <div class="contents">
      <ul>
        <LNpost
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
          class="post"
        ></LNpost>
      </ul>
      <nuxt-link to="/news">詳しくみる</nuxt-link>
    </div>
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
      return this.$store.getters.latestNews
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.mobile {
  width: 100% !important;
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
  }
}
.indexNews {
  width: 100%;
  display: flex;
  margin-top: 70px;
}
.contents {
  width: 80%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}
ul {
  width: 100%;
}
.post {
  margin-bottom: 20px;
}
</style>
