import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment/Comment";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Password from "./components/Password/Password";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
