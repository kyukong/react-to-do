import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import {createGlobalStyle} from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
    return (
        <div>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </div>
    );
}

export default App;
