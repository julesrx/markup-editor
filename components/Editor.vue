<script setup lang="ts">
const store = useStore();

const textarea = ref<HTMLTextAreaElement>();
onMounted(() => {
    if (!textarea.value) return;

    const tab = '  ';

    useEventListener(textarea.value, 'keydown', async e => {
        if (e.code !== 'Tab') return;

        e.preventDefault();

        const target = e.target as HTMLTextAreaElement;

        let newValue;
        const selectionStart = target.selectionStart;
        const currentValue = target.value;

        if (currentValue) {
            const valueBefore = target.value.substring(0, selectionStart);
            const valueAfter = target.value.substring(selectionStart);

            newValue = valueBefore + tab + valueAfter;
        } else {
            newValue = tab;
        }

        store.markup = newValue;

        await nextTick();

        target.selectionStart = selectionStart + tab.length;
        target.selectionEnd = target.selectionStart;
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
