<template>
  <div class="indexNews" :class="{ mobile: mobileCheck }">
    <h2>ニュース</h2>
    <div class="contents">
      <ul>
        <LNpost
          v-for="(post, index) in latestNews"
          :key="index"
          :post="post"
          :mobile="mobileCheck"
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
      return this.$store.getters.allNews
    },
    latestNews() {
      const displayedResults = 3
      return this.posts.slice(0, displayedResults)
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.mobile {
  width: 350px !important;
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
  }
}
.indexNews {
  width: 100%;
  display: flex;
  margin-top: 70px;
}
h2 {
  width: 20%;
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
