
import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action){
            let tempObj = action.payload
            if(tempObj.count){
                let count = tempObj.count
                tempObj = {...tempObj, count: count+1}
            }
            else{
                tempObj = {...tempObj, count: 1}
            }
            state.push(tempObj)
        }, 
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        },
        increment(state, action){
            console.log("hello", state);
            return state.map(item => {
                if(item.id === action.payload){
                    console.log("hii ", item.id, action.payload, item.count)
                    item = {...item, count: item.count+1}
                }
                return item
            })
        },
        decrement(state, action){
            let flag = false
            let tempState =  state.map(item => {
                if(item.id === action.payload){
                    item = {...item, count: item.count-1}
                    if(item.count == 0){
                         flag = true
                    }
                }
                return item
            })
            if(flag){
                tempState = state.filter(item => item.id !== action.payload)
            }
            return tempState
        }
    }
})

export const {add, remove, increment, decrement} =cartslice.actions;
export default cartslice.reducer;