<<<<<<< HEAD
import FormInput from '../../../components/FormInput';
import TDButton from '../../../components/Button';
import { Form } from '../style';

// 만약에 signform_array가 백엔드로부터 받아오는 데이터로 채워지는
// 배열이라면 백에서 받아오기 전에 이 배열은 빈 값 -> 사용할 때 
// SIGTNFORM_ARRAY.length > 0 이라는 조건을 줘야함. 
const SIGNFORM_ARRAY=[
    {
        label : "이메일", 
        size : 3, 
        name : "email",
        option: {
            placeholder: "이메일"
        }
    },
    {
        label : "비밀번호", 
        size : 3, 
        name : "password"
    },
    {
        label : "비밀번호 확인", 
        size : 3, 
        name : "password-confirm"
    },
]

export function SignUpForm({formState}){

    // 반드시 name값을 받아야한다. form은 Name을 기반으로 데이터를 받는다. 
    const onSubmitSignUp =(event) => {
        // 주소변경을 막기위해
        event.preventDefault()
        // 회원가입 때 입력했던 이메일명을 통해 ooo@naver.com 환영합니다를 alert
        // 로그인으로 변경
        // input에 value를 가지고 오는 방법 
        const email = event.target.email.value // 위에 name : email로 줬기 때문에 target.email이 되는것
                                               // 만약 name : dayoon을 했다면 target.dayoon.value로 하면됨
        alert(`${email}님 환영합니다`)
        formState = "SIGN-IN"
    }


    // </div>는 안에 아무것도 없다는 것을 의미함
    return <S.Form onSubmit={onSubmitSignUp}>
    {SIGNFORM_ARRAY.length > 0 && SIGNFORM_ARRAY.map((form)=>
        <FormInput key={form.name} size={form.size} label={form.label}
        name={form.name}
        // A가있다면 B를 반환해라 
        // 1. form.option?.placeholder
        // 2. form.option && form.option.placeholder
        // 3. form.option ? form.option.placeholder : form.name
        // 4. form.option?.placeholder ?? form.name (삼항연산자 축약)
        placeholder={form.option ? form.option.placeholder : form.name}/> // ?연산자 => option이 있다면
    )}
    {/** 스타일 가이드/디자인 시스템 -> 정해지니 값으로 컴포넌트를 빠르게 생산 */}
    <TDButton size={"full"} variant={"secondary"} shape={"shape"}>회원가입</TDButton>
</S.Form>
}


const S = {
    Form
}

export default SignUpForm




=======
export function SignUpForm(){
    return <div> SignUpForm </div> // </div>는 안에 아무것도 없다는 것을 의미함
}
>>>>>>> parent of 14435ac (240601)
