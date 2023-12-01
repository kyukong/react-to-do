import TodoList from "./components/todo/TodoList";
import TodoTemplate from "./components/todo/TodoTemplate";
import {createGlobalStyle} from "styled-components";
import TodoHead from "./components/todo/TodoHead";
import TodoCreate from "./components/todo/TodoCreate";
import {TodoProvider} from "./context/TodoContext";
import {ThemeProvider} from "./context/ThemeContext";
import ThemeTemplate from "./components/theme/ThemeTemplate";
import GlobalTemplate from "./components/GlobalTemplate";
import LeftTemplate from "./components/LeftTemplate";
import WeatherTemplate from "./components/weather/WeatherTemplate";

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
                <LeftTemplate>
                    <WeatherTemplate>날씨</WeatherTemplate>
                    <ThemeTemplate>테마 변경하기</ThemeTemplate>
                </LeftTemplate>
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
