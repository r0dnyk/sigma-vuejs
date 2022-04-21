const App = {
  data () {
    return {
      newtask: '',
      todolist: [{ text: 'Learn Vue.js' }, { text: 'Learn Laravel' }]
    }
  },
  methods: {
    addTask () {
      this.todolist.push({
        text: this.newTask
      })
    },
    deleteTask (key) {
      this.todolist.splice(key, 1)
    }
  }
}
Vue.createApp(App).mount('#app')