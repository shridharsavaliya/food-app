import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import cartSliceUi from "./Slice/CartSliceUi";

const store = configureStore({
    reducer:{
        items:CartSlice.reducer,
        cartUi:cartSliceUi.reducer
    }
})

export default store;