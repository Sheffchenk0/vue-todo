<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr />
    <Loader v-if="loader" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>gg</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
export default {
  data() {
    return {
      todos: [],
      filter: 'all',
      loader: true,
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  mounted() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then((response) => response.json())
        .then((json) => (this.todos = json))
        .then(() => (this.loader = false));
    }, 1000);
  },
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'all':
          return this.todos;
        case 'completed':
          return this.todos.filter((el) => el.completed);
        case 'not-completed':
          return this.todos.filter((el) => !el.completed);
        default:
          break;
      }

      if (this.filter === 'all') {
      }
    },
  },
  methods: {
    removeTodo(id) {
      console.log(id);
      this.todos = this.todos.filter((el) => el.id !== id);
    },
    addTodo(todo) {
      console.log('fff');
      this.todos = [...this.todos, todo];
    },
  },
};
</script>
