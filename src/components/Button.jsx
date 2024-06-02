/*

1. 컴포넌트 버튼은 variant, size, shape 값을 전달받는다. 
2. variant -> primary, secondary, primary-text
3. size -> small, medium, full
4. shape -> shape, round

5. primary -> 배경 녹색, 글자 흰색
6. secondary -> 배경 파랑색, 글자 흰색
7. primary text -> 글자색 녹색, 배경 x

버튼은 크기로 지정하지 않고, 
패딩으로 조율한다. 
8. small -> padding : 16px
9. medium -> padding : 16px 32px
10. full -> width : 100%, aspect-ratio : 8/1
10-1. shape -> radius 8px, round -> 50%

11. 나머지 매개변수 사용할것
12. <button> 텍스트 </button> -> 텍스트 라는 것은 props가 자동으로 ({children})

ex) 
const TDButton = ({variant, size, shape, children, ... rest}) => {
    return (
        <S.Button
            variant={variant}
        >
            {children} // 이게 위의 텍스트 자리로 넘어온다. 이름도 children 으로 고정되어있음
        </S.Button>
    )
}

    <TDButton vairant={'primary'} size={'full'} shape={'shape'}>회원가입</TDButton>

 */

import styled, {css} from 'styled-components';

//jsDocs
/**
 * 
 * @param size:small, medium, full
 * size: 디자인 시스템에 등록된 버튼 컴포넌트의 사이즈 값
 */
const TDButton = ({variant, size, shape, children, ...props}) => {
    console.log(size)
    return (
        // 강사님 ver : 전개연산자 사용 -> 객체화 했기 때문에 직접 접근가능
        <S.Button {...{size, shape, variant}}{...props}>
            {children}
        </S.Button>
        //<S.Button $size={size} $variant={variant} $shape={shape}>{children}</S.Button>
    )
}

export default TDButton

const variantCss = {
    primary:css`
        background-color: green;
        color : white;
    `,
    secondary : css`
        background-color: pink;
        color : white;
    `,
    // 변수명에 - 을 못쓰기 때문에 string값을 만들어줘야함
    "primary-text":css`
        color:green;
    `
}

// 버튼의 css는 고정값을 주지 않고 padding으로 조정한다. 
// 왜냐하면 안에 들어가는 내용에 따라 크기가 달라지기 때문
const sizeCss = {
    small : css`
        padding:16px;
    `,
    medium: css`
        padding : 16px 32px;
    `,
    full : css`
        width : 100%;
        aspect-ratio : 8/1;
    `,
}

const shapeCss = {
    shape : css`
        border-radius: 8px;
    `,
    round: css`
        border-radius: 50%;
    `
}

const Button = styled.button`
    ${(props) => sizeCss[props.size]} //키 값으로 $size로 하면 props.$size로 해야하고 size면 props.size로 해야함. 아무것도 안할거면 $하지말기
    ${({variant}) => variantCss[variant]} // props => props.$variant로 할 수 도 있음. 구조분해할당으로 variant를 키로 해주면 props.어쩌구로 해주지 않아도됨
    ${(props) => shapeCss[props.shape]}
`

const S = {
    Button
}