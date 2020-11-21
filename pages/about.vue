<template>
  <div class="pageMargin pageWrapper top">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <img :src="`${about[0].image}`" alt="" class="MainImage" />
    <div class="message">
      <div v-html="$md.render(about[0].content)"></div>
    </div>
    <div class="profile" :class="responsiveCheck">
      <img :src="`${about[0].thumbnail}`" alt="" />
      <div class="information">
        <h3>プロフィール</h3>
        <div v-html="$md.render(about[0].profile)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'ABOUT',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '「ウーニ」と申します。岩手県在住。短大のデザイン科を卒業しデザイン系の仕事をしています。ゲンゴロウ数種ととカブトムシを飼育。好きな昆虫はナミゲンゴロウ。',
        },
      ],
    }
  },
  data() {
    return {
      width: Number,
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'ABOUT' }],
      }
    },
    ...mapState(['about']),
  },
}
</script>

<style lang="scss" scoped>
$thumbnailWidth: 180px;
.top {
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 750px !important;
}
.MainImage {
  background-color: gray;
  width: 100%;
  height: 56vw;
  max-height: 490px;
  object-fit: cover;
}
.message {
  margin-top: 35px;
  margin-bottom: 100px;
  /deep/ h2 {
    margin-bottom: 25px;
  }
}
.mobile {
  flex-flow: column;
  align-items: center;
  img {
    margin-bottom: 30px;
  }
  .information {
    margin: 0;
  }
  h3 {
    text-align: center;
  }
  /deep/ p {
    text-align: center;
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
