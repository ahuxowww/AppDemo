import { createSlice} from '@reduxjs/toolkit';
import { CartItem } from '../types'

type initialStateType = {
    CartList: CartItem[] 
};

const CartList: CartItem[] = [
    {
      id: '1',
      quantity: 1,
      title: "Apple iPhone 12, 256GB, Black - Fully Unlocked (Renewed)",
      image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5.jpg',
      price: 20.19,
      ischeck: false,
    },
    {
        id: '2',
        quantity: 2,
        title: "Apple iPhone 13, 256GB, Black - Fully Unlocked (Renewed)",
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5.jpg',
        ischeck: false,
        price: 30.49,
    },
    {
        id: '3',
        quantity: 3,
        title: "Apple iPhone 14, 256GB, Black - Fully Unlocked (Renewed)",
        image: 'https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5.jpg',
        ischeck: false,
        price: 40.99,
    },
  ];

const initialState: initialStateType = {
    CartList,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updatequantity: (state,action) => {
            const { 
                payload: {id ,quantity, ischeck},
            } = action;
            state.CartList = state.CartList.map((cart) => 
                cart.id === id
                ?
                {...cart,quantity, ischeck}
                : 
                cart,
            );
        },
        deleteCart: (state, action) => {
            state.CartList = state.CartList.filter(
            (cart) => cart.id !== action.payload.id
            );
        }
    }
});
export const { updatequantity, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;