import { FC, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import logo from "@/shared/assets/logo.jpg";
import { logout } from "@/features/auth/model/authSlice";
import gsap from "gsap";
import Swal from 'sweetalert2';
import './NavBar.scss';

export const Navbar: FC = () => {
  const dispatch = useDispatch();
  const navRef = useRef<HTMLDivElement>(null);
  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
       Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged out successfully',
            showConfirmButton: false,
            timer: 1500,
          });
    dispatch(logout());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav img", {
        opacity: 0,
        y: -30,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8,
      });

      gsap.from(".nav .inner-wrapper > *", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8,
        ease: "power2.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="inner-wrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/cart" className="cart-link">
          <ShoppingCart size={25} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>
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