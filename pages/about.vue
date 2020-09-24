<template>
  <div class="pageMargin wrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <img :src="`${posts[0].image}`" alt="" class="MainImage" />
    <div class="message">
      <div v-html="$md.render(posts[0].content)"></div>
    </div>
    <div class="profile" :class="{ mobile: mobileCheck }">
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
  data() {
    return {
      width: Number,
    }
  },
  computed: {
    posts() {
      return this.$store.state.about
    },
    mobileCheck() {
      if (this.width > 380) {
        return false
      } else {
        return true
      }
    },
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'ABOUT' }],
      }
    },
  },
  methods: {
    handleReisize() {
      if (process.client) {
        this.width = window.innerWidth
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleReisize)
  },
  created() {
    this.handleReisize()
  },
}
</script>

<style lang="scss" scoped>
$thumbnailWidth: 180px;
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
