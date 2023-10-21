import { writable } from 'svelte/store';
import type { Toast } from './types.js';

export const toasts = writable<Toast[]>([]);
