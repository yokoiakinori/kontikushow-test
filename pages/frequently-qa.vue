<template>
  <div class="pageMargin pageWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <ul>
      <li
        v-for="questionAnswer in questionAnswers"
        :key="questionAnswer.question"
      >
        <FaqPost :post="questionAnswer" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    ...mapState(['questionAnswers']),
  },
}
</script>

<style lang="scss" scoped>
div {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
