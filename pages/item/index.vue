<template>
  <!-- check for common.scss -->
  <div class="pageMargin itemnewsWrapper">
    <BreadcrumbTrail :breadcrumbs="breadcrumbs" />
    <ul>
      <li v-for="(post, index) in posts" :key="index" :class="responsiveCheck">
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
    responsiveCheck() {
      if (this.width < 480) {
        return 'mobile'
      } else if (this.width < 800) {
        return 'pad'
      } else {
        return 'desktop'
      }
    },
    breadcrumbs() {
      return {
        data: [{ name: 'TOP', path: '/' }, { name: 'ITEM' }],
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}
.desktop {
  width: calc(100% / 3);
  margin-bottom: 30px;
}
.pad {
  width: calc(100% / 2);
  margin-bottom: 40px;
}
.mobile {
  width: 100%;
  margin-bottom: 40px;
}
button {
  width: 300px;
}
</style>
