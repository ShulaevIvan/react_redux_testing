import { INCREMENT, DECREMENT, INCREMET_BY_AMOUNT } from "../actions/actionTypes";


const initialState = { value: 0 };


export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: Number(state.value) + 1};
        case DECREMENT:
            return {...state, value: Number(state.value) - 1};
        case INCREMET_BY_AMOUNT:
            return {...state, value: Number(state.value) + Number(action.payload)};

        default: return state;
        
    }
} 