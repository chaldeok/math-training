<template>
  <div class="alert" :class="'alert-' + type">
    <h3>{{ text }}</h3>
    <button
        class="btn btn-primary"
        @click="$emit('onNext')"
    >
      Продолжить
    </button>
  </div>
</template>

<script>
export default {
  name: "Messages",
  props: ["type", "text"] // параметры, которые принимает компонент
};
</script>

<style scoped>
h3,
.alert {
  text-align: center;
}
.btn {
  margin: 20px 0;
}
</style>
