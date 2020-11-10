<template>
  <header>
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
            <FontAwesome
              :icon="'bars'"
              :string="'faBars'"
              class="mobileMenuIcon"
              @click.native="menuHideAppear"
              v-if="!mobileMenuAppear"
              key="a"
            /><!-- :string属性はfonstawesomeのimport自動化のために使われる。 -->
            <FontAwesome
              :icon="'times'"
              :string="'faTimes'"
              class="mobileMenuIcon"
              @click.native="menuHideAppear"
              v-else
              key="b"
            /><!-- :string属性はfonstawesomeのimport自動化のために使われる。 -->
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
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        { id: 1, name: 'HOME', path: '/' },
        { id: 2, name: 'ABOUT', path: '/about' },
        { id: 3, name: 'ITEM', path: '/item/all' },
        { id: 4, name: 'CONTACT', path: '/contact' },
        { id: 5, name: 'OTHER', path: '/other' },
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
div {
  width: 100%;
}
.headerBackground {
  width: 100%;
  background-color: $yellow;
  height: 9vw;
  min-height: 60px;
  max-height: 95px;
  display: flex;
  justify-content: center;
}
.header {
  animation: 1s appear;
  width: 95%;
  max-width: 1100px;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-family: 'futura', 'Syne', sans-serif !important;
  font-weight: 400 !important;
  font-size: 17px !important;
  font-style: italic;
  color: $green;
  transition-duration: 0.3s;
  &:hover {
    color: rgba($green, 0.5);
    transition-duration: 0.3s;
  }
}
.socialIcons {
  margin-left: 25px;
  // margin-right: 30px;
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
  font-size: 30px;
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
