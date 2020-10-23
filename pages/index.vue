<template>
  <div class="container">
    <ImageSlide></ImageSlide>
    <div class="content">
      <LatestNews></LatestNews>
      <PopularItem></PopularItem>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
      title: 'TOP',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '「『昆』虫の知識を『蓄』えながら『商』品を作る」をコンセプトにオリジナルグッズを紹介しています。',
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.content {
  width: 90vw;
  max-width: 1000px;
}
</style>
