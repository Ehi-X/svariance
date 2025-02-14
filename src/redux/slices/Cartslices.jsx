import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const Cartslices = createSlice({
    name: 'cart',
    initialState: { cartItem: [], cartCount: 0 },
        

    reducers: {
        addtoCart: (state, action) => {
            state.cartItem.push(action.payload);
            state.cartCount += 1;
        }
    }
})
export const { addtoCart } = Cartslices.actions
export default Cartslices.reducer