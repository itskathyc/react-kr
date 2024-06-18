//useReducer : 상태 경우 및 분기가 많거나
// 상태 변경로직이 복잡하거나
// 재사용이 많이 되는 경우

// state, action순서 중요!
// state는 초기배열,
// action은 초기배열에서 변화될 상태action
export function userReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    // 객체를 전달받아서 상태 변경 로직을 재사용할 수 있다.
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload.id);
    default:
      return state;
  }
}
