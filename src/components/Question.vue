<template>
  <div class="alert">
    <h3>{{ x }} + {{ y }} = ?</h3>
    <div class="buttons">
      <button
          class="btn btn-success"
          :key="result" v-for="result in answers"
          @click="onAnswer(result)"
      >
        {{ result }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      x: mtRandom(this.settings.from, this.settings.to),
      y: mtRandom(this.settings.from, this.settings.to)
    };
  },
  props: ["settings"],
  computed: { // свойство, рассчитывающееся на основе других данных
    rightAnswer() {
      return this.x + this.y;
    },
    answers() {
      const results = [this.rightAnswer];

      while (results.length < this.settings.variants) {
        let randomNum = mtRandom(this.rightAnswer - this.settings.range, this.rightAnswer + this.settings.range);
        if (results.indexOf(randomNum === -1)) { // проверка: если массив не содержит такого числа
          results.push(randomNum);
        }
      }
      return results.sort(() => {
        return Math.random() - 0.5;
      });
    }
  },
  methods: {
    onAnswer(num) {
      if (num === this.rightAnswer) {
        this.$emit("success");
      } else {
        this.$emit("error", `${this.x} + ${this.y} = ${this.rightAnswer}!`);
      }
    }
  }
};

function mtRandom(min, max) {
  let diff = max - min;
  return Math.floor(Math.random() * (diff + 1)) + min;
}
</script>

<style lang="scss" scoped>
h3,
.btn {
  margin: 20px 0;
}

.alert {
  padding-top: 20px;
  background-color: #eee;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
</style>
