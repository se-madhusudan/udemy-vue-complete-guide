<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="username">Username:</label>
      <input type="text" v-model="name" id="username" placeholder="Enter your username">
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" v-model="age" id="age" min="0" max="120" placeholder="Enter your age">
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
  export default {
    emits: ['user-data'],
    data() {
      return {
        name: '',
        age: '',
      }
    },
    methods: {
      submitData() {
        this.$emit('user-data', this.name, this.age);
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* UserData.vue scoped or module styles */

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
  }

  input {
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      border-color: #6c63ff;
      outline: none;
    }
  }

  button {
    margin-top: 1rem;
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    background-color: #6c63ff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    align-self: flex-start;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #5848e5;
    }
  }
</style>