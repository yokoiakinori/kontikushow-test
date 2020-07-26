<template>
  <div class="headerBackground">
    <div class="header">
      <div class="logo">ロゴ</div>
      <ul v-show="!mobileCheck">
        <li v-for="navigation in navigations" :key="navigation.id">
          <nuxt-link :to="navigation.path">{{ navigation.name }}</nuxt-link>
        </li>
      </ul>
      <div class="mobileMenuWrapper" v-show="mobileCheck">
        <transition tag="div">
          <font-awesome-icon
            icon="bars"
            style="font-size: 30px;"
            class="mobileMenu"
            @click="menuHideAppear"
            v-if="mobileMenuAppear"
            key="a"
          />
          <font-awesome-icon
            icon="times"
            style="font-size: 30px;"
            class="mobileMenu"
            @click="menuHideAppear"
            v-else
            key="b"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'NEWS', path: '/news' },
        { id: 3, name: 'ABOUT', path: '/about' },
        { id: 4, name: 'ITEM', path: '/item' },
        { id: 5, name: 'CONTACT', path: '/contact' },
      ],
      width: Number,
      mobileMenuAppear: true,
    }
  },
  computed: {
    mobileCheck() {
      if (this.width <= 380) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    handleReisize() {
      if (process.client) {
        this.width = window.innerWidth
      }
    },
    menuHideAppear() {
      this.mobileMenuAppear = !this.mobileMenuAppear
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
.headerBackground {
  width: 100vw;
  background-color: $yellow;
  height: 105px;
}
.header {
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 20%;
}
ul {
  padding: 0;
  display: flex;
  height: 100%;
  width: 45%;
  justify-content: space-between;
  align-items: center;
}
li {
  font-family: futura;
  font-weight: medium;
  font-size: 18px;
  font-style: italic;
  a {
    color: $green;
    transition-duration: 0.3s;
    &:hover {
      color: rgba($green, 0.5);
      transition-duration: 0.3s;
    }
  }
}
.mobileMenuWrapper {
  position: relative;
  width: 30px;
  height: 30px;
}
.mobileMenu {
  color: $green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
