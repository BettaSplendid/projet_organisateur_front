import { defineStore } from 'pinia'

export const useEventsStore = defineStore({
    id: 'events_store',
    state: () => ({
        events: [],
    }),
    persist: true,
    getters: {},
    actions: {},
})
