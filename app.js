const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    addOne(num) {
      this.counter = this.counter + num;
    },
    reduceOne(num) {
      if (this.counter >= 5) {
        this.counter = this.counter - num;
      }
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
  },
});

app.mount("#events");
