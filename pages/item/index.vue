<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
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
      width: Number,
    }
  },
  computed: {
    appearItem() {
      return this.appearColumn * 3
    },
    posts() {
      return this.$store.state.item
    },
    mobileCheck() {
      if (this.width > 380) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    addItem() {
      this.appearColumn++
    },
    handleReisize() {
      if (process.client) {
        this.width = window.innerWidth
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleReisize)
  },
  created() {
    this.handleReisize()
  },
}
</script>

<style lang="scss" scoped>
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

button {
  width: 300px;
}
</style>
