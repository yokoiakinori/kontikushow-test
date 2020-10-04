import Vue from 'vue'

Vue.mixin({
  data() {
    return { width: Number, responsiveCheck: String }
  },
  computed: {},
  watch: {
    width(width) {
      if (width < 480) {
        this.responsiveCheck = 'mobile'
      } else if (width < 880) {
        this.responsiveCheck = 'pad'
      } else {
        this.responsiveCheck = 'desktop'
      }
    },
  },
  methods: {
    handleResize() {
      if (process.client) {
        this.width = window.innerWidth
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  created() {
    this.handleResize()
  },
})
