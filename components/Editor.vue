<script setup lang="ts">
const store = useStore();
</script>

<template>
    <div class="relative h-screen overflow-hidden text-sm">
        <textarea
            class="bg-transparent resize-none p-5 w-full h-full"
            v-model="store.markup"
            spellcheck
        ></textarea>
        <ModeSelection class="absolute bottom-0 right-0 m-2" />
    </div>
</template>
