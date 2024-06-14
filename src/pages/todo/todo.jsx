import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../libs/styles/common";
import TDButton from "../../components/Button";
import AddTodoModal from "./_components/addTodoModal";
import TodoList from "./_components/todoList";
import { useState } from "react";

const Todo = () => {
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
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

  return (
    <>
      {isOpenAddTodoModal && (
        <AddTodoModal
          todos={todos}
          setIsOpenAddTodoModal={setIsOpenAddTodoModal}
          setTodos={setTodos}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>TODOLIST</S.Title>
          <TodoList todos={todos} setTodos={setTodos} />
          <TDButton
            size={"full"}
            variant={"primary"}
            onClick={() => setIsOpenAddTodoModal(true)}
          >
            추가
          </TDButton>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Todo;

// 디자인 토큰 : 디자이너가 정의해놓은 디자인 규격
// flexCenter 와 같은 것들은 계속해서 사용하는 것을 모듈화(변수화) 시켜놓았음.

const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: #ffffff; // 디자인 토큰
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  // 구조분해할당으로 {}를 통해 객체안의 값에 접근하는 경우
  color: black;
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const S = {
  Wrapper,
  Container,
  Title,
};
