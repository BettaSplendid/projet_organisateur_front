import { defineStore } from 'pinia'

export const useCreateEventStore = defineStore({
    id: 'event_create_store',
    state: () => ({
        event: {
            name: '',
            start_date: '',
            end_date: '',
            city: '',
            postal_code: '',
            street: '',
            description: '',
        }
    }),
    persist: true,
    getters: {},
    actions: {},
})
