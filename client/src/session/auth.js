import { writable } from 'svelte/store';

export const store = writable(null);

let sessions = []