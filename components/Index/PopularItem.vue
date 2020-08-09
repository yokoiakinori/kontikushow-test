<template>
  <div class="popularItem" :class="{ mobile: mobileCheck }">
    <h1>人気の商品</h1>
    <ul>
      <PIpost
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="post"
      ></PIpost>
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
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 2,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 3,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
      ],
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
.popularItem {
  width: 900px;
  display: flex;
  margin-top: 60px;
  margin-bottom: 75px;
  ul {
    display: flex;
  }
}
h1 {
  font-size: 20px;
  color: $green;
  width: 140px;
  text-align: left;
}
.post {
  margin-right: 45px;
  &:last-child {
    margin-right: 0;
  }
}
</style>
