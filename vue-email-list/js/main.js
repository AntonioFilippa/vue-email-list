//UTILIZZARE API BOOLEAN PER GENERARE EMAIL CASUALI TRAMITE AXIOS//
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      emailList: [],
    };
  },
  methods: {
    generateEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.emailList.push(response.data.response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.generateEmail();
  },
}).mount("#app");
