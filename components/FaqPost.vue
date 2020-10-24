<template>
  <div>
    <h3 class="question"><span>Q</span>{{ post.question }}</h3>
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
  span {
    color: rgba($color: $green, $alpha: 0.4);
    font-size: 45px;
    font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, Roboto sans-serif;
    font-weight: bold;
    margin-right: 15px;
    vertical-align: middle;
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
}
</style>
