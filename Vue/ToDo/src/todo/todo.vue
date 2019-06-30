<template>
  <div class="wrap">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      @keyup.native.enter="additem"
      autofocus="autofocus"
    ></el-input>
    <Item :todo="todo" v-for="todo in todos" :key="todo.id" @del="delTodo"></Item>
    <!-- 监听事件触发 -->
    <tabs :filter="filter" :todos="todos"></tabs>
  </div>
</template>

<script>
import Item from "./item";
import tabs from "./tabs";
let id = 1;

export default {
  data() {
    return {
      input: "",
      todos: [
        {
          id: 0,
          content: "test",
          completed: false
        }
      ],
      filter: {
          nums: this.todos
      }
    };
  },
  methods: {
    additem(e) {
      console.log("enter!");
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
    },
    delTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    }
  },
  components: {
    Item,
    tabs
  }
};
</script>

<style scoped>
.wrap {
  padding: 4rem;
}
</style>
