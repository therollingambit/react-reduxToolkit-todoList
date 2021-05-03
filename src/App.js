import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from './components/TodoItem';

import { useSelector } from 'react-redux'; //grab the data
import { selectTodoList } from './features/todoSlice';

const App = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todoContainer">
          {
            todoList.map(item => (
              <TodoItem name={item.item} done={item.done} id={item.id} />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
