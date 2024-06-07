import styled from "styled-components";
import FormInput from "../../../components/FormInput";
// import TDButton from "../../../components/Button";
import TDButton from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  // 주소 이동을 위해 사용. react-router-dom의 bundle.js를 다시 받지 않기 위해 a태그 혹은 window함수말고 이걸 사용한다.
  const navigate = useNavigate();

  const handlePressSignIn = (event) => {
    event.preventDefault();
    // const email = event.target.email.value // 아래에서 name으로 전달
    // const password = event.target.password.value
    const { email, password } = event.target;

    // trim() => 공백제거
    if (!email.value.trim() || !password.value.trim()) return;
    // 예외처리 : 만약 아무런 값(공백을 다 제거하고 나서 값이 없다면(!))을 받지 않았으면 함수를 실행시키지 말아라.

    // 조건처리 :
    if (email.value === "test" && password.value === "test") {
      return navigate("/todo/3"); // 루트 하위 endpoint만 적어주기
      // elseif를 사용하지 않기 위해 아닌 경우에는 return을 해주고 이를 얼리리턴이라고 함
      // else 를 사용하는 이유
      // else -> 케이스가 두개일때. 두개를 넘어가면 무조건 switch문으로 사용하라(else if보다도). if의 depth는 깊어지지 않는것이 중요
      // if(a){ return } 함수실행
    }
    alert("아이디와 비밀번호를 확인해주세요");
  };

  return (
    <S.Form onSubmit={handlePressSignIn}>
      <FormInput
        label={"이메일"}
        placeholder={"abc@email.com"}
        size={2}
        name="email"
      ></FormInput>
      <FormInput
        label={"비밀번호"}
        placeholder={"password"}
        size={2}
        containerStyle={{ width: 100 }}
        name="password"
      />
      {/** 스타일 가이드/디자인 시스템 -> 정해지니 값으로 컴포넌트를 빠르게 생산 */}
      <TDButton size={"medium"} variant={"secondary"} shape={"shape"}>
        로그인
      </TDButton>
    </S.Form>
  );
};

export default SignInForm;

const Form = styled.form`
  background-color: "#f00000";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const InputBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #999;
  width: 100%;
  border-radius: 4px;
  padding-left: 6px;
  height: 48px;
  &::placeholder {
    text-align: center;
  }
`;

const InputLabel = styled.form`
  position: absolute;
  left: 16px;
  top: -6px;
  font-size: 12px;
  background-color: #fff;
  z-index: 100;
  padding: 0 4px;
`;

const S = {
  Form,
  InputLabel,
  Input,
  InputBox,
};
