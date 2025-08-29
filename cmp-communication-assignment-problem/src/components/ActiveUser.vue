<template>
  <section>
    <ul>
      <li v-for="user in activeUsers" :key="user.name">
        <h2>Name: {{ user.name }}</h2>
        <h3>Age: {{ user.age }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
  export default{
    props: {
      activeUsers: {
        type: Object,
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* ActiveUser.vue scoped or module styles */

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }

  h2 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
    font-weight: 600;
  }

  h3 {
    font-size: 1rem;
    color: #666;
    margin-top: 0.3rem;
    font-weight: 400;
  }
</style>