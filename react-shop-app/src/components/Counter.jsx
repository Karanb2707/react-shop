import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slices/CounterSlice";

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex-col">
            <div className="flex items-center justify-center gap-10 mt-10">
                <button className="p-1 border" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <div>
                    {count}
                </div>
                <button className="p-1 border" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <button className="p-1 border mt-8" onClick={() => dispatch(reset())}>
                Reset
            </button>
        </div>
    )
}

export default Counter;