<template>
  <div class="pageMargin">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <div class="contents" :class="responsiveCheck">
      <div class="images">
        <img :src="`..${currentImage}`" alt="" class="currentImage" />
        <ul class="selectImages">
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
        <p class="price">¥{{ currentItem.price }}<span>（税込）</span></p>
        <nuxt-link :to="`${currentItem.shopurl}`" class="shopLink"
          >販売サイト(BOOTH)へ</nuxt-link
        >
        <h3>商品説明</h3>
        <p class="itemInfo">{{ currentItem.info }}</p>
        <p class="specification">
          商品仕様： <br />{{ currentItem.specification }}
        </p>
      </div>
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
    breadcrumbs() {
      return {
        data: [
          { name: 'TOP', path: '/' },
          { name: 'ITEM', path: '/item' },
          { name: this.currentItem.name },
        ],
      }
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
  mounted() {
    const path = this.$route.params.id
    this.currentItem = this.posts.find(function (posts) {
      return posts.pagepath === path
    })
    this.currentImage = this.posts.find(function (posts) {
      return posts.pagepath === path
    }).image1
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 85vw;
  max-width: 1000px;
}
.contents {
  display: flex;
  justify-content: space-between;
}
.mobile {
  flex-flow: column;
  align-items: center;
  .images,
  .information {
    width: 100%;
  }
  .images {
    margin-bottom: 30px;
  }
  .currentImage {
    height: 60vw;
  }
  .listImage {
    height: calc(60vw / 3);
  }
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
  height: 37vw;
  max-height: 450px;
  margin-bottom: 2.55vw;
  transition-duration: 0.3s;
}
.listImage {
  width: calc(90% / 3);
  height: calc(35vw / 3);
  max-height: calc(420px / 3);
}
.selectImages {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
h2,
h3 {
  color: black;
}
h2 {
  margin-bottom: 30px;
  font-size: 23px;
}
h3 {
  font-size: 16px;
  margin-bottom: 5px;
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
