import {createContext} from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

const initialTodos = [
    {id: 1, done: true, text: "아침 산책"},
    {id: 2, done: true, text: "오늘의 뉴스 읽기"},
    {id: 3, done: false, text: "샌드위치 사 먹기"},
    {id: 4, done: false, text: "리액트 공부하기"},
];

export function TodoProvider({children}) {
    return (
        <>
            {children}
        </>
    )
}
