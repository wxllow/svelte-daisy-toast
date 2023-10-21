export type Toast = {
    id: string;
    title?: string;
    message?: string;
    type: 'info' | 'success' | 'error' | 'warning' | null;
    duration: number | null; // Duration in ms;
    closable: boolean;
};
