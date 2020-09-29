<template>
  <div class="post">
    <p class="date">{{ post.date }}</p>
    <div class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post', 'index'],
}
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  display: flex;
}
.date {
  color: $green;
  font-size: 13px;
  width: 20%;
}
.content {
  width: 80%;
  display: flex;
  flex-flow: column;
}
.mobile {
  .post {
    flex-flow: column;
  }
  .date {
    width: 100%;
    margin-bottom: 10px;
  }
  .content {
    width: 100%;
  }
}
h2 {
  margin-bottom: 3px;
  line-height: 27px;
  margin-bottom: 10px;
}
p {
  font-size: 14px;
  line-height: 22px;
}
</style>
