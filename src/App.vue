<script setup>
import Editor from './components/Editor.vue';
import Preview from './components/Preview.vue';
</script>

<template>
  <main class="grid grid-cols-2 h-screen divide-x divide-dark-500">
    <Editor />
    <Preview />
  </main>
</template>
