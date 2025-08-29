const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      visibility: true,
      bgColor: ''
    };
  },
  computed: {
    paraVisibility() {
        return this.visibility ? 'visible' : 'hidden';
    }
  },
  methods: {
    toggleClass() {
        this.visibility = !this.visibility;
    }
  }
});

app.mount("#assignment");
