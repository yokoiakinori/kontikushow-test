<template>
  <!-- check for common.scss -->
  <div class="pageMargin pageWrapper infinite-scroll">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <p>
      <span>#{{ $store.state.item.tagKeyword }}</span
      >を含むアイテム一覧
    </p>
    <ItemList :categoryParam="'tagsearch'" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `#${this.$store.state.item.tagKeyword}が含まれたアイテム一覧`,
    }
  },
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          { name: 'TOP', path: '/' },
          { name: 'ITEM', path: '/item/all' },
          { name: this.$store.state.item.tagKeyword },
        ],
      }
    },
  },
  methods: {},
  created() {
    this.$store.commit('item/setKeyword', this.$route.query.tagname)
  },
}
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
