<template>
  <div class="pageMargin">
    <ul>
      <li v-for="post in posts" :key="post.id">
        <transition
          ><ItemPost :post="post" v-if="post.id <= appearItem"></ItemPost
        ></transition>
      </li>
    </ul>
    <button @click="addItem()" class="shadebutton">Read More</button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'ITEM',
    }
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 2,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 3,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 4,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 5,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 6,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 7,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 8,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 9,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
        {
          id: 10,
          imagepath: 'IMG_4598.jpg',
          name: '【夏限定】ゲンゴロウ木製キーホルダー',
        },
      ],

      appearColumn: 1,
    }
  },
  computed: {
    appearItem() {
      return this.appearColumn * 3
    },
  },
  methods: {
    addItem() {
      this.appearColumn++
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  width: 85vw;
  max-width: 900px;
  display: flex;
  flex-flow: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: calc(100% / 3);
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
}

button {
  width: 300px;
}
</style>
