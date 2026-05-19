import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter