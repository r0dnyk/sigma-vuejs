const App = {
  data () {
    return {
      message: 'There must be a lot of letters here',
      alert: 'Enough fun!',
      background: 'yellow',
      color: 'blue',
      counter: 0
    }
  },
  methods: {
    toggle () {
      this.background = this.background === 'yellow' ? 'blue' : 'yellow'
      this.color = this.color === 'blue' ? 'yellow' : 'blue'

      if (this.counter < 4) {
        this.counter++
      } else {
        this.message = this.alert
      }
    }
  }
}
Vue.createApp(App).mount('#app')