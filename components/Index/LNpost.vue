<template>
  <div>
    <p class="date hiraginoP">{{ post.date }}</p>
    <p class="baseP hiraginoP">{{ post.title }}</p>
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
  width: 100%;
}
.mobile {
  div {
    margin-top: 10px !important;
    margin-left: 0px !important;
    width: 100% !important;
    flex-flow: column;
  }
  .date {
    margin-bottom: 5px !important;
    width: 100%;
  }
  .baseP {
    width: 100%;
  }
}
.date {
  color: $green;
  font-size: 13px;
  margin-bottom: 6px;
  width: 20%;
}
.baseP {
  font-size: 17px;
  width: 80%;
}
</style>
