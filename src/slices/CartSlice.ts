import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../models/CartItem';
import { Cart } from '../models/Cart';

// Define a type for the slice state
type CartState = Cart;
  
// Define the initial state using that type
const initialState: CartState = {
    items: [],
    updatedAt: new Date().toISOString(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
        const actualCart = state;
        state.items = [...actualCart.items, action.payload];
        state.updatedAt = new Date().toISOString(); // Update timestamp
    },
    clearCart: (state) => {
        state.items = [];
        state.updatedAt = new Date().toISOString(); // Update timestamp
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,  clearCart} = cartSlice.actions

export default cartSlice.reducer