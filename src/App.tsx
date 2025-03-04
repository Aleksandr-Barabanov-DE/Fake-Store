import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Home } from "@/pages/home/Home";
import { Cart } from "@/pages/cart/Cart";
import { Favorites } from "@/pages/favorites/Favorites";
import { Navbar } from "./widgets/navBar/NavBar";
import "./App.css";
import { checkAuth } from './features/auth/model/authSlice';
import LoginPage from "./features/auth/ui/loginPage";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
