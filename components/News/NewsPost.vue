<template>
  <div>
    <nuxt-link :to="`/item/${index}`" class="imageLink"
      ><img :src="`${post.image}`" class="roundsquareImage" alt=""
    /></nuxt-link>
    <p class="date">{{ post.date }}</p>
    <p>{{ post.message }}</p>
  </div>
</template>

<script>
export default {
  props: ['post', 'index'],
}
</script>

<style lang="scss" scoped>
div {
  width: 85%;
  height: 35vw;
  max-height: 350px;
  display: flex;
  flex-flow: column;
}
.date {
  color: $green;
  font-size: 13px;
}
img {
  width: 100%;
  height: 25vw;
  margin-bottom: 10px;
}
</style>
