<template>
  <div class="box">
        <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Box"
    }
</script>

<style scoped>
  .box {
    width: 100%;
    max-width: 800px;
    min-height: max-content;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 15px 20px;
    text-align: left;
    background-color: rgba(250, 235, 215, 0.1);
    border-radius: 8px;
    box-shadow: 10px 10px 15px rgba(48, 37, 26, 0.3);
  }
</style>