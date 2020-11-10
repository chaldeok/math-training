import Vue from "vue";
import App from "./App.vue";

import Messages from "@/components/Messages";
import Question from "@/components/Question";
import ResultScreen from "@/components/Result-screen";
import StartScreen from "@/components/Start-screen";

Vue.component("Messages", Messages);
Vue.component("Question", Question);
Vue.component("ResultScreen", ResultScreen);
Vue.component("StartScreen", StartScreen);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
