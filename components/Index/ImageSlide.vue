<template>
  <div>
    <transition-group tag="ul" class="images">
      <li
        v-for="(image, index) in images"
        v-show="currentImage == index + 1"
        :key="index"
      >
        <img v-lazy="image.image" alt="" />
      </li>
    </transition-group>
    <!-- <ul class="selectDot">
      <li v-for="dot in images" :key="dot.id" @click="setImage(dot.id)">●</li>
    </ul> -->
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
  max-width: 1100px;
  height: 100%;
  max-height: 627px;
  object-fit: cover;
  margin: auto;
  z-index: 2;
}
.selectDot {
  display: flex;
  justify-content: center;
  margin-top: -40px;
  z-index: 10;
  li {
    font-size: 12px;
    color: white;
    opacity: 0.5;
    margin: 7px;
  }
}
</style>
