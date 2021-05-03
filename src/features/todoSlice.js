import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //global states
  todoList: [], //outsource const [todoList, setTodoList] = useState([]) here
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //change states in store
    saveTodo: (state, action) => {
      //action will have a payload
      state.todoList.push(action.payload); //similar to setTodoList(action.payload)
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done) item.done = false;
          else item.done = true;
        }
      });
    },

    // deleteItem: (state, action) => 
  },
});

export const { saveTodo, setCheck } = todoSlice.actions; //export reducers
export const selectTodoList = (state) => state.todos.todoList; //export todoList state
export default todoSlice.reducer;
