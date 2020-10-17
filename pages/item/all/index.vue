<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemWrapper infinite-scroll">
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
  align-items: flex-start;
}
</style>
