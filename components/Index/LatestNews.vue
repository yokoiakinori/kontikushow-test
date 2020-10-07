<template>
  <div class="indexNews" :class="responsiveCheck">
    <h2>ニュース</h2>
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
