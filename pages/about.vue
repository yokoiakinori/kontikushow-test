<template>
  <div class="pageMargin wrapper">
    <img :src="`${posts[0].image}`" alt="" class="MainImage" />
    <div class="message">
      <div v-html="$md.render(posts[0].content)"></div>
    </div>
    <div class="profile">
      <img :src="`${posts[0].thumbnail}`" alt="" />
      <div class="information">
        <h3>プロフィール</h3>
        <div v-html="$md.render(posts[0].profile)"></div>
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
  computed: {
    posts() {
      return this.$store.state.about
    },
  },
}
</script>

<style lang="scss" scoped>
$thumbnailWidth: 180px;
.MainImage {
  background-color: gray;
  width: 100%;
  height: 56vw;
  max-height: 420px;
  object-fit: cover;
}
.message {
  margin-top: 35px;
  margin-bottom: 100px;
  /deep/ h2 {
    margin-bottom: 25px;
  }
}
.profile {
  display: flex;
  img {
    width: $thumbnailWidth;
    height: $thumbnailWidth;
    object-fit: cover;
    border-radius: 50%;
  }
  h3 {
    margin-bottom: 20px;
  }
}
.information {
  margin-left: 30px;
}
</style>
