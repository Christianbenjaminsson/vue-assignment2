const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
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
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + Andersson;
    },
  },
});

app.mount("#events");
