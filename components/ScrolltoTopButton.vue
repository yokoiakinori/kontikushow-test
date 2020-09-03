<template>
  <div>
    <transition>
      <button v-show="buttonActive" @click="returnTop">↑</button>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonActive: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    scrollWindow() {
      const top = 100
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
button {
  background-color: $yellow;
  width: 5vw;
  height: 5vw;
  max-width: 60px;
  max-height: 60px;
  min-width: 40px;
  min-height: 40px;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 20;
  color: $green;
  font-size: 23px;
  font-weight: 500;
}
</style>
