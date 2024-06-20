import './App.css';

import TodoList from './Todolist';

function App() {
  const name = '리액트 실습';
  return (
    <div className="App">
      <h1>{name}</h1>
      <TodoList />
    </div>
  );
}

export default App;
