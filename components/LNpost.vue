<template>
  <div>
    <img :src="`images/${post.imagepath}`" alt="" />
    <div class="information">
      <p class="date">{{ post.date }}</p>
      <p class="content" v-html="post.content"></p>
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
}
img {
  width: 180px;
  height: 110px;
  object-fit: cover;
}
.information {
  margin-left: 25px;
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
p {
  font-family: 'Hiragino Sans';
  font-weight: 500;
}
</style>
