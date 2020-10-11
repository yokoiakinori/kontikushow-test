<template>
  <ul>
    <li v-for="breadcrumb in breadcrumbs.data" :key="breadcrumb.name">
      <p v-if="breadcrumb.path">
        <nuxt-link :to="breadcrumb.path">{{ breadcrumb.name }}</nuxt-link>
        ＞
      </p>
      <p v-else>{{ breadcrumb.name }}</p>
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
  margin-bottom: 45px;
  flex-wrap: wrap;
}
a {
  color: $green;
  font-weight: 600;
  margin-right: 15px;
}
p {
  margin-right: 15px;
}
a,
p {
  font-size: 15px;
}
</style>
