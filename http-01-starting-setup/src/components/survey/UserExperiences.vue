<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <rise-loader class="loader" v-if="isLoading" :loading="loading" :color="loaderColor" :size="loaderSize"></rise-loader>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading &&  (!results || results.length===0)">No Data Found! Please fill some surveys.</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import RiseLoader from 'vue-spinner/src/RiseLoader.vue'

export default {
  components: {
    SurveyResult,
    RiseLoader
  },
  data() {
    return {
      results: [],
      isLoading: false,
      loaderColor: '#360032',
      loaderSize: '20px',
      error: null
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch('https://vue-http-demo-25c0e-default-rtdb.asia-southeast1.firebasedatabase.app/survey.json')
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
      }).then((data) => {
        this.isLoading = false;
        console.log(data);
        const results = [];
        for(const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }
        this.results = results;
        // console.log("Learn experiences: ",this.results[0]);
      }).catch((err) => {
        this.isLoading = false;
        console.log(err);
        this.error = 'Data fetching failed! Try again!';
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
.loader {
  margin-top: 60px;
  margin-bottom: 60px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>