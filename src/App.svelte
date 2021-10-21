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

  //  var $tb1 = $('textarea[id$=tb1]');
  //           var $tb2 = $('textarea[id$=tb2]');
  //           $tb1.scroll(function() {
  //               $tb2.scrollTop($tb1.scrollTop());
  //           });
</script>

<Nav />
<main class="w-screen flex divide-x-2 dark:divide-dark-800">
  <Editor />
  <Preview />
</main>

<style>
  main {
    height: calc(100vh - 3rem);
  }
</style>
