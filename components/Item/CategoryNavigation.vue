<template>
  <ul>
    <li v-for="category in categories" :key="category.name">
      <nuxt-link :to="`/item/${category.path}`">{{ category.name }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.item.categories
    },
  },
}
</script>

<style></style>
