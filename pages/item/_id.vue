<template>
  <div class="pageMargin">
    <div class="images">
      <img :src="`..${currentImage}`" alt="" class="currentImage" />
      <ul>
        <img
          :src="`..${currentItem.image1}`"
          alt=""
          class="listImage imageLink"
          @click="toggleImage('image1')"
        />
        <img
          :src="`..${currentItem.image2}`"
          alt=""
          class="listImage imageLink"
          @click="toggleImage('image2')"
        />
        <img
          :src="`..${currentItem.image3}`"
          alt=""
          class="listImage imageLink"
          @click="toggleImage('image3')"
        />
      </ul>
    </div>
    <div class="information">
      <h2>{{ currentItem.name }}</h2>
      <p class="price">{{ currentItem.price }}<span>（税込）</span></p>
      <nuxt-link :to="`${currentItem.shopurl}`" class="shopLink"
        >販売サイト(BOOTH)へ</nuxt-link
      >
      <p class="itemInfo">商品説明： <br />{{ currentItem.info }}</p>
      <p class="specification">
        商品仕様： <br />{{ currentItem.specification }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.titleString,
    }
  },
  data() {
    return {
      currentItem: Object,
      currentImage: String,
    }
  },
  computed: {
    posts() {
      return this.$store.state.item
    },
    titleString() {
      return this.currentItem.name
    },
  },
  methods: {
    toggleImage(number) {
      if (number === 'image1') {
        this.currentImage = this.currentItem.image1
      } else if (number === 'image2') {
        this.currentImage = this.currentItem.image2
      } else if (number === 'image3') {
        this.currentImage = this.currentItem.image3
      }
    },
  },
  created() {
    this.currentItem = this.posts[this.$route.params.id]
    this.currentImage = this.posts[this.$route.params.id].image1
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 85vw;
  max-width: 700px;
  display: flex;
  justify-content: space-between;
}
.images {
  width: 60%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
}
.currentImage {
  width: 100%;
  height: 30vw;
  margin-bottom: 2.55vw;
  transition-duration: 0.3s;
}
.listImage {
  width: calc(90% / 3);
  height: calc(30vw / 3);
}
ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h2 {
  color: black;
  margin-bottom: 30px;
}
.information {
  width: 35%;
  display: flex;
  flex-flow: column;
  justify-content: start;
}

.price {
  text-align: right;
  font-size: 24px;
  span {
    font-size: 16px;
  }
}
.shopLink {
  background-color: $green;
  width: 100%;
  padding: 15px;
  margin: 30px 0;
  text-align: center;
  border-radius: 5px;
  color: white;
}
.itemInfo {
  margin-bottom: 15px;
}
.specification {
  font-size: 12px;
  line-height: 17px;
}
</style>
