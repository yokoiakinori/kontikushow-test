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
          {
            name: this.$store.state.item.tagKeyword,
            path: `/item/tagsearch?tagname=${this.$store.state.item.tagKeyword}`,
          },
        ],
      }
    },
  },
}
</script>

<style></style>
