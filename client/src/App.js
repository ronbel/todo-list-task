import './App.scss';
import AddTodoInput from './components/add-todo-input/add-todo-input';
import TodoList from './components/todo-list/todo-list';


function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
