<template>
  <div id="app">
    <h1>Математический тренажер. Уровень {{ level + 1 }}</h1>
    <hr>
    <div class="progress">
      <div class="progress-bar" :style="progressStyles"></div>
    </div>
    <div class="box">
      <transition name="flip" mode="out-in">
        <start-screen
            v-if="state === 'start'"
            @onStart="onStart"
        >
        </start-screen>
        <question
            v-else-if="state === 'question'"
            @success="onQuestionSuccess"
            @error="onQuestionError"
            :settings="levels[level]"
        >
        </question>
        <messages
            v-else-if="state === 'message'"
            :type="message.type"
            :text="message.text"
            @onNext="onNext"
        >
        </messages>
        <result-screen
            v-else-if="state === 'result'"
            :stats="stats"
            @repeat="onStart"
            @nextLevel="onNextLevel"
        >

        </result-screen>
        <div v-else>unknown state</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "start",
      stats: {
        success: 0,
        error: 0
      },
      message: {
        type: "",
        text: ""
      },
      questionsMax: 3,
      level: 0,
      levels: [
        {
          from: 10,
          to: 50,
          range: 5,
          variants: 2
        },
        {
          from: 100,
          to: 300,
          range: 20,
          variants: 4
        },
        {
          from: 500,
          to: 900,
          range: 40,
          variants: 6
        }
      ]
    };
  },
  computed: {
    testDone() {
      return this.stats.success + this.stats.error;
    },
    progressStyles() {
      return {
        width: (this.testDone / this.questionsMax * 100) + '%'
      };
    }
  },
  methods: {
    onStart() {
      this.state = "question";
      this.stats.success = 0;
      this.stats.error = 0;
    },
    onQuestionSuccess() {
      this.state = "message";
      this.message.text = "Молодец!";
      this.message.type = "success";
      this.stats.success++;
    },
    onQuestionError(msg) {
      this.state = "message";
      this.message.text = msg;
      this.message.type = "warning";
      this.stats.error++;
    },
    onNext() {
      if (this.testDone < this.questionsMax) {
        this.state = "question";
      } else {
        this.state = "result";
      }
    },
    onNextLevel() {
      this.level++;
      this.onStart();
    }
  }
};

/*import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};*/
</script>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
#app {
  max-width: 1200px;
  margin: 60px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.box {
  margin: 30px 0;
}

.flip-enter {}
.flip-enter-active {
  animation: flipInX 0.3s linear;
}
.flip-leave {}
.flip-leave-active {
  animation: flipOutX 0.3s linear;
}
@keyframes flipInX {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
@keyframes flipOutX {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(90deg);
  }
}
</style>
