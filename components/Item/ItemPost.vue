<template>
  <div>
    <nuxt-link to="#" class="imageLink"
      ><img :src="`images/${post.imagepath}`" alt=""
    /></nuxt-link>
    <p>{{ post.name }}</p>
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
