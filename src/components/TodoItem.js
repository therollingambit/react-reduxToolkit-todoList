import React from "react";
import "../styles/TodoItem.css";

import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from 'react-redux';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id)) //id as payload of action
    }

  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onClick={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
