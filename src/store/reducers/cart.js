import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer