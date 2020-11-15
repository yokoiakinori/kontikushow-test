<template>
  <div class="wrapper pageMargin">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <transition>
      <ExpansionImage
        v-show="expansionimageCheck"
        @hide="appearExpansionImage()"
        :images="images"
      />
    </transition>
    <div class="contents" :class="responsiveCheck">
      <div class="images">
        <img
          :src="currentImage"
          alt=""
          class="currentImage"
          @click="appearExpansionImage()"
        />
        <ul class="selectImages">
          <img
            :src="currentItem.image1"
            alt=""
            class="listImage imageLink"
            @click="toggleImage('image1')"
          />
          <img
            :src="currentItem.image2"
            alt=""
            class="listImage imageLink"
            @click="toggleImage('image2')"
          />
          <img
            :src="currentItem.image3"
            alt=""
            class="listImage imageLink"
            @click="toggleImage('image3')"
          />
        </ul>
      </div>
      <div class="information">
        <h2>{{ currentItem.name }}</h2>
        <p class="price">¥{{ currentItem.price }}<span>（税込）</span></p>
        <a
          :href="`${currentItem.shopurl}`"
          target="_blank"
          rel="noopener noreferrer"
          class="shopLink"
          >販売サイト(BOOTH)へ</a
        >
        <div class="tagList">
          <nuxt-link
            v-for="(tag, index) in currentItem.tags"
            :key="index"
            class="tagItem"
            :to="`/item/tagsearch?tagname=${tag.tagname}`"
          >
            <FontAwesome
              :icon="'hashtag'"
              :string="'faHashtag'"
            /><!-- :string属性はfonstawesomeのimport自動化のために使われる。 -->
            <p>{{ tag.tagname }}</p>
          </nuxt-link>
        </div>
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
  // expansionimageCheckは「画像拡大」用のモーダルコンポーネント表示非表示のフラグ
  data() {
    return {
      currentCategory: Object,
      currentItem: Object,
      currentImage: String,
      expansionimageCheck: false,
    }
  },
  props: {
    categoryParam: String,
  },
  computed: {
    posts() {
      return this.$store.state.item.allItem
    },
    titleString() {
      return this.currentItem.name
    },
    categories() {
      return this.$store.state.item.categories
    },
    breadcrumbs() {
      if (this.categoryParam === 'all') {
        return {
          data: [
            { name: 'TOP', path: '/' },
            { name: 'ITEM', path: '/item/all' },
            { name: this.titleString },
          ],
        }
      } else if (this.categoryParam === 'tagsearch') {
        return {
          data: [
            { name: 'TOP', path: '/' },
            { name: 'ITEM', path: '/item/all' },
            {
              name: this.$store.state.item.tagKeyword,
              path: `/item/tagsearch?tagname=${this.$store.state.item.tagKeyword}`,
            },
            { name: this.titleString },
          ],
        }
      } else {
        return {
          data: [
            { name: 'TOP', path: '/' },
            { name: 'ITEM', path: '/item/all' },
            {
              name: this.currentCategory.name,
              path: `/item/${this.currentCategory.path}`,
            },
            { name: this.titleString },
          ],
        }
      }
    },
    images() {
      return [
        this.currentItem.image1,
        this.currentItem.image2,
        this.currentItem.image3,
      ]
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
    appearExpansionImage() {
      this.expansionimageCheck = !this.expansionimageCheck
    },
  },
  created() {
    const path = this.$route.params.category
    this.currentCategory = this.categories.find(function (category) {
      return category.path === path
    })
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
.wrapper {
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
    height: 80vw;
  }
}
.desktop {
  .images {
    height: 50vw;
    max-height: 590px;
  }
}
.images {
  width: 60%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
}
.currentImage {
  width: 100%;
  height: 73%;
  transition-duration: 0.3s;
}
.listImage {
  width: calc(90% / 3);
  height: 100%;
}
.selectImages {
  width: 100%;
  height: 23%;
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
.tagList {
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-bottom: 15px;
}
.tagItem {
  margin-right: 25px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  svg {
    font-size: 19px;
    color: rgba($green, $alpha: 0.5);
    margin-right: 7px;
  }
  p {
    display: inline-block;
    line-height: normal;
  }
}
.itemInfo {
  margin-bottom: 15px;
}
.specification {
  font-size: 12px;
  line-height: 17px;
}
</style>
