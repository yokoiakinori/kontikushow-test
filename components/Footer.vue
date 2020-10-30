<template>
  <footer>
    <ul :class="responsiveCheck">
      <li v-for="list in navigationLists" :key="list.name">
        <nuxt-link :to="list.path">{{ list.name }}</nuxt-link>
      </li>
    </ul>
    <small>©2020 konchikushoshop. All Rights Reserved.</small>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      navigationLists: [
        { name: '新着情報', path: '/news' },
        { name: 'プライバシーポリシー・免責事項', path: '/privacy-policy' },
        { name: 'よくある質問', path: '/frequently-qa' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$space: 15px;
footer {
  width: 100vw;
  background-color: $green;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column;
  ul {
    display: flex;
    flex-flow: wrap;
    margin: 30px 0 20px;
    li {
      padding: 0 $space;
      a {
        color: rgba($color: white, $alpha: 0.9);
        font-size: 13px;
      }
    }
  }
  small {
    color: white;
    font-family: 'futura', sans-serif;
    font-weight: medium;
    font-size: 13px;
    text-align: center;
    display: inline-block;
    margin-bottom: 45px;
  }
}

.mobile {
  flex-flow: column;
  align-items: center;
  li {
    margin-bottom: 5px;
  }
}
</style>
