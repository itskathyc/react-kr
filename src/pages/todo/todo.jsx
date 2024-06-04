import styled from "styled-components";
import { flexCenter, flexAlignCenter } from "../../libs/styles/common";
import TDButton from "../../components/Button";
import AddTodoModal from "./_components/addTodoModal";
import TodoList from "./_components/todoList";

const Todo = () => {
  // isOpenAddTodoModal 변수가 하는 역할은 무엇일까
  // isOpenAddTodoModal이 true 일 때만 addMModal을 보여주기 위함
  let isOpenAddTodoModal = false;

  // todos는 todoList 컴포넌트가 아니라 상위인 todo에 있어야하는 이유
  // todos는 todo data로 이루어진 배열

  // props는 상위에서 하위로만 보낼 수 있음. 그래서 todos에 해당 데이터가 있어야하는 이유는 부모 컴포넌트가 알고 있어야하기 때문이다.
  // todos는 todo 목록을 보여주는 todoList 컴포넌트에도 필요하지만, todo를 추가하는 addTodoModal에도 필요하기 때문에 부모인 Todo 컴포넌트가 갖고 있어야함.

  // 이것이 과연 옳을까?
  // 하위 컴포넌트에게 전달을 하기 위해서 상위 컴포넌트가 값을 알아야한다?
  // todo는 상태다 (이것이 바뀌면 화면이 바뀐다 ? 그럼 그것은 상태로 둬야한다)
  // todo(상태) --> 전역으로 만드는 것이 불가능 --> 전역 상태

  const todos = [
    {
      id: 1,
      title: "example-1",
      content: "example-1",
      state: true,
    },
    {
      id: 2,
      title: "example-2",
      content: "example-2",
      state: false,
    },
  ];

  return (
    <>
      {isOpenAddTodoModal && <AddTodoModal todos={todos} />}
      <S.Wrapper>
        <S.Container>
          <S.Title>TODOLIST</S.Title>
          <TodoList todos={todos} />
          <TDButton size={"full"} variant={"primary"}>
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
  background-color: "#ffffff"; // 디자인 토큰
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  // 구조분해할당을 하지 않은 경우
  background-color: ${(props) => props.theme.colors.primary}; // 디자인 토큰
  // 구조분해할당으로 {}를 통해 객체안의 값에 접근하는 경우
  color: ${({ theme }) => theme.colors.text.white};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const S = {
  Wrapper,
  Container,
  Title,
};
