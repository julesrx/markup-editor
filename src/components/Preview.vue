<script>
import store from '../store';

export default {
  name: 'Preview',
  setup() {
    return { html: store.html };
  }
};
</script>

<template>
  <article v-html="html" class="prose p-5 max-w-[none]"></article>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
strong,
blockquote,
code,
li::before {
  @apply !text-[inherit];
}
</style>
