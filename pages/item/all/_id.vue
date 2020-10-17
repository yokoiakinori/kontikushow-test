<template>
  <IndividualItem :breadcrumbs="breadcrumbs" />
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return {
        data: [
          { name: 'TOP', path: '/' },
          { name: 'ITEM', path: '/item/all' },
        ],
      }
    },
  },
}
</script>

<style></style>
