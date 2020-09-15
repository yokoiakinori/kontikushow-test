<template>
  <div>
    <nuxt-link :to="`/item/${index}`" class="imageLink"
      ><img :src="`${post.image1}`" alt=""
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
  height: 35vw;
  max-height: 350px;
  display: flex;
  flex-flow: column;
}
img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
