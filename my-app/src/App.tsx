import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/register";
import Register from "./pages/authentication/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;