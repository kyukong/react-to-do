import {createContext, useContext, useReducer, useRef} from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const initialTodos = [
    {id: 1, done: true, text: "아침 산책"},
    {id: 2, done: true, text: "오늘의 뉴스 읽기"},
    {id: 3, done: false, text: "샌드위치 사 먹기"},
    {id: 4, done: false, text: "리액트 공부하기"},
];

export function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(initialTodos.length + 1);
    return (
        <>
            <TodoStateContext.Provider value={state}>
                <TodoDispatchContext.Provider value={dispatch}>
                    <TodoNextIdContext.Provider value={nextId}>
                        {children}
                    </TodoNextIdContext.Provider>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </>
    )
}

export function useTodoState() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}
