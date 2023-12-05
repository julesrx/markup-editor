import { marked } from 'marked';
import textile from 'textile-js';
import createDOMPurify from 'dompurify';

const dompurify = createDOMPurify();

import defaultValue from '~/default.md?raw';

export default defineStore('markup', () => {
    const markup = ref(localStorage.getItem('markup') || defaultValue);
    watch(markup, markup => localStorage.setItem('markup', markup));

    const mode = ref(localStorage.getItem('mode') || modes.markdown);
    watch(mode, mode => localStorage.setItem('mode', mode));

    const parsed = computed(() => {
        if (!markup.value) return '';

        switch (mode.value) {
            case modes.markdown:
            default:
                return marked(markup.value) as string;
            case modes.textile:
                return textile(markup.value);
        }
    });

    const html = computed(() => dompurify.sanitize(parsed.value));

    return { markup, mode, html };
});
