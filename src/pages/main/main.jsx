import styled from "styled-components";
import SignInForm from "./_components/SignInForm";
import SignUpForm from "./_components/SignUpForm";
import { useState } from "react";

function Main() {
  const [formState, setFormState] = useState("SIGN-IN");
  // let formState = "SIGN-IN";

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

  function handlePressSignTab(tabName) {
    setFormState(tabName);
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
                // $isFormSelected={formState === tab.name}
                $tabName={tab.name}
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
            <SignUpForm setFormState={setFormState} />
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

const Wrapper = styled.div`
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
  font-size: 32px;
  padding: 16px;
  font-weight: bold;
  &:hover {
    background-color: #dfabd8;
    ${(props) =>
      props.$tabName === "SIGN-IN"
        ? "border-top-left-radius : 20px"
        : "border-top-right-radius : 20px"}
  }
`;

const S = {
  Wrapper, // Wrapper : Wrapper
  Container,
  Header,
  Tab,
};
