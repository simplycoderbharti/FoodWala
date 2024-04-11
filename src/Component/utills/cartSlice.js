import { createSlice, current } from "@reduxjs/toolkit";

const cartItems = {
    restaurantName: "",
    restaurant_id: "",
    areaName: "",
    logo: "",
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],

    },
    reducers: {
        addItem: (state, action) => {

            state.items.push(action.payload)
        },





        removeItem: (state, action) => {
            // console.log(current(state))

            state.items.splice(action.payload, 1);
        },





        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});



export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer