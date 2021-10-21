<script lang="ts">
  import { language, MarkupLanguage } from '../store';

  const options: string[] = [];
  for (let item in MarkupLanguage) {
    if (isNaN(Number(item))) {
      options.push(item);
    }
  }

  let selected: string;
  language.subscribe((l) => (selected = l.toString())); // not working

  $: (() => language.set(MarkupLanguage[selected]))();
</script>

<nav class="h-12 flex items-center justify-between px-4 py-2 dark:bg-dark-800">
  {selected}
  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  <div>
    <i>A</i>
    <i>B</i>
  </div>
</nav>
