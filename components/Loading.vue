<template>
  <transition>
    <div v-show="loadingActive" class="loading">
      <transition>
        <div class="centerItem logo" v-show="logoActive">
          <Logo></Logo>
        </div>
      </transition>
      <transition>
        <div class="centerItem illust" v-show="illustActive">
          <img src="/images/loadingimage.svg" alt="" />
        </div>
      </transition>
      <transition>
        <div class="centerItem copy" v-show="logoActive">
          <small>©2020 konchikushoshop. All Rights Reserved.</small>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loadingActive: Boolean,
  },
  data() {
    return {
      logoActive: false,
      illustActive: false,
    }
  },
  methods: {
    async logoAppear() {
      const wait = (ms) =>
        new Promise((resolve) => setTimeout(() => resolve(), ms))
      await wait(300)
      this.logoActive = true
    },
  },
  mounted() {
    this.illustActive = true
    this.logoAppear()
  },
}
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 30;
  background-color: white;
}
.centerItem {
  position: fixed;
  display: flex;
  width: 100vw;
  margin: auto;
  justify-content: center;
}
.logo {
  top: 110px;
  svg {
    fill: $green;
    width: 190px;
  }
}
.illust {
  top: 310px;
  img {
    width: 250px;
    height: auto;
  }
}
.copy {
  top: 580px;
}
small {
  color: $green;
  font-family: 'futura', sans-serif;
  font-weight: medium;
  font-size: 10px;
  text-align: center;
  display: inline-block;
  margin-top: 50px;
}
</style>
