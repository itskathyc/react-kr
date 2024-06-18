// 강사님은 이 컴포넌트/파일명을 OneTodo로 하셨음

import { flexAlignCenter } from "../../../libs/styles/common";
import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import { useTodo } from "../../../store/todo.store";

const TodoItem = ({ todo }) => {
  const { todos, setTodos } = useTodo();

  function updateTodo({ todoId, content }) {}

  // 상태 최적화를 위한 컴포넌트 분리 - 각각의 todoItem별 상태를 만듦
  // 상태최적화란 : 불필요한 리렌더링을 하지 않도록 최적화
  const [isEditMode, setIsEditMode] = useState(false);
  const contentRef = useRef();
  /*
  플로우
  isEditMode 의 초기값은 false
  button은 "수정"으로 출력된다. 
  onClickChangeEditMode실행을 통해 isEditMode가 true로 바뀐다. 
  그럼 button은 "완료"로 출력되고, 
  해당 버튼을 누르면 onPressEdit이 실행된다. 
  onPressEdit을 누르면 isEditMode의 값이 다시 false로 변경되면
  buttond은 "수정"으로 출력된다. 
  */
  function onClickChangeEditMode() {
    setIsEditMode(true);
  }

  function onPressEdit() {
    setIsEditMode(false);
    // const temp_todos = [...todos]
    // setTodos(temp_todos) => 새로운 값이 들어와야 다른 주소값을 인식해서 리랜더링한다.

    const todoId = todo.id;
    const content = contentRef.current.value;
    const temp_todos = [...todos];
    let selectTodoIndex = temp_todos.findIndex((todo) => todo.id === todoId);
    temp_todos[selectTodoIndex] = {
      ...temp_todos[selectTodoIndex],
      content,
    };
    setTodos(temp_todos);
  }

  function stateTitle({ stateTitle }) {
    switch (stateTitle) {
      case 0:
        return "[시작전]";
      case 1:
        return "[진행중]";
      case 2:
        return "[완료]";
      default:
        return "[시작전]";
    }
  }

  function onClickChangeState({ newState }) {
    // todo.state를 newState로 바꿔라.
    console.log("새로운 스테이트 : ", newState);
    stateTitle({ newState });
  }

  function onClickDeleteTodo() {
    const todoId = todo.id;
    const deletedTodo = todos.filter((todo) => todo.id !== todoId);
    setTodos(deletedTodo);
  }

  return (
    <S.Wrapper state={todo.state}>
      <S.Header>
        <div>
          {stateTitle({ stateTitle: todo.state })}
          {todo.title}
        </div>
        <div>
          <button onClick={isEditMode ? onPressEdit : onClickChangeEditMode}>
            {isEditMode}
            {isEditMode ? "완료" : "수정"}
          </button>
          <button onClick={onClickDeleteTodo}>삭제</button>
        </div>
      </S.Header>
      {isEditMode ? (
        <textarea ref={contentRef} defaultValue={todo.content}></textarea>
      ) : (
        <S.Content state={todo.state}>{todo.content}</S.Content>
      )}
      <S.ButtonContent>
        <div>
          <button onClick={() => onClickChangeState({ newState: 1 })}>
            시작전
          </button>
          <button onClick={() => onClickChangeState({ newState: 2 })}>
            진행중
          </button>
          <button onClick={() => onClickChangeState({ newState: 3 })}>
            완료
          </button>
        </div>
      </S.ButtonContent>
    </S.Wrapper>
  );
};

export default TodoItem;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state === 2 ? theme.colors.Gray[1] : theme.colors.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  justify-content: space-between;
  padding: 8px 16px;
  height: 48px;
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state === 2 ? "line-through" : "none")};
`;

const ButtonContent = styled.div`
  // 버튼 사이 띄우는 css 어떻게 줄까요? ㅠ?
  display: flex;
  justify-content: center;
`;

const S = {
  Wrapper,
  Header,
  Content,
  ButtonContent,
};
