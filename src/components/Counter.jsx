import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/actions/actionCreators";

const Counter = () => {
    const value = useSelector((state) => state.counterReducer.value);
    console.log(value)
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <p className="counter">{value}</p>
            <button onClick={() => dispatch(increment())}>Inc</button>
            <button onClick={() => dispatch(decrement())}>Dec</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Inc by amount</button>
        </React.Fragment>
    );
};

export default Counter;