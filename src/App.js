import "./App.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./libs/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./libs/styles/theme";

function App() {
  return (
    // key = {value}
    <ThemeProvider theme={theme}>
      {" "}
      {/**themeprovider를 사용하는 이유 : 매번 import를 하지 않고 자동으로 전달해주려고 */}
      <RouterProvider router={myRouter} />
      {/* 하나의 컴포넌트 - 태그 형태로 되어있다. */}
    </ThemeProvider>
  );
}

export default App;
