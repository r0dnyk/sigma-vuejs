const App = {
  data () {
    return {
      background: 'yellow',
      color: 'blue'
    }
  },
  methods: {
    toggle () {
      this.background = this.background === 'yellow' ? 'blue' : 'yellow'
      this.color = this.color === 'blue' ? 'yellow' : 'blue'
    }
  }
}
Vue.createApp(App).mount('#app')