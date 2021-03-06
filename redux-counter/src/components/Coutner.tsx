// presentational / container 구조 사용
import React from 'react'

type CounterProps = {
    count: number
    onIncrease: () => void;
    onDecrease: () => void;
    onIncreaseBy: (diff:number) => void;
}

function Counter({
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy}: CounterProps) {
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
                <button onClick={() => onIncreaseBy(+3)}>+3</button>
            </div>
        )
    }

export default Counter;