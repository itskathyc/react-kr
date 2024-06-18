import { createContext } from "react";
import { useState, useContext } from "react";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);
// 매번 useContext(TodoCotext)로 길게 쓰기보단 useTodo만 주고받자

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "example-1",
      content: "example-1",
      state: 1, // 시작전
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
      state: 2, // 진행중
    },
    {
      id: 3,
      title: "example-3",
      content: "example-3",
      state: 3, // 완료
    },
  ]);

  // value값 전달은 객체나 배열로만 가능!
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
