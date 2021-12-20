<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input :checked="todo.completed" type="checkbox" @change="todo.completed = !todo.completed" />
      {{ todo.title | upperCase }}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  filters: {
    upperCase(value) {
      console.log(value);
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  font-size: 30px;
  margin-bottom: 15px;
}
li button {
  position: absolute;
  right: 10px;
}
li input {
  margin-right: 10px;
}
.done {
  text-decoration: line-through;
}
</style>
