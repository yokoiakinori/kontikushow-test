<template>
  <IndividualItem :categoryParam="currentCategory.name" />
</template>

<script>
export default {
  data() {
    return {
      currentCategory: Object,
    }
  },
  computed: {
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
