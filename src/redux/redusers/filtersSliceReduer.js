import { createSlice } from '@reduxjs/toolkit'

export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        value: ''
    },
    reducers: {
        increment: state => {

            state.value ='Все'
        },

        incrementByAmount: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = CategoriesSlice.actions

export default CategoriesSlice.reducer