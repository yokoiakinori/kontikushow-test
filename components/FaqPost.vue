<template>
  <div>
    <div class="question">
      <span>Q</span>
      <h3>{{ post.question }}</h3>
    </div>

    <div class="answer">
      {{ post.answer }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss" scoped>
.question {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  span {
    color: rgba($color: $green, $alpha: 0.4);
    font-size: 45px;
    font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, Roboto sans-serif;
    font-weight: bold;
    margin-right: 15px;
    display: inline-block;
  }
}
.answer {
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: black, $alpha: 0.1);
  border-radius: 5px;
  margin-bottom: 50px;
  font-weight: 400;
  font-family: 'Hiragino Sans';
  font-size: 15px;
  color: #666;
}
</style>
