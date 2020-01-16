// as const : const assertions (typescript 문법) : 액션 객체를 만들 때 TypeScript 타입이 실제값을 가르킴
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// actions function 선언
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
})

// action 객체들에 대한 type
type CounterAction =
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>;

type CounterState = {
    count: number;
}

const initialState: CounterState = {
    count: 0
}

// 리듀서 작성(리듀서 : 상태 변화를 일으키는 함수) -> ㅕ함수의 반환 타입에 상태 타입
function counter(state: CounterState = initialState, action: CounterAction){
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1};
        case DECREASE:
            return { count: state.count - 1};
        case INCREASE_BY:
            return { count: state.count + action.payload};
        default:
            return state;
    }
}

export default counter;