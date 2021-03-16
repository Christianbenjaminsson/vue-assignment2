const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addOne() {
      this.counter++;
    },
    reduceOne() {
      if (this.counter) {
        this.counter--;
      }
    },
  },
});

app.mount("#events");
