<template>
  <div class="wrapper">
    <div class="activeUser">
      <h2>Active Users</h2>
      <active-user :active-users="activeUsers"></active-user>
    </div>
    <div class="userData">
      <h2>User Data</h2>
      <user-data @user-data="handleData"></user-data>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeUsers: []
      }
    },
    methods: {
      handleData(name, age) {
        // Check if the name already exists
        const nuserExists = this.activeUsers.some(user => user.name === name && user.age === age);
        if(!nuserExists) {
          const userData = {
            name: name,
            age: age
          }
          this.activeUsers.unshift(userData);
        }
      }
    }
  }
</script>

<style lang="scss" src="./main.scss"></style>
