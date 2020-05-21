<template>
  <div class="notification_window">
    <transition-group name="notification-slide-in" tag="aside">
      <Notification
        v-for="notification in notifications"
        :key="notification.index"
        :data="notification"
        @removeItem="removeItem"
      ></Notification>
    </transition-group>
  </div>
</template>

<script>
import Notification from "./Notification";

export default {
  data() {
    return {
      baseIndex: 0,
      notifications: [],
    };
  },

  components: {
    Notification,
  },

  methods: {
    removeItem(index) {
      this.notifications = this.notifications.filter((n) => n.index !== index);
    },
  },

  created() {
    Event.$on("flash", (title, body, type, display_time, important) => {
      this.notifications.push({
        title,
        body,
        type,
        display_time,
        important,
        index: this.baseIndex,
      });
      this.baseIndex += 1;
    });
  },
};
</script>

<style lang="sass">
.notification_window
    display: flex
    flex-direction: column
    justify-content: flex-end
    position: fixed
    top: 0
    bottom: 0
    right: 20px
    width: 300px
    box-sizing: border-box
    pointer-events: none

.notification-slide-in-enter,
.notification-slide-in-leave-to
    transform: translateX(350px)

.notification-slide-in-leave,
.notification-slide-in-enter-to
    transform: translateX(0)
</style>
