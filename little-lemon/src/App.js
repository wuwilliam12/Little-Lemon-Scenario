import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import MenuPage from "./pages/MenuPage";
import BookingPage from "./pages/BookingPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
