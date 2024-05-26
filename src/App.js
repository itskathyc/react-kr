import './App.css';
import { RouterProvider } from 'react-router-dom';
import myRouter from "./libs/routes/router"

function App() {
  return (
    <RouterProvider
      router = {myRouter}  
    /> // 하나의 컴포넌트 - 태그 형태로 되어있다. 
    
  );
}

export default App;
