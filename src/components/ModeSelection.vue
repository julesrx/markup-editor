<script>
import store, { modes } from '../store';

export default {
  setup() {
    return { mode: store.mode, modes };
  }
};
</script>

<template>
  <select class="bg-dark-900 text-dark-50" v-model="mode">
    <option v-for="mode in modes" :value="mode">{{ mode }}</option>
  </select>
</template>
