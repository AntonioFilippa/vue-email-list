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
      const requests = [];
      for (let i = 0; i < 10; i++) {
        requests.push(
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        );
      }

      Promise.all(requests)
        .then((responses) => {
          responses.forEach((response) => {
            this.emailList.push(response.data.response);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.generateEmail();
  },
}).mount("#app");
