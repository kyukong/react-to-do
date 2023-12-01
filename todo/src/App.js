import TodoList from "./components/todo/TodoList";
import TodoTemplate from "./components/todo/TodoTemplate";
import {createGlobalStyle} from "styled-components";
import TodoHead from "./components/todo/TodoHead";
import TodoCreate from "./components/todo/TodoCreate";
import {TodoProvider} from "./context/TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <TodoProvider>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
