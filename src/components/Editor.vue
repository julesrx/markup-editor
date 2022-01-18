<script>
import store from '../store';

import ModeSelection from './ModeSelection.vue';

export default {
  name: 'Editor',
  components: { ModeSelection },
  setup() {
    return { markup: store.markup };
  }
};
</script>

<template>
  <div class="relative overflow-hidden">
    <textarea class="bg-transparent resize-none p-5 h-full w-full" v-model="markup"></textarea>
    <ModeSelection class="absolute bottom-0 right-0 mr-4 mb-4" />
  </div>
</template>
