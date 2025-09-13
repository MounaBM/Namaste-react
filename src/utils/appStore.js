import { configureStore } from "@reduxjs/toolkit";
import createSlice from './cartSlice'

const appStore = configureStore({
    reducer:{
        cart : createSlice,
    },
})

export default appStore;