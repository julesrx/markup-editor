import { ref, watch, computed } from 'vue';
import { marked } from 'marked';
import textile from 'textile-js';

import defaultValue from './default-value.md';

const modes = {
  markdown: 'Markdown',
  textile: 'Textile'
};

const createStore = () => {
  const markup = ref(localStorage.getItem('markup') || defaultValue);
  watch(markup, markup => localStorage.setItem('markup', markup));

  const mode = ref(localStorage.getItem('mode') || modes.markdown);
  watch(mode, mode => localStorage.setItem('mode', mode));

  const html = computed(() => {
    if (!markup.value) return '';

    switch (mode.value) {
      case modes.markdown:
      default:
        return marked(markup.value);
      case modes.textile:
        return textile(markup.value);
    }
  });

  return {
    markup,
    mode,
    html
  };
};

export { modes };
export default createStore();
