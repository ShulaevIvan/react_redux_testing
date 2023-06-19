import { INCREMENT, INCREMET_BY_AMOUNT, DECREMENT, GET_USERS } from "./actionTypes";


export const increment = () => ({type: INCREMENT});
export const incrementByAmount = (val) => ({type: INCREMET_BY_AMOUNT, payload: val })
export const decrement = () => ({type: DECREMENT});

export const getUsers = () => {
    return (dispatch) => {
        fetch('url')
        .then((response) => response.json())
        .then((data) => {
            dispatch({type: GET_USERS, payload: data})
        });
    }
}