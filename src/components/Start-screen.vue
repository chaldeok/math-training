<template>
  <div class="alert alert-secondary">
    <h3>Вы готовы?</h3>
    <button class="btn btn-success" @click="$emit('onStart')">
      Старт
    </button>
  </div>
</template>

<script>
export default {
  name: "Start-screen"
};
</script>

<style lang="scss" scoped>
  h3, button {
    margin: 20px 0;
  }
</style>
