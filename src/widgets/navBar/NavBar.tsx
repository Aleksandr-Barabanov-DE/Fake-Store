import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { ShoppingCart } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { logout } from "../../features/auth/model/authSlice";
import { User, LogOut } from "lucide-react";
import "./NavBar.scss";

export const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="inner-wrapper">
        <NavLink to="/">Home</NavLink>
        {isAuthenticated &&
          <>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/cart" className="cart-link">
              <ShoppingCart size={25} />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </NavLink></>}
        {!isAuthenticated ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <div className="user-info">
            <span>Hello, {user?.username}</span>
            <div className="logout-wrapper">
              <User size={20} />
              <button onClick={handleLogout} aria-label="Logout">
                <LogOut size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
