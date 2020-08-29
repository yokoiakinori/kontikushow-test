<template>
  <div class="pageMargin wrapper">
    <div class="MainImage">ここに画像がはいります</div>
    <div class="message">
      <h2>{{ posts[0].head }}</h2>
      <p class="hiraginoP baseP">
        {{ posts[0].content }}
      </p>
    </div>
    <div class="profile">
      <img :src="`images/${profile.imagepath}`" alt="" />
      <div>
        <h3>プロフィール</h3>
        <p class="hiraginoP baseP">
          名前：ウーニ<br />
          岩手県在住。短大のデザイン科を卒業しデザイン系の仕事をしています。ゲンゴロウ数種ととカブトムシを飼育。好きな昆虫はナミゲンゴロウ。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ABOUT',
    }
  },
  data() {
    return {
      profile: {
        imagepath: 'IMG_4598.jpg',
      },
    }
  },
  computed: {
    posts() {
      return this.$store.state.about
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
  width: 80vw;
  display: flex;
  flex-flow: column;
}
.MainImage {
  background-color: gray;
  width: 100%;
  height: 56vw;
  max-height: 420px;
}
.message {
  margin-top: 20px;
  margin-bottom: 100px;
  p {
    white-space: pre-line;
    word-wrap: break-word;
  }
}
h2 {
  margin-bottom: 25px;
}
.profile {
  display: flex;
  img {
    width: 30%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    margin-left: 30px;
    h3 {
      margin-bottom: 20px;
    }
  }
}
</style>
