<template>
  <div class="infinite-scroll">
    <transition-group tag="ul" :class="responsiveCheck">
      <li v-for="post in posts" :key="post.pagepath" class="listItem">
        <ItemPost :post="post" />
      </li>
    </transition-group>

    <infinite-loading
      ref="infiniteLoading"
      spinner="spiral"
      @infinite="addtoContents"
    >
      <span slot="no-more">アイテムがありません</span>
      <span slot="no-result">アイテムがありません</span>
    </infinite-loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      pagesize: 6,
      contents: 0,
      start: 0,
      allItem: Number,
      count: 0,
    }
  },
  props: {
    categoryParam: String,
  },
  methods: {
    addtoContents() {
      setTimeout(() => {
        if (this.contents < this.allItem) {
          if (this.allItem - this.contents > 6) {
            this.contents += 6
          } else {
            this.contents += this.allItem - this.contents
          }
          this.$refs.infiniteLoading.stateChanger.loaded()
        } else {
          this.$refs.infiniteLoading.stateChanger.complete()
        }
      }, 1000)
    },
    getContents(index) {
      if (this.categoryParam === 'all') {
        this.posts.push(this.$store.getters['item/getItem'](index))
      } else if (this.categoryParam === 'tagsearch') {
        this.posts.push(this.$store.getters['item/getTagItem'](index))
      } else {
        this.posts.push(this.$store.getters['item/getCategoryItem'](index))
      }
    },
  },
  created() {
    if (this.categoryParam !== 'all' && this.categoryParam !== 'tagsearch') {
      this.$store.commit('item/extractcategory', this.categoryParam)
    } else if (this.categoryParam === 'tagsearch') {
      this.$store.commit('item/extractTag')
    }
  },
  mounted() {
    if (this.categoryParam === 'all') {
      this.posts = this.$store.getters['item/appearItem'](1)
      this.allItem = this.$store.getters['item/allItemLength']
    } else if (this.categoryParam === 'tagsearch') {
      this.posts = this.$store.getters['item/appearTagItem'](1)
      this.allItem = this.$store.getters['item/tagItemLength']
    } else {
      this.posts = this.$store.getters['item/appearCategoryItem'](1)
      this.allItem = this.$store.getters['item/categoryItemLength']
    }
  },
  watch: {
    contents(contents) {
      const maxLength = 6
      if (this.allItem - contents >= maxLength) {
        for (let i = contents + 1; i < contents + maxLength + 1; i++) {
          this.getContents(i)
        }
      } else {
        for (
          let i = contents + 1;
          i < contents + (this.allItem - contents) + 1;
          i++
        ) {
          this.getContents(i)
        }
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$width: 90%;
$height: 88vw;
ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.infinite-scroll {
  width: 100%;
}
.desktop {
  &::after {
    content: '';
    display: block;
    width: calc(#{$width} / 3);
  }
  li {
    width: calc(#{$width} / 3);
    height: calc(#{$height}/ 3);
    max-height: 445px;
    margin-bottom: 20px;
  }
}
.pad {
  li {
    width: calc(#{$width} / 2);
    margin-bottom: 25px;
  }
}
.mobile {
  li {
    width: 100%;
    margin-bottom: 10px;
  }
}
.listItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
