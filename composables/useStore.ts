import { marked } from 'marked';
import textile from 'textile-js';
import createDOMPurify from 'dompurify';
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';

const dompurify = createDOMPurify();

import defaultValue from '~/default.md?raw';

export default defineStore('markup', () => {
    const route = useRoute();
    const router = useRouter();

    const markup = ref<string>(
        (() => {
            const hash = route.hash.replace('#', '');
            if (!hash) return defaultValue;

            try {
                return decompressFromEncodedURIComponent(hash);
            } catch {
                return defaultValue;
            }
        })()
    );

    watchDebounced(
        markup,
        markup => {
            if (!markup) return router.replace({});

            const hash = compressToEncodedURIComponent(markup);
            router.replace({ hash: `#${hash}` });
        },
        { debounce: 500 }
    );

    const mode = ref<string>(localStorage.getItem('mode') || modes.markdown);
    watch(mode, mode => localStorage.setItem('mode', mode));

    const parsed = computed<string>(() => {
        if (!markup.value) return '';

        switch (mode.value) {
            case modes.markdown:
            default:
                return marked(markup.value, { gfm: true }) as string;
            case modes.textile:
                return textile(markup.value);
        }
    });

    const html = computed<string>(() => {
        const sanitized = dompurify.sanitize(parsed.value);

        const el = document.createElement('div');
        el.innerHTML = sanitized;

        const links = el.getElementsByTagName('a');
        for (const link of links) {
            if (link.href.includes('http://') || link.href.includes('https://')) {
                link.target = '_blank';
                link.rel = 'nofollow';
            }
        }

        return el.innerHTML;
    });

    return { markup, mode, html };
});
