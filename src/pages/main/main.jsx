import styled from "styled-components";
import SignInForm from "./_components/SignInForm";
import SignUpForm from "./_components/SignUpForm";
import { useState } from "react";

function Main() {
  // 상위컴포넌트의 값을 하위컴포넌트에서 변경하고 싶다면
  // Props로 전달
  let formState = "SIGN-IN";

  const TAB_ARRAY = [
    {
      name: "SIGN-IN",
      isFormSelected: formState === "SIGN-IN",
    },
    {
      name: "SIGN-UP",
      isFormSelected: formState === "SIGN-UP",
    },
  ];

  // event함수를 정의할 때 handle을 앞에 적어준다. 혹은 onClick
  function handlePressSignTab(tabName) {
    formState = tabName;
  }

  // 만들어야하는 컴포넌트
  return (
    <S.Wrapper>
      <LeftSide />
      <RightSide>
        <S.Container className={formState === true ? "SIGN-IN" : "SIGN-UP"}>
          <S.Header>
            {TAB_ARRAY.map((tab, index) => (
              // <컴포넌트 전달={프롭스명}/>
              <S.Tab
                key={index}
                $isFormSelected={formState === tab.name}
                name={tab.name}
                onClick={() => handlePressSignTab(tab.name)}
              >
                {tab.name}
              </S.Tab>
            ))}
          </S.Header>
          {formState === "SIGN-IN" ? (
            <SignInForm />
          ) : (
            <SignUpForm othername={formState} />
          )}
        </S.Container>
      </RightSide>
    </S.Wrapper>
  );
}
export default Main;

const LeftSide = styled.div`
  flex: 1;
  background-image: url("/puff2.jpg");
  background-size: cover;
  background-position: center;
`;

const RightSide = styled.div`
  flex: 1;
  background-color: #e94762;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 스타일된 요소를 생성해서 컴포넌트화한다.
const Wrapper = styled.div`
  /* height: calc(100vh - 140px); */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const Container = styled.div`
  width: 360px;
  border: 1px solid #999;
  border-radius: 20px;
`;

const Header = styled.div`
  background-color: #e3e0e4;
  display: flex;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const Tab = styled.div`
  width: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  // 달러 중괄호 콜백함수 : 넘겨준값을 가져올 수 있음
  /* ${(props) => props.$isformSelected && "background-color : #e61919 ;"} */
  // background-color : ${(props) => props.isSelected && "#e0e0e0"}
  font-size: 32px;
  padding: 16px;
  font-weight: bold;
  &:hover {
    background-color: #dfabd8;
    ${(props) =>
      props.$isformSelected
        ? "border-top-right-radius : 20px"
        : "border-top-left-radius : 20px"}/* ${({ isFormSelected, name }) =>
      isFormSelected &&
      (name === "SIGN-IN"
        ? "border-top-right-radius : 20px"
        : name === "SIGN-UP"
        ? "border-top-left-radius : 20px"
        : "")} */
  }
  /**
    div > section > p > a 에 대한 값 변경을 해야했는데, 
    div > section > p {
        &(div > section > p) > a{
            라고 표현하는 것
        }
    }
    
    */
`;

// 객체를 생성하는건 메모리적으로는 조금 손해기는한데, DX를 따졌을 때는 좋다. 작은 퍼포먼스 이슈는 눈감고 넘어가도 된다.
const S = {
  Wrapper, // Wrapper : Wrapper
  Container,
  Header,
  Tab,
};
