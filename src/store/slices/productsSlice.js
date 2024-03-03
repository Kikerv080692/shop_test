
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getAllProducts} from "@/services/products.js";


// Опис асинхронної функції для отримання даних
export const fetchGetAllProducts = createAsyncThunk(
    'products/fetchGetAllProducts',
 async () => {
     const response = await getAllProducts()
     console.log('response',response)
     return  response
});



const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGetAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchGetAllProducts.rejected, (state) => {
                state.loading = false;
                // Обробка помилок, якщо потрібно
            });
    },
});

export default productsSlice.reducer;
