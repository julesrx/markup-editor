<script setup lang="ts">
const store = useStore();
</script>

<template>
    <select class="bg-transparent text-stone-700 outline-none" v-model="store.mode">
        <option v-for="m in modes" :value="m" :key="m">{{ m }}</option>
    </select>
</template>
