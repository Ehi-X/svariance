import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slices/cartslice";
import authSlice from "./slices/authSlice";


const store = configureStore({
    reducer: {
        cart: cartslice,
        auth: authSlice,
    }
})


export default store;