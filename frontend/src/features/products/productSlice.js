import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getproducts } from "./productsService";



const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
  
}
const productSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true

            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload

            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isSuccess = false
                    state.isError = true


            })
         


    }

})
export default productSlice.reducer

export const fetchProducts = createAsyncThunk("FETCH/PRODUCT", async () => {
    try {
   
        return await getproducts()

    } catch (error) {
        console.log(error)
    }
})


