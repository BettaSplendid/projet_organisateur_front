import { defineStore } from 'pinia'


export const useUserStore = defineStore({
    id: 'user_store',
    state: () => ({
        token: "",
        refresh_token: "",
        id: "",
        email:"",
        name: "",
        first_name: "",
        city: "",
        country: ""
    }),
    persist: true,
    getters: {},
    actions: {},
})
