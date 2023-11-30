import './App.css';
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
    return (
        <div>
            <TodoTemplate>
                <TodoList />
            </TodoTemplate>
        </div>
    );
}

export default App;
