<template>
  <Transition appear>
    <div
      v-show="isShown"
      class="fullscreen-backdrop"
      @click="isShown = false"
    />
  </Transition>
</template>

<script lang="ts" setup>
const isShown = defineModel();
</script>

<style lang="scss" scoped>
.fullscreen-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 50%);

  &.v-enter-active,
  &.v-leave-active {
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.v-enter-from,
  &.v-leave-to {
    opacity: 0;
  }
}
</style>
