import './App.css';

import TodoList from './Todolist';
import Clock from './Clock';
import MyWeather from './MyWeather';

function App() {
  const name = '리액트 실습';
  return (
    <div className="App">
      <h1>{name}</h1>
      <TodoList />
      <Clock />
      <MyWeather weather="비">
        <h2>일기예보</h2>
      </MyWeather>
    </div>
  );
}

export default App;
