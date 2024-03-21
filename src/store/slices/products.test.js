import { configureStore } from '@reduxjs/toolkit'
import productsReducer, {fetchGetAllProducts} from './productsSlice.js';
describe('my reducer', () => {
    let store;
    beforeEach(() => {
        store = configureStore({
            reducer: {
                products: productsReducer
            },
        })
    })

    test('getAllProducts', () => {
        store.dispatch(fetchGetAllProducts())
        expect(store.getState().products).
        toStrictEqual({"loading": true, "products": []})
    })
})


