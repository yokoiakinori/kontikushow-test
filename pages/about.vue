<template>
  <div class="pageMargin wrapper">
    <div class="MainImage">ここに画像がはいります</div>
    <div class="message">
      <h2>虫のかわいさを届けたい</h2>
      <p class="hiraginoP baseP">
        「昆」虫の知識を「蓄」えながら「商」品を作る、「昆蓄商（こんちくしょう）」と申します。<br />
        虫博士のような詳しい知識はなくても、気軽にだれでも虫たちを可愛がることができる商品を届けるのが目標です。<br />
        かわいい商品を通して、少しでも虫たちに慣れたり好きになってもらえたら嬉しいです。
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
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 600px;
  display: flex;
  flex-flow: column;
}
.MainImage {
  background-color: gray;
  width: 100%;
  height: 420px;
}
.message {
  margin-top: 20px;
  margin-bottom: 100px;
}
h2 {
  margin-bottom: 25px;
}
.profile {
  display: flex;
  img {
    width: 180px;
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
