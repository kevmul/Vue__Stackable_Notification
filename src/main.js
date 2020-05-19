import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// We need an event bus to push more notifications to our list of notifications
// We can hook up Vuex to do the same thing if we want.
window.Event = new Vue();

// Flash messaging
window.flash = function(
  title,
  body = null,
  type = "success",
  important = false,
  display_time = 3000
) {
  window.Event.$emit("flash", title, body, type, important, display_time);
}; // flash('my new flash message')

new Vue({
  render: (h) => h(App),
}).$mount("#app");
