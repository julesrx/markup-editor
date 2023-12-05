<script setup lang="ts">
const store = useStore();

const textarea = ref<HTMLTextAreaElement>();
onMounted(() => {
    if (!textarea.value) return;

    const tab = '  ';

    textarea.value.addEventListener('keydown', async e => {
        const textarea = e.target as HTMLTextAreaElement;
        if (e.code !== 'Tab') return;

        e.preventDefault();

        let newValue;
        const selectionStart = textarea.selectionStart;
        const currentValue = textarea.value;

        if (currentValue) {
            const valueBefore = textarea.value.substring(0, selectionStart);
            const valueAfter = textarea.value.substring(selectionStart);

            newValue = valueBefore + tab + valueAfter;
        } else {
            newValue = tab;
        }

        store.markup = newValue;

        await nextTick();

        textarea.selectionStart = selectionStart + tab.length;
        textarea.selectionEnd = textarea.selectionStart;
    });
});
</script>

<template>
    <div class="relative overflow-hidden text-sm">
        <textarea
            class="bg-transparent resize-none p-5 w-full h-full"
            v-model="store.markup"
            spellcheck
            ref="textarea"
        ></textarea>
        <ModeSelection class="absolute bottom-0 right-0 m-2" />
    </div>
</template>
