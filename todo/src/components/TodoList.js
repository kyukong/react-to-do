import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const todos = [
    {"id" : 1, "done": true, "text": "아침 산책"},
    {"id" : 2, "done": true, "text": "오늘의 뉴스 읽기"},
    {"id" : 3, "done": false, "text": "샌드위치 사 먹기"},
    {"id" : 4, "done": false, "text": "리액트 공부하기"},
]

function TodoList() {
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    key={todo.id}
                />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
