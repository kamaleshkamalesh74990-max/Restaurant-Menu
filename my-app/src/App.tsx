import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Dashboard from "./pages/authentication/dashboard/dashboard";
import Cmdashboard from "./pages/authentication/dashboard/cmdashboard";
import Madashboard from "./pages/authentication/dashboard/madashboard";
import Emdashboard from "./pages/authentication/dashboard/emdashboard";
import Mddashboard from "./pages/authentication/dashboard/mddashboard";
import Fddashboard from "./pages/authentication/dashboard/fddashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cmdashboard" element={<Cmdashboard />} />
        <Route path="/madashboard" element={<Madashboard />} />
        <Route path="/cmedashboard" element={<Cmdashboard />} />
        <Route path="/emdashboard" element={<Emdashboard />} />
        <Route path="/mddashboard" element={<Mddashboard />} /> 
        <Route path="/fddashboard" element={<Fddashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;