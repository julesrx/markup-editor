<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Editor from './lib/Editor.svelte';
  import Preview from './lib/Preview.svelte';

  /**
   * markup switch
   * sync scrollbars
   * share btn
   * theme swtich
   * preview/editor only
   */
</script>

<Nav />
<main class="w-screen flex" style="height: calc(100vh - 3rem);">
  <Editor />
  <Preview />
</main>
