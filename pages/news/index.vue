<template>
  <!-- check for common.scss -->
  <div class="pageMargin newsWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <ul class="list">
      <li
        v-for="(post, index) in allNews"
        :key="index"
        :class="responsiveCheck"
      >
        <transition
          ><NewsPost :post="post" :index="index"></NewsPost
        ></transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: 'NEWS',
    }
  },
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'NEWS' }],
      }
    },
    ...mapGetters(['allNews']),
  },
}
</script>

<style lang="scss" scoped>
.newsWrapper {
  width: 85vw;
  max-width: 1100px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.list {
  width: 100%;
  display: flex;
  flex-flow: column;
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 50px;
  }
}
</style>
