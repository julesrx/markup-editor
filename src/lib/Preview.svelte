<script lang="ts">
  import { onDestroy } from 'svelte';
  import marked from 'marked';
  import textile from 'textile-js';

  import { text, language, MarkupLanguage } from '../store';

  let markup: string;
  const m = text.subscribe(t => (markup = marked(t)));

  let lang: MarkupLanguage;
  const l = language.subscribe(m => (lang = m));

  const generateHtml = (text: string, lang: MarkupLanguage) => {
    if (!text) return '';

    switch (lang) {
      case MarkupLanguage.Markdown:
      default:
        return marked(text);

      case MarkupLanguage.Textile:
        return textile(text);
    }
  };

  $: html = generateHtml(markup, lang);

  onDestroy(() => (m(), l()));
</script>

<article class="h-full w-1/2 p-2 prose">{@html html}</article>
