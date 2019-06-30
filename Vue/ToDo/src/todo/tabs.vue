<template>
  <div class="helper">
    <span class="total">{{unCompletedTodo ? '还剩 ' + unCompletedTodo + ' 个 ToDo' : ''}}</span>
    <span class="right" @click="clear"> <el-button type="danger" plain :disabled="!todos.length">清空</el-button></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: ["all", "active", "complete"],
      num: 0
    };
  },
  props: {
    filter: {
      type: Object,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    unCompletedTodo() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    clear() {
      this.todos.splice(0, this.todos.length)
    }
  }
};
</script>

<style>
.right {
  float: right
}
.helper {
  margin-top: .5rem;
}
</style>
