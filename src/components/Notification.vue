<template>
  <transition name="slide-in">
    <div class="notification" :class="`is-${type}`" v-if="show">
      <div class="notification__title">{{ title }}</div>
      <div class="notification__body">{{ body }}</div>
      <button
        class="notification__close"
        v-if="important"
        @click="closeNotification"
      ></button>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["data"],

  data() {
    return {
      index: "",
      title: "",
      body: "",
      type: "", // success | info | error | warning
      important: false, // important messages do not time out
      display_time: 0, // how long unimportant messages stay on screen
      show: false, // display boolean
    };
  },

  methods: {
    hide() {
      if (this.important) return;
      setTimeout(() => {
        this.closeNotification();
      }, this.display_time);
    },
    closeNotification() {
      //   this.$emit("remove", this.$vnode.key);
      this.$emit("removeItem", this.index);
    },
  },

  created() {
    this.index = this.data.index;
    this.title = this.data.title ?? "";
    this.body = this.data.body ?? "";
    this.type = this.data.type ?? "";
    this.important = this.data.important ?? false;
    this.show = true;
    this.display_time = this.data.display_time ?? 5000;

    this.hide();
  },
};
</script>

<style lang="sass">
.notification
    width: 100%
    position: relative
    background: white
    padding: 20px
    margin-bottom: 10px
    margin-right: 20px
    border-radius: 4px
    overflow: hidden
    box-sizing: border-box
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.26)
    pointer-events: all
    border-left: 8px solid gray
    flex: none
    transition: all 0.3s
    // transform: translateX(350px)

    &.is-success
        border-left-color: green
    &.is-info
        border-left-color: blue
    &.is-warning
        border-left-color: yellow
    &.is-error
        border-left-color: red

.notification__title
    text-align: left
    font-size: 1.3rem
    font-weight: bold
    margin-bottom: .5rem

.notification__body
    text-align: left
    font-size: 1rem

.notification__close
    position: absolute
    top: 10px
    right: 10px
    width: 20px
    height: 20px
    display: flex
    justify-content: center
    align-items: center
    border: none
    border-radius: 50%
    cursor: pointer
    background-color: white
    color: black
    line-height: 0
    font-size: 3rem
    transition: all .3s ease
    border: 1px solid white

    &::before,
    &::after
        height: 2px
        width: 50%
        content: ""
        display: block
        position: absolute
        left: 50%
        top: 50%
        background-color: currentcolor
        transform: translateX(-50%) translateY(-50%) rotate(45deg)
        transform-origin: center center
    &::before
        width: 50%
        height: 2px
    &::after
        height: 50%
        width: 2px

    &:hover
        background-color: #eee

    &:focus
        outline: none

.modal-zoom-enter-active,
.modal-zoom-leave-active
    transition: all .5s ease

.modal-zoom-enter,
.modal-zoom-leave-to
    opacity: 0
    transform: scale(1.1)

// .modal-zoom-enter-active,
// .modal-zoom-leave-active





// .slide-in-enter-active
//     animation: slide-in .5s

// .slide-in-active
//     transform: translateX(0)
// .slide-in-leave-active
//     animation: slide-in .5s reverse

// @keyframes slide-in
//     0%
//         transform: translateX(350px)
//     100%
//         transform: translateX(0)
</style>
