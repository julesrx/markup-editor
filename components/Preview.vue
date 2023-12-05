<script setup lang="ts">
const store = useStore();
</script>

<template>
    <article
        v-html="store.html"
        class="prose prose-stone prose-invert prose-sm p-5 max-w-[none] h-screen"
    ></article>
</template>
