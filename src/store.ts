import { writable } from 'svelte/store';
import { debounce } from 'lodash-es';

export const text = writable(localStorage.getItem('text'));
text.subscribe(debounce((t: string) => localStorage.setItem('text', t), 500));

export enum MarkupLanguage {
  Markdown,
  Textile,
}

export const language = writable<MarkupLanguage>(+localStorage.getItem('mode'));
language.subscribe((m: MarkupLanguage) => localStorage.setItem('mode', m.toString()));
