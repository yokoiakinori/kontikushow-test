<template>
  <div>
    <transition-group tag="ul" class="images">
      <li
        v-for="(image, index) in images"
        v-show="currentImage == index + 1"
        :key="index"
      >
        <img :src="image.image" alt="" />
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImage: 1,
    }
  },
  computed: {
    images() {
      return this.$store.state.slideImage
    },
  },
  watch: {
    currentImage() {
      this.autoSlide()
    },
  },
  mounted() {
    this.autoSlide()
  },
  methods: {
    setImage(id) {
      this.currentImage = id
    },
    async autoSlide() {
      const wait = (ms) =>
        new Promise((resolve) => setTimeout(() => resolve(), ms))
      await wait(6000)
      if (this.currentImage > this.images.length - 1) {
        this.currentImage = 1
      } else {
        this.currentImage++
      }
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 100vw;
  height: 57vw;
  max-height: 627px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
.images {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  li {
    width: 100%;
    height: 100%;
    max-height: 627px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color: $yellow, $alpha: 0.5);
  }
}
img {
  width: 100%;
  height: 100%;
  max-height: 627px;
  margin: auto;
  z-index: 2;
}
</style>
