<template>
  <div class="pageMargin pageWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <ul>
      <li v-for="post in posts" :key="post.question">
        <FaqPost :post="post" />
      </li>
    </ul>
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
    posts() {
      return this.$store.state.questionAnswer
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
