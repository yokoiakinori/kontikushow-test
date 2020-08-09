<template>
  <div :class="{ mobile: mobile }">
    <img :src="`${post.image}`" alt="" />
    <div class="information">
      <p class="date">{{ post.date }}</p>
      <p class="content" v-html="post.content"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post', 'mobile'],
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
img {
  width: 180px;
  height: 105px;
  object-fit: cover;
}
.mobile {
  img {
    width: 230px;
    height: 130px;
  }
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
