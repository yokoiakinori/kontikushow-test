<template>
  <ul class="margin4_bottom flexRowCenter" :class="responsiveCheck">
    <li
      v-for="category in categories"
      :key="category.name"
      class="margin2_side"
    >
      <nuxt-link
        :to="`/item/${category.path}`"
        :class="{ active: currentCategory.name == category.name }"
        >{{ category.name }}</nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentCategory: {
      type: Object,
      default() {
        return {
          name: 'unsetCategory',
        }
      },
    },
  },
  computed: {
    categories() {
      return this.$store.state.item.categories
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  font-size: 20px;
  font-weight: bold;
  color: $green;
}
.active {
  padding-bottom: 7px;
  border-bottom: solid 2px $green;
}
.mobile {
  flex-flow: column;
  align-items: center;
  li {
    margin-bottom: 15px;
  }
}
</style>
