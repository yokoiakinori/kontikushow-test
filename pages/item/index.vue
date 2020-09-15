<template>
  <div class="pageMargin">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <transition
          ><ItemPost
            :post="post"
            :index="index"
            v-if="index < appearItem"
          ></ItemPost
        ></transition>
      </li>
    </ul>
    <button @click="addItem()" class="shadebutton">Read More</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ITEM',
    }
  },
  data() {
    return {
      appearColumn: 1,
    }
  },
  computed: {
    appearItem() {
      return this.appearColumn * 3
    },

    posts() {
      return this.$store.state.item
    },
  },
  methods: {
    addItem() {
      this.appearColumn++
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 85vw;
  max-width: 900px;
  display: flex;
  flex-flow: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
}

button {
  width: 300px;
}
</style>
