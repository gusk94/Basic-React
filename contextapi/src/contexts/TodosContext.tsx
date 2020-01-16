// 상태전용 context
import React, { createContext, Dispatch, useReducer, useContext } from 'react'

// 다른 component 에서 사용 가능
export type Todo = {
    id:number,
    text:string,
    finished:boolean
}

type TodoState = Todo[];

const TodosStateContext = createContext<TodoState | undefined>(undefined);

// 액션 타입 설정
type Action = | {type: 'CREATE'; text: string} | {type:'TOGGLE', id:number} | {type: 'REMOVE'; id:number}

// dispatch
type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(undefined);


// 리듀서
function todosReducer(state: TodoState, action: Action): TodoState {
    switch (action.type) {
        case 'CREATE':
            const currentId = Math.max(...state.map(todo=>todo.id))
            let nxtId;
            if (currentId === -Infinity){
                nxtId = 1
            } else {
                nxtId = currentId + 1
            }
            return state.concat({
                id:nxtId,
                text: action.text,
                finished: false
            })
        case 'TOGGLE':
            return state.map(todo=> todo.id === action.id ? {...todo, finished: !todo.finished} : todo)
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Unhandled action!')
    }
}

// TodosStateContext + TodosDispatchContext's Provider 함께 사용
export function TodosContextProvider({children}: {children:React.ReactNode}){
    const [todos, dispatch] = useReducer(todosReducer, [])

    return (
        <TodosDispatchContext.Provider value={dispatch}>
            <TodosStateContext.Provider value={todos}>
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

// 유효성 검사
export function useTodosState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state
}

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch
}