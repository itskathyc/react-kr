import { useNavigate } from "react-router-dom";
//상단에 전역변수로 만든 이유: 리랜더링 할 때 새로그려지면서 메모리를 새롭게 계속 차지하게 하지 않으려고.
//Main() 안에 있는 state가 바뀌면 Main()이 바뀐다.
const mockProducts = [
  { id: 3, category: "rank", name: "상품-1", price: 3000 },
  { id: 12, category: "random", name: "상품-2", price: 2000 },
];

//컴포넌트 함수명의 시작은 무조건 대문자
function Main() {
  const handler = () => {};
  const navigation = useNavigate();
  // useNavigate()는 페이지의 새로고침 없이 history객체와 state를 이용하여 페이지의 갱신없이 주소를 이동하는 함수
  // 자바스크립트 자체 기능 X, react-router-dom을 개발한 개발진들이 정의한 함수 -> bundle.js를 다시 요청하지 않는다.

  // html 문법을 반환할 수 있음 => jsx문법이라고 한다.
  // 그래서 .jsx라고 써있는건 컴포넌트라고 보면 된다. jsx 는 반드시 html을 리턴해야한다.
  // .js 파일도 오늘날에는 컴포넌트로 사용할 수 있음.
  return (
    <div onClick={handler}>
      {mockProducts.map((product) => {
        //return생략하려면 (),
        // {}를 하면 그 안에 return을 넣어줘야함. 그럼 둘은 어떤 차이인가? {}는 그 안에서 연산을 할 수 있다.
        // return <Link to={`/todo/${product.id}?goods=${product.category}`} key={product.id}> {product.name}</Link>
        return (
          <div
            key={product.id}
            onClick={() => {
              //<a href={`/todo/${product.id}?goods=${product.category}/`} key={product.id}>{product.name}</a> a태그는 bundle.js를 다시 불러옴
              // window.location.href = `/todo/${product.id}?goods=${product.category}`
              navigation(`/todo/${product.id}?goods=${product.category}`);
            }}
          >
            {product.name}
          </div>
        );
      })}
    </div>
  );
}
export default Main;
