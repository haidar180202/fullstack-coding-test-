<template>
  <div class="todos-container">
    <h1>My To-Do List</h1>
    <TodoList />
  </div>
</template>

<script setup>
import TodoList from '../components/TodoList.vue';
</script>

<style scoped>
.todos-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}
</style>