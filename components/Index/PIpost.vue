<template>
  <div>
    <nuxt-link to="#" class="imageLink">
      <img :src="`images/${post.imagepath}`" alt="" />
    </nuxt-link>
    <div class="information">
      <p class="content" v-html="post.name"></p>
      <nuxt-link to="#">販売サイト(BOOTH)へ</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: column;
}
img {
  width: 100%;
  height: auto;
}
.information {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.date {
  color: $green;
  font-size: 15px;
  margin-bottom: 10px;
}
.content {
  font-size: 16px;
  line-height: 29px;
  text-align: left;
}
a {
  font-family: 'Hiragino Sans';
  font-weight: 500;
  color: $green;
  font-size: 13px;
}
p {
  font-family: 'Hiragino Sans';
  font-weight: 500;
}
</style>
