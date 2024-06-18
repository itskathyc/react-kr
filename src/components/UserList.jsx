import { useReducer } from "react";
import { userReducer } from "../reducer/user.reducer";

const UserList = () => {
  const [users, dispatch] = useReducer(userReducer, [
    { id: 1, name: "김사과" },
  ]);

  function onPressAddUser() {
    // useReducer가 action 을 통해 아래 정보들을 넘겨준다
    dispatch({
      type: "ADD_USER",
      payload: {
        id: Math.floor(Math.random() * 1000000),
        name: "이멜론",
      },
    });
    // 추가하는 로직을 작성하지 않아도 어디에서든 dispatch로 action만 전달하면 자동으로 해당 함수가 실행된다.
  }
  return (
    <div>
      <button onClick={onPressAddUser}>추가</button>
    </div>
  );
};

export default UserList;
