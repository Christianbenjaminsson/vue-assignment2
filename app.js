const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
  },
});

app.mount("#events");
