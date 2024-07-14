<script setup lang="ts">
import { computed } from "vue";
import { store } from "../store/store";

const myStore = store();
const count = computed(() => myStore.count);
const doubleCount = computed(() => myStore.doubleCount);
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="myStore.increment">Increment</button>
  </div>
</template>

<style scoped></style>
