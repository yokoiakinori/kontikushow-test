<template>
  <div>
    <transition-group tag="ul" class="images">
      <li
        v-for="(image, index) in images"
        v-show="currentImage == index + 1"
        :key="index"
      >
        <nuxt-link :to="image.pagepath"
          ><img :src="image.image" alt=""
        /></nuxt-link>
      </li>
    </transition-group>
    <ul class="flexRowCenter selectButton">
      <li
        v-for="(image, index) in images"
        :key="index"
        class="margin1_side button"
        :class="{ active: currentImage == index + 1 }"
        @click="setImage(index + 1)"
      >
        ●
      </li>
    </ul>
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
  methods: {
    setImage(id) {
      this.currentImage = id
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
  position: relative;
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
  }
}
img {
  width: 100%;
  height: 100%;
  max-height: 627px;
  margin: auto;
  z-index: 2;
}
.selectButton {
  z-index: 3;
  position: absolute;
  bottom: 30px;
  li {
    cursor: pointer;
  }
}
.button {
  color: rgba($color: #fff, $alpha: 0.6);
}
.active {
  color: rgba($color: $yellow, $alpha: 0.6);
}
</style>
