import { defineStore } from 'pinia'

export const useEventsStore = defineStore({
    id: 'event_store',
    state: () => ({
        events: [],
    }),
    persist: true,
    getters: {},
    actions: {},
})
