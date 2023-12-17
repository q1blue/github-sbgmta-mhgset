<template>
  <div>
    Is overlay visible: {{ isShown }}
    <FullscreenBackground v-model="isShown" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FullscreenBackground from '../components/FullscreenBackground.vue';

const isShown = ref<boolean>(true);
</script>
