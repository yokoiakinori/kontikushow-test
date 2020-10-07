<template>
  <div class="infinite-scroll">
    <ul>
      <li
        v-for="post in posts"
        :key="post.pagepath"
        :class="responsiveCheck"
        class="listItem"
      >
        <ItemPost :post="post" />
      </li>
    </ul>

    <infinite-loading
      ref="infiniteLoading"
      spinner="spiral"
      @infinite="addtoContents"
    >
      <span slot="no-results">アイテムがありません</span>
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
  methods: {
    addtoContents() {
      setTimeout(() => {
        this.contents += 6
        if (this.contents !== this.allItem) {
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
  mounted() {
    this.posts = this.$store.getters.appearItem(1)
    this.allItem = this.$store.getters.allItemLength
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
ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
.infinite-scroll {
  width: 100%;
}
.desktop {
  width: calc(100% / 3);
  margin-bottom: 30px;
}
.pad {
  width: calc(100% / 2);
  margin-bottom: 40px;
}
.mobile {
  width: 100%;
  margin-bottom: 40px;
}
.listItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
