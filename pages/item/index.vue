<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <ul>
      <li v-for="(post, index) in posts" :key="index" :class="responsiveCheck">
        <transition
          ><ItemPost :post="post" :index="index"></ItemPost
        ></transition>
      </li>
    </ul>
    <infinite-loading
      v-if="hasNext"
      @infinite="infiniteHandler"
      spinner="spiral"
      direction="bottom"
    >
      <div slot="no-more">これ以上アイテムはありません。</div>
      <div slot="no-results">ご希望のアイテムはありません。</div>
    </infinite-loading>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ITEM',
    }
  },
  data() {
    return {
      items: [],
      startPage: 0,
      endPage: 0,
      totalPages: 0,
      pageSize: 6,
      initialized: false,
    }
  },
  computed: {
    posts() {
      return this.$store.state.item
    },
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'ITEM' }],
      }
    },
    hasNext() {
      return this.initialized && this.totalPages > this.endPage
    },
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
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
</style>
