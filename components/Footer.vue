<template>
  <footer>
    <ul>
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
  height: 150px;
  background-color: $green;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  ul {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 20px;
    li {
      padding: 0 $space;
      a {
        color: white;
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
  }
}
</style>
