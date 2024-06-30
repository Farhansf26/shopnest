import { createSlice } from "@reduxjs/toolkit";
import all_product from "../Assets/all_product";

const productSlice = createSlice({
   name: 'product',
   initialState: {
      product: all_product,
      cartItems: [],
      cartQuantity: 0,
   },
   reducers: {
      addToCart: (state, action) => {
         console.log(action.payload);
         const existItem = state.cartItems.find(item => item.id === action.payload.id && item.size === action.payload.size)
         if(existItem){
            existItem.quantity++
            existItem.priceQuantity += action.payload.price
         } else {
            const items = {
               id: action.payload.id,
               name: action.payload.name,
               image: action.payload.image,
               price: action.payload.price,
               quantity: 1,
               size: action.payload.size,
               priceQuantity: action.payload.price
            }
            state.cartItems = state.cartItems.concat(items)
            state.cartQuantity++
         }
      },
      removeFromCart: (state, action) => {
         const { id, size } = action.payload;
         const itemIndex = state.cartItems.findIndex(item => item.id === id && item.size === size);
      
         if (itemIndex !== -1) { // Pastikan item ditemukan dalam keranjang
         const existItem = state.cartItems[itemIndex];
      
         if (existItem.quantity === 1) {
            state.cartItems.splice(itemIndex, 1); // Menghapus item dari array
            state.cartQuantity--;
         } else {
            existItem.quantity--;
            existItem.priceQuantity -= action.payload.price;
         }
         }
      }
   }
})

export const getProduct = state => state.product.product
export const { addToCart, removeFromCart } = productSlice.actions
export default productSlice.reducer