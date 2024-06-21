import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TodoModal from './TodoModal';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC = () => {
  const title: string = '오늘 할일';

  /**
   * state
   */
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '공부하기', isChecked: false },
    { id: 2, text: '잠자기', isChecked: false },
    { id: 3, text: '미팅하기', isChecked: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  /**
   * handler
   */

  // 할 일 체크박스 핸들러
  const handleCheckedChange = (itemId: number) => {
    setTodos(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // 할 일 추가
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setNewTodo('');
    }
  };

  // 할 일 삭제
  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 할 일 상세 정보 모달 열기
  const handleTodoClick = (todo: Todo) => {
    setShowDetail(true);
    setSelectedTodo(todo);
  };

  // 할 일 상세 정보 모달 닫기
  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="container">
      <h1>{title}</h1>
      <div>
        <input
          type="text"
          placeholder="할일 입력"
          style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
          onChange={e => setNewTodo(e.target.value)}
        />
        <Button variant="warning" onClick={addTodo}>
          추가
        </Button>
      </div>
      <p></p>
      <div className="board">
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => {
                  handleCheckedChange(todo.id);
                }}
              />
              <span onClick={() => handleTodoClick(todo)}>
                {todo.isChecked ? (
                  <del>{todo.text}</del>
                ) : (
                  <span>{todo.text}</span>
                )}
              </span>
              <button onClick={() => removeTodo(todo.id)} className="delbutton">
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>
      <TodoModal
        show={showDetail}
        todo={selectedTodo}
        handleClose={handleCloseDetail}
      />
    </div>
  );
};

export default TodoList;
