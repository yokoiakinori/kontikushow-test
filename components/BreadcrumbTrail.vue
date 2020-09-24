<template>
  <ul>
    <li v-for="breadcrumb in breadcrumbs.data" :key="breadcrumb.name">
      <nuxt-link v-if="breadcrumb.path" :to="breadcrumb.path">{{
        breadcrumb.name
      }}</nuxt-link>
      <span v-else>{{ breadcrumb.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadcrumbs: Object,
  },
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin-bottom: 30px;
}
a {
  color: $green;
  font-weight: 600;
  margin-right: 15px;
}
a,
span {
  font-size: 15px;
}
span {
  font-family: 'Hiragino Sans' !important;
  font-weight: 400 !important;
  text-decoration: none;
}
</style>
