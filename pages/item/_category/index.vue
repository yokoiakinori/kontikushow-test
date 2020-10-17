<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemWrapper infinite-scroll">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <CategoryNavigation />
    <ItemList :categoryParam="currentCategory.name" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ITEM',
    }
  },
  validate({ params, store }) {
    return store.state.categories.some(
      (category) => category.path === params.category
    )
  },
  data() {
    return {
      currentCategory: Object,
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          { name: 'TOP', path: '/' },
          { name: 'ITEM', path: '/item/all' },
          {
            name: this.currentCategory.name,
          },
        ],
      }
    },
    categories() {
      return this.$store.state.categories
    },
  },
  methods: {},
  created() {
    const path = this.$route.params.category
    this.currentCategory = this.categories.find(function (category) {
      return category.path === path
    })
  },
}
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
