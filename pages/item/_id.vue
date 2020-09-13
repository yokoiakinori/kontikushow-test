<template>
  <div class="pageMargin">
    <div class="images">
      <img
        :src="`../images/${currentItem.images[currentImage]}`"
        alt=""
        class="currentImage"
      />
      <ul>
        <img
          v-for="(image, index) in currentItem.images"
          :key="index"
          :src="`../images/${image}`"
          alt=""
          class="listImage imageLink"
          @click="toggleImage(index)"
        />
      </ul>
    </div>
    <div class="information">
      <h2>{{ currentItem.name }}</h2>
      <p class="price">{{ currentItem.price }}<span>（税込）</span></p>
      <nuxt-link :to="`${currentItem.shopurl}`" class="shopLink"
        >販売サイト(BOOTH)へ</nuxt-link
      >
      <p class="itemInfo">商品説明： <br />{{ currentItem.iteminfo }}</p>
      <p class="specification">
        商品仕様： <br />{{ currentItem.itemspecification }}
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
      items: [
        {
          id: 1,
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
          price: '￥600',
          shopurl: '#',
          iteminfo:
            '岩手県在住。短大のデザイン科を卒業しデザイン系の仕事をしています。ゲンゴロウ数種ととカブトムシを飼育。好きな昆虫はナミゲンゴロウ。',
          itemspecification: '寸法　幅10mm×奥行10mm×高さ6mm',
          images: ['1.jpg', '2.jpg', '3.jpg'],
        },
        {
          id: 2,
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
          price: '￥600',
          shopurl: '#',
          iteminfo:
            '岩手県在住。短大のデザイン科を卒業しデザイン系の仕事をしています。ゲンゴロウ数種ととカブトムシを飼育。好きな昆虫はナミゲンゴロウ。',
          itemspecification: '寸法　幅10mm×奥行10mm×高さ6mm',
          images: ['1.jpg', '2.jpg', '3.jpg'],
        },
        {
          id: 3,
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
          price: '￥600',
          shopurl: '#',
          iteminfo:
            '岩手県在住。短大のデザイン科を卒業しデザイン系の仕事をしています。ゲンゴロウ数種ととカブトムシを飼育。好きな昆虫はナミゲンゴロウ。',
          itemspecification: '寸法　幅10mm×奥行10mm×高さ6mm',
          images: ['1.jpg', '2.jpg', '3.jpg'],
        },
      ],
      currentItem: Object,
      currentImage: 0,
    }
  },
  computed: {
    currentItemNo() {
      return this.$route.params.id - 1
    },
    titleString() {
      return this.currentItem.name
    },
  },
  methods: {
    toggleImage(number) {
      this.currentImage = number
    },
  },
  created() {
    this.currentItem = this.items[this.currentItemNo]
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
