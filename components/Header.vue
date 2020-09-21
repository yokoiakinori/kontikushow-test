<template>
  <div>
    <div class="space" v-show="!mobileCheck"></div>
    <div class="headerBackground" :class="{ mobileHeader: !mobileCheck }">
      <div class="header">
        <Logo></Logo>
        <ul v-if="mobileCheck" class="Navigation">
          <li v-for="navigation in navigations" :key="navigation.id">
            <nuxt-link :to="navigation.path">{{ navigation.name }}</nuxt-link>
          </li>
          <li class="socialIcons"><SocialIcon></SocialIcon></li>
        </ul>
        <div class="mobileMenuWrapper" v-else>
          <transition tag="div">
            <font-awesome-icon
              icon="bars"
              style="font-size: 30px;"
              class="mobileMenuIcon"
              @click="menuHideAppear"
              v-if="!mobileMenuAppear"
              key="a"
            />
            <font-awesome-icon
              icon="times"
              style="font-size: 30px;"
              class="mobileMenuIcon"
              @click="menuHideAppear"
              v-else
              key="b"
            />
          </transition>
        </div>
      </div>
    </div>
    <transition>
      <ul v-show="mobileMenuAppear && !mobileCheck" class="mobileNavigation">
        <li
          v-for="navigation in navigations"
          :key="navigation.id"
          @click="menuHideAppear"
        >
          <nuxt-link :to="navigation.path">{{ navigation.name }}</nuxt-link>
        </li>
      </ul>
    </transition>
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
      mobileMenuAppear: false,
    }
  },
  computed: {
    mobileCheck() {
      if (this.width > 800) {
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
  height: 9vw;
  min-height: 60px;
  max-height: 95px;
}
.header {
  animation: 1s appear;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: auto;
  padding: 0 40px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 32%;
}
.Navigation {
  padding: 0;
  display: flex;
  height: 100%;
  width: 68%;
  justify-content: space-between;
  align-items: center;
}
a {
  font-family: 'futura', sans-serif !important;
  font-weight: normal !important;
  font-size: 17px !important;
  font-style: italic !important;
  color: $green;
  transition-duration: 0.3s;
  &:hover {
    color: rgba($green, 0.5);
    transition-duration: 0.3s;
  }
}
.socialIcons {
  margin-left: 25px;
}
.mobileHeader {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
}
.space {
  height: 60px;
}
.mobileMenuWrapper {
  position: relative;
  width: 30px;
  height: 30px;
}
.mobileMenuIcon {
  color: $green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
.mobileNavigation {
  position: fixed;
  z-index: 20;
  background-color: $yellow;
  display: flex;
  flex-flow: column;
  width: 100vw;
  align-items: center;
  padding: 0;
  li {
    height: 45px;
  }
}
</style>
