<template>
  <div :class="{ mobile: mobile }">
    <img :src="`${post.image}`" alt="" />
    <div class="information">
      <p class="date hiraginoP">{{ post.date }}</p>
      <p class="baseP hiraginoP" v-html="post.content"></p>
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
    width: 220px;
    height: 130px;
  }
  div {
    margin-top: 10px !important;
    margin-left: 0px !important;
    width: 220px !important;
  }
  .date {
    margin-bottom: 5px !important;
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
</style>
