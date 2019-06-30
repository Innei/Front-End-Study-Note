<template>
  <div class="footer">
    <p @click="change">{{author}}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      author: "Innei"
    };
  },
  methods: {
    change() {
      this.author = this.author == "yiny" ? "Innei" : "yiny";
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  width: 5rem;
}
</style>

