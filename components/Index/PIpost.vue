<template>
  <div>
    <nuxt-link
      :to="`/item/all/${post.pagepath}`"
      class="imageLink roundsquareImage"
      :class="responsiveCheck"
    >
      <img v-lazy="post.image1" alt="" />
    </nuxt-link>
    <div class="information">
      <nuxt-link :to="`/item/all/${post.pagepath}`">
        <p class="date">{{ simpleDate }}</p>
        <p class="name">{{ post.name }}</p></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    simpleDate() {
      return this.post['created-date'].replace(/-\S{1,}/, '')
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: column;
}
img {
  width: 100%;
  height: 100%;
}
.desktop {
  height: 20vw;
  max-height: 220px;
}
.mobile {
  height: 70vw;
}
.information {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}
.date {
  color: $green;
  font-size: 13px;
}
.name {
  color: black;
}
a {
  font-family: 'Hiragino Sans';
  font-weight: 500;
  color: $green;
  font-size: 13px;
}
p {
  font-family: 'Hiragino Sans';
  font-weight: 500;
}
</style>
