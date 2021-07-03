<template>
  <!-- check for common.scss -->
  <div class="pageMargin pageWrapper infinite-scroll">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <CategoryNavigation />
    <ItemList :categoryParam="'all'" />
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
    return {}
  },
  computed: {
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'ITEM' }],
      }
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start;
  align-items: center;
}
</style>
