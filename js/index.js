new Vue({
  el: '#app',
  data () {
    return {
      form: {
        title: '',
        hours: '',
      },
      courses: [
        {
          title: 'Vue JS',
          hours: 8
        }
      ],
    }
  },
  computed: {

  },
  methods: {
    validate () {
      const { title, hours } = this.form
      if (title && hours && hours > 0) return true
      return false
    },
    addCourse () {
      if (this.validate())
        this.courses.push(this.form)
    }
  }
})