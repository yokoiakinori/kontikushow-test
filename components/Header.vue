<template>
  <div class="headerBackground">
    <div class="header">
      <div class="logo">ロゴ</div>
      <ul>
        <li v-for="navigation in navigations" :key="navigation.id">
          <nuxt-link :to="navigation.path">{{ navigation.name }}</nuxt-link>
        </li>
      </ul>
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
    }
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
</style>
