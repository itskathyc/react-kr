import {createBrowserRouter} from "react-router-dom";

import  Todo  from "../../pages/todo/todo";
import Main from "../../pages/main/main"
// URL을 감지하여 내가 생성한 ROUTE 주소에 맞게 컴포넌트를 전달하는 역할을 한다. 
// 감지, ROUTE 생성

export const router = createBrowserRouter([
    // import {router} from "상대경로"
    // 내가 export 한 변수나 함수명을 정확히 기재
    {path : '/', 
    element : <Main/>}, //반드시 컴포넌트를 나타내는 대문자여야한다. 
    {path : '/todo/:todoId', 
    element : <Todo/>}
])

// mjs : modulejs -> import/export를 씀 (cjs보다 조금 더 빠름)
// cjs : common js -> require/export를 씀 

// EXPORT
// : export default 
// : export default router ... 
// 내가 내보내고 싶은것의 이름을 적으면 됨. 
export default router
// 예는 상대경로로 찾으면 무조건 얘를 찾게됨. 1:1 매핑은 아니고, 객체화해서 여러개의 함수를 쓸 수 있음. 
// import {가지고 올 이름} from "상대경로";