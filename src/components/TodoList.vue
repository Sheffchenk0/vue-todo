<template>
  <div class="todo-list">
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" v-bind:todo="todo" @remove-todo="removeTodo" />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
