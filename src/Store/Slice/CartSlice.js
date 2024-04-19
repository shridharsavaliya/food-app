import { createSlice, current } from "@reduxjs/toolkit"


const item = localStorage.getItem("CartItems") !== null ? JSON.parse(localStorage.getItem("CartItems")) : []
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0
const totalPrice = localStorage.getItem("totalprice") !== null ? JSON.parse(localStorage.getItem("totalprice")) : 0

const setlocalStorageItem = (item,totalQuantity,totalPrice) =>{
    localStorage.setItem("CartItems", JSON.stringify(item))
    localStorage.setItem("totalQuantity",JSON.stringify(totalQuantity))
    localStorage.setItem("totalprice",JSON.stringify(totalPrice))
}

const initialState = {
    cartItems:item,
    totalQuantity:totalQuantity,
    totalPrice:totalPrice,

}


const CartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        Add(state,action){
            // console.log(action.payload);
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01:newItem.image01,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice += Number(newItem.price)

            }
            
            console.log(current(state.cartItems));
            state.totalPrice = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)
            
            setlocalStorageItem(state.cartItems.map((item) => item),
            state.totalQuantity,            
            state.totalPrice,
        )
            return state;
        },
        Remove(state,action){
            const newitem = action.payload;
            const existingitem = state.cartItems.find(item => item.id === newitem.id)
            state.totalQuantity--
            if(existingitem.quantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== newitem.id)
            }
            else{
                existingitem.quantity--
                existingitem.totalprice = Number(existingitem.totalprice) - Number(newitem.price)
            }
            state.totalPrice = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)

            setlocalStorageItem(state.cartItems.map((item) => item),
            state.totalQuantity,            
            state.totalPrice,
        )
            return state;
        },
        Delete(state,action){
            const newitem = action.payload;
            const existingitem = state.cartItems.find(item => item.id === newitem.id)
            if(existingitem){
                state.cartItems = state.cartItems.filter((item) => item.id !== newitem.id)
                state.totalQuantity = state.totalQuantity - existingitem.quantity
            }
            state.totalPrice = state.cartItems.reduce((total,item) => total + (Number(item.price) * Number(item.quantity)),0)

            setlocalStorageItem(state.cartItems.map((item) => item),
            state.totalQuantity,            
            state.totalPrice,
        )
            return state;
        },
    }
})
export const cartAction = CartSlice.actions;
export default CartSlice;