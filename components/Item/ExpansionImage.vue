<template>
  <div class="modalBack flexCenter" @click="hideComponent()">
    <div class="window roundsquareImage" @click="stopHide()">
      <div class="hide">
        <FontAwesome :icon="'times'" @click.native="hideComponent()" />
      </div>
      <div class="operationTools">
        <div @click="selectImage(-1)"><p>◀︎</p></div>
        <div @click="selectImage(1)"><p>▶︎</p></div>
      </div>
      <transition-group tag="ul" class="imageList">
        <li
          v-for="(image, index) in images"
          :key="index"
          v-show="currentImage == index + 1"
        >
          <img :src="image" alt="" />
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      currentImage: 1,
    }
  },
  methods: {
    hideComponent() {
      this.$emit('hide')
    },
    stopHide() {
      event.stopPropagation()
    },
    selectImage(number) {
      if (this.currentImage > 0 && this.currentImage <= this.images.length) {
        if (
          (this.currentImage === 1 && number === -1) ||
          (this.currentImage === this.images.length && number === 1)
        ) {
        } else {
          this.currentImage = this.currentImage + number
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modalBack {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-height: none;
  z-index: 10;
  background-color: rgba($color: #000000, $alpha: 0.6);
  .window {
    width: 870px;
    height: 650px;
    background-color: white;
    z-index: 20;
    position: relative;
  }
}
.imageList {
  width: 100%;
  height: 100%;
  li {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
      padding: 30px;
    }
  }
}
.hide {
  position: absolute;
  top: 540px;
  left: 770px;
  z-index: 40;
  color: rgba($color: $green, $alpha: 0.5);
  font-size: 60px;
}
.operationTools {
  padding: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  div {
    opacity: 0;
    transition-duration: 0.2s;
    width: 12%;
    height: 100%;
    background-color: $green;
    z-index: 30;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.3;
      transition-duration: 0.2s;
    }
    p {
      color: white;
      z-index: 31;
      font-size: 40px;
      vertical-align: middle;
    }
  }
}
</style>
