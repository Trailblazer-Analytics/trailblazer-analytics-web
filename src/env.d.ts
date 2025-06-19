/// <reference path="../.astro/types.d.ts" />

export {};

declare global {
  interface Window {
    openGatedModal: (title: string, description: string, downloadUrl?: string) => void;
    closeGatedModal: () => void;
    clearFilters: () => void;
    gtag: (command: string, eventName: string, parameters?: any) => void;
  }
}