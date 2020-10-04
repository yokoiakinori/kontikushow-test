<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
    <ul>
      <li v-for="(post, index) in posts" :key="index" :class="responsiveCheck">
        <transition
          ><NewsPost :post="post" :index="index"></NewsPost
        ></transition>
      </li>
    </ul>
  </div>
</template>

<script>
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
    posts() {
      return this.$store.getters.allNews
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
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
