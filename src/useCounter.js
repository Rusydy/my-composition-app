import { ref } from 'vue';

const useCounter = () => {
  let count = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;

    if (count.value < 0) {
      count.value = 0;
      // throw new Error('Count cannot be negative');
    }
  };

  const setCount = (value) => {
    count.value = value;
  }

  return { count, increment, decrement, setCount };
}

export default useCounter;