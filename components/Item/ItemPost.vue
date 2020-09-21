<template>
  <div>
    <nuxt-link :to="`/item/${index}`" class="imageLink"
      ><img :src="`${post.image1}`" class="roundsquareImage" alt=""
    /></nuxt-link>
    <nuxt-link :to="`/item/${index}`"
      ><p>{{ post.name }}</p></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['post', 'index'],
}
</script>

<style lang="scss" scoped>
div {
  width: 77%;
  height: 100%;
  display: flex;
  flex-flow: column;
  a {
    height: 100%;
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
}
</style>
