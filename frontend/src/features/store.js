import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth/authSlice'
import productReducer from './products/productSlice'

const store =configureStore({
    reducer: {
        auth: authReducer,
        bag:productReducer
    }
})
export default store
