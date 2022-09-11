import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { RequireAuth } from "./features/auth/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
