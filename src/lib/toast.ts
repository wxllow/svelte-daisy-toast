import { toasts } from './store.js';
import { get } from 'svelte/store';

export const toast = ({
    title = '',
    message = '',
    duration = 5000,
    closable = true,
    type = 'info'
}: {
    title?: string;
    message?: string;
    duration?: number | null;
    closable?: boolean;
    type?: 'info' | 'success' | 'error' | 'warning' | null;
}) => {
    console.log({ title, message, duration, closable, type });
    const id = crypto.randomUUID() as string;
    toasts.set([
        {
            id,
            title,
            message,
            type,
            duration,
            closable
        },
        ...get(toasts)
    ]);

    return id;
};

export const close = (id: string) => {
    toasts.update((toasts) => {
        return toasts.filter((toast) => toast.id !== id);
    });
};
