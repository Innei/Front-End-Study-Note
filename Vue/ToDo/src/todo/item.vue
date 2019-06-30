<template>
  <div class="item" :class="todo.completed?'completed':''">
    <el-checkbox v-model="todo.completed">{{todo.content}}</el-checkbox>
    <el-button type="danger" icon="el-icon-delete" circle @click="del"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    del(e) {
      // 使用 `$emit` 在子组件触发一个事件

      this.$emit("del", this.todo.id);
    }
  }
};
</script>

<style>
.completed .el-checkbox__label {
  color: rgba(218, 205, 205, 0.288);
  text-decoration: line-through;
}
.item {
  left: 0;
  right: 0;
  margin-top: 0.5rem;
}
[role="checkbox"] {
  width: 80%;
}
</style>
