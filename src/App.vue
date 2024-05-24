<script setup>
import { ref } from 'vue';

const message = ref('Hello, world from Composition API!');
</script>

<template>
  <h1>{{ message }}</h1>
</template>
