const App = {
  data () {
    return {
      first_name: '',
      last_name: '',
      gender: 'male',
      color: 'lightblue',
      warning: ''
    }
  },
  methods: {
    toggle () {
      this.gender = this.gender === 'male' ? 'female' : 'male'
      this.color = this.color === 'lightblue' ? 'pink' : 'lightblue'
    }
  }
}
Vue.createApp(App).mount('#app')