import Vue from 'vue'

Vue.mixin({
  data() {
    return { width: Number }
  },
  computed: {
    responsiveCheck() {
      if (this.width < 480) {
        return 'mobile'
      } else if (this.width < 800) {
        return 'pad'
      } else {
        return 'desktop'
      }
    },
  },
  methods: {
    handleReisize() {
      if (process.client) {
        this.width = window.innerWidth
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleReisize)
  },
  created() {
    this.handleReisize()
  },
})
