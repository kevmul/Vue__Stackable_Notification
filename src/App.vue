<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button class="btn" @click="addNotification">Add notification</button>
    <NotificationWindow></NotificationWindow>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NotificationWindow from "./components/NotifcationWindow.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    NotificationWindow,
  },

  methods: {
    addNotification() {
      // We are going to add some dummy title and dummy body to our notifications
      const title = "Some Title";
      const body = "Some Body";
      const types = ["success", "error", "info", "warning"];
      const type = types[Math.floor(Math.random() * 4)]; // just some random type from array
      const display_time = 3000; // 3000 milliseconds = 3 seconds
      const important = Math.floor(Math.random() * 2); // random boolean
      window.Event.$emit("flash", title, body, type, display_time, important);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
