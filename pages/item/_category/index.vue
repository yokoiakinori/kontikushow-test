<template>
  <!-- check for common.scss -->
  <div class="pageMargin pageWrapper infinite-scroll">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <CategoryNavigation :currentCategory="currentCategory" />
    <ItemList :categoryParam="currentCategory.name" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.currentCategory.name,
    }
  },
  validate({ params, store }) {
    return store.state.item.categories.some(
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
      return this.$store.state.item.categories
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
  align-items: center;
}
</style>
