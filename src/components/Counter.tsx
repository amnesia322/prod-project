import {useState} from "react";
import style from "./Counter.module.scss"


export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className={style.bg}>{count}</div>
            <button onClick={increment}>inc</button>
        </div>
    )
}