<template>
  <div class="indexNews">
    <h1>ニュース</h1>
    <ul>
      <LNpost
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        class="post"
      ></LNpost>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.latestNews
    },
  },
}
</script>

<style lang="scss" scoped>
.indexNews {
  width: 900px;
  display: flex;
  margin-top: 70px;
}
h1 {
  font-size: 20px;
  color: $green;
  width: 140px;
  text-align: left;
}
.post {
  margin-bottom: 20px;
}
</style>
