import TodoList from "./components/todo/TodoList";
import TodoTemplate from "./components/todo/TodoTemplate";
import {createGlobalStyle} from "styled-components";
import TodoHead from "./components/todo/TodoHead";
import TodoCreate from "./components/todo/TodoCreate";
import {TodoProvider} from "./context/TodoContext";
import {ThemeProvider} from "./context/ThemeContext";
import GlobalTemplate from "./components/GlobalTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <ThemeProvider>
            <GlobalStyle/>
            <GlobalTemplate>
                <TodoProvider>
                    <TodoTemplate>
                        <TodoHead/>
                        <TodoList/>
                        <TodoCreate/>
                    </TodoTemplate>
                </TodoProvider>
            </GlobalTemplate>
        </ThemeProvider>
    );
}

export default App;
