<script lang="ts">
  import { onDestroy } from 'svelte';

  import { text } from '../store';

  let value: string = '';

  const u = text.subscribe((t) => (value = t));
  $: text.set(value);

  onDestroy(() => u());
</script>

<textarea class="h-full w-1/2 resize-none p-2 bg-dark-900" bind:value />
