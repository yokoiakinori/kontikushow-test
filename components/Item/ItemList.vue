<template>
  <div class="infinite-scroll">
    <ul :class="responsiveCheck">
      <li v-for="post in posts" :key="post.pagepath" class="listItem">
        <ItemPost :post="post" />
      </li>
    </ul>

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
      contents: 1,
      start: 0,
      allItem: Number,
    }
  },
  props: {
    categoryParam: String,
  },
  methods: {
    addtoContents() {
      setTimeout(() => {
        this.contents += 6
        if (this.contents < this.allItem) {
          this.$refs.infiniteLoading.stateChanger.loaded()
        } else {
          this.$refs.infiniteLoading.stateChanger.complete()
        }
      }, 1000)
    },
    getContents(index) {
      this.posts.push(this.$store.getters.getItem(index))
    },
  },
  created() {
    if (this.categoryParam !== 'all') {
      this.$store.commit('extractcategory', this.categoryParam)
    }
  },
  mounted() {
    if (this.categoryParam === 'all') {
      this.posts = this.$store.getters.appearItem(1)
      this.allItem = this.$store.getters.allItemLength
    } else {
      this.posts = this.$store.getters.appearCategoryItem(1)
      this.allItem = this.$store.getters.categoryItemLength
    }
  },
  watch: {
    contents() {
      for (let i = 0; i < this.allItem - this.contents + 1; i++) {
        this.getContents(this.contents + i)
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$width: 90%;
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
    margin-bottom: 30px;
  }
}
.pad {
  li {
    width: calc(#{$width} / 2);
    margin-bottom: 40px;
  }
}
.mobile {
  li {
    width: 100%;
    margin-bottom: 40px;
  }
}
.listItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
