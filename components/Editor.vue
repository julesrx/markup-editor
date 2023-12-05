<script setup lang="ts">
const store = useStore();
</script>

<template>
    <div class="relative overflow-hidden">
        <textarea
            class="bg-transparent resize-none p-5 h-screen w-full"
            v-model="store.markup"
        ></textarea>
        <ModeSelection class="absolute bottom-0 right-0 mr-4 mb-4" />
    </div>
</template>
