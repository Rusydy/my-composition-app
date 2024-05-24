<script setup>
import { ref } from 'vue';
import useCounter from './useCounter';

const message = ref('Hello, world from Composition API!');

const { count, increment, decrement, setCount } = useCounter();

const INITIAL_COUNT = 0;
setCount(INITIAL_COUNT);

const reset = () => {
  setCount(INITIAL_COUNT);
};

</script>

<template>
  <h1>{{ message }}</h1>

  <h2 :class="{ 'text-danger': count < 0 }">
    Count: {{ count }}
  </h2>

  <p v-if="count === 0">
    Note: Count cannot be negative
  </p>

  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <button @click="reset">Reset</button>
</template>
