<template>
  <div class="alert alert-primary">
    <h5>Правильных ответов: {{ stats.success }}</h5>
    <h5>Ошибочных ответов: {{ stats.error }}</h5>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">
      Повторить
    </button>
    <button class="btn btn-primary" @click="$emit('nextLevel')">
      Следующий уровень
    </button>
  </div>
</template>

<script>
export default {
  name: "Result-screen",
  props: ["stats"]
};
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 50px;
  &:nth-child(2) {
    margin-right: 0;
  }
}
</style>
