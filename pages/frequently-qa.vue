<template>
  <div class="pageMargin pageWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'よくある質問',
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'よくある質問' }],
      }
    },
  },
}
</script>

<style></style>
