<template>
  <div>
    <nuxt-link :to="`/item/${post.pagepath}`" class="imageLink"
      ><img :src="`${post.image1}`" class="roundsquareImage" alt=""
    /></nuxt-link>
    <nuxt-link :to="`/item/${post.pagepath}`">
      <p class="date">{{ post.date }}</p>
      <p>{{ post.name }}</p></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>
div {
  width: 77%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.date {
  font-size: 13px;
  color: $green;
}
</style>
