import { defineStore } from 'pinia'

export const useEventStore = defineStore({
    id: 'event_store',
    state: () => ({
        events: [],
    }),
    persist: true,
    getters: {},
    actions: {},
})
