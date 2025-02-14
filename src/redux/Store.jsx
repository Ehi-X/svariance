import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./slices/Cartslices";


const store = configureStore({
    reducer:{
        cart: Cartslices
    }
})


export default store;