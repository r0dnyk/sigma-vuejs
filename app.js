const App = {
  data () {
    return {
      new: '',
      id: 0,
      list: [{id: this.id++, text: "Learn Vue.js"}]
    }
  },
  methods: {
    addItem () {

    }
  }
}
Vue.createApp(App).mount('#app')