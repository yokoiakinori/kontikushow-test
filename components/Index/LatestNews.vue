<template>
  <div class="indexNews" :class="{ mobile: mobileCheck }">
    <h2>ニュース</h2>
    <ul>
      <LNpost
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :mobile="mobileCheck"
        class="post"
      ></LNpost>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: Number,
    }
  },
  computed: {
    mobileCheck() {
      if (this.width > 380) {
        return false
      } else {
        return true
      }
    },
    posts() {
      return this.$store.state.latestNews
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
.mobile {
  width: 350px !important;
  flex-flow: column;
  align-items: center;
  margin-top: 30px !important;
  h2 {
    text-align: center;
    margin-bottom: 5px;
  }
  ul {
    padding: 0;
  }
}
.indexNews {
  width: 900px;
  display: flex;
  margin-top: 70px;
}
h2 {
  font-size: 20px;
  color: $green;
  width: 140px;
  text-align: left;
}
.post {
  margin-bottom: 20px;
}
</style>
