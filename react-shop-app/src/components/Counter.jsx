import { useSelector } from "react-redux";

const Counter = () => {

    const count = useSelector((state) => state.counter.value)

    return (
        <div className="flex items-center justify-center gap-10 mt-10">
            <button className="p-1 border">
                Increment
            </button>
            <div>
                {count}
            </div>
            <button className="p-1 border">
                Decrement
            </button>
        </div>
    )
}

export default Counter;