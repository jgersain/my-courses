new Vue({
  el: '#app',
  data () {
    return {
      form: {
        title: '',
        time: '',
      },
      courses: [
        {
          title: 'Vue JS',
          time: 8
        }
      ],
    }
  },
  computed: {
    totalTime () {
      return this.courses.reduce(function (sum, element) {
         return sum + parseInt(element.time)
      }, 0)
    }
  },
  methods: {
    validate () {
      const { title, time } = this.form
      if (title && time && time > 0) return true
      return false
    },
    addCourse () {
      if (this.validate())
        this.courses.push(this.form)
    },
  }
})