import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice  = createSlice({
    name: 'counter',
    initialState,
    reducers: { //we have created two actions inside of our reducers
        increment: (state)=>{
            state.count +=1;

        },
        decrement: (state)=>{
            state.count -=1;
            
        }
    }
})
