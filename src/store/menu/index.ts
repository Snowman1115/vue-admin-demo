import { defineStore } from 'pinia'

// Define Store
export const menuStore = defineStore('menuStore', {
    state: () => {
        return {
            collapse: false,
        }
    },
    getters: {
        getCollapse(state) {
            return state.collapse
        }
    },
    actions: {
        setCollapse(collapse: boolean) {
            this.collapse = collapse
        }
    }
})
