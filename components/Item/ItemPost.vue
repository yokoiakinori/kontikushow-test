<template>
  <div>
    <nuxt-link
      :to="`${currentRoute}/${post.pagepath}`"
      class="imageLink roundsquareImage image"
      ><img v-lazy="post.image1" :alt="`「${post.name}」のリスト用画像`"
    /></nuxt-link>
    <nuxt-link :to="`${currentRoute}/${post.pagepath}`" class="info">
      <p class="date">{{ simpleDate }}</p>
      <p>{{ post.name }}</p></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    simpleDate() {
      return this.post['created-date'].replace(/-\S{1,}/, '')
    },
    currentRoute() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
.date {
  font-size: 13px;
  color: $green;
}
.image {
  height: 76%;
}
.info {
  height: 24%;
  margin-top: 20px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}
</style>
