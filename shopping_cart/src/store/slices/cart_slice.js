//  import createslice
// initilize initial this.state
// slice->name,mention initial state,action
import { createSlice } from "@reduxjs/toolkit";
// array 
const initialState = [];

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state,action){
        state.push(action.payload);
    },
    removefromcart(state,action){
        return state.filter((item)=>item.id!==action.payload)
    },
  },
});
export const {addtocart,removefromcart}=cartslice.actions;
export default cartslice.reducer;
 