<template>
  <div class="indexNews">
    <h1>ニュース</h1>
    <ul>
      <LNpost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="post"
      ></LNpost>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          imagepath: 'keyholder.png',
          date: '2020/8/15',
          content: '【夏の新作】<br>「ゲンゴロウモビール」販売開始',
        },
        {
          id: 2,
          imagepath: 'keyholder.png',
          date: '2020/8/15',
          content: '【夏の新作】<br>「ゲンゴロウモビール」販売開始',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.indexNews {
  width: 900px;
  display: flex;
  margin-top: 70px;
}
h1 {
  font-size: 20px;
  color: $green;
  width: 140px;
  text-align: left;
}
.post {
  margin-bottom: 20px;
}
</style>
