<template>
  <IndividualItem :breadcrumbs="breadcrumbs" />
</template>

<script>
export default {
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
            path: `/item/${this.currentCategory.path}`,
          },
        ],
      }
    },
    categories() {
      return this.$store.state.item.categories
    },
  },
  created() {
    const path = this.$route.params.category
    this.currentCategory = this.categories.find(function (category) {
      return category.path === path
    })
  },
}
</script>

<style></style>
