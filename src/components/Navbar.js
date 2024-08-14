import { NavLink } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const Auth = useAuth();
  const NavLinkActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div className="nav">
      <NavLink style={NavLinkActive} to={"/"}>
        Home
      </NavLink>
      <NavLink style={NavLinkActive} to={"about"}>
        About
      </NavLink>
      <NavLink style={NavLinkActive} to={"products"}>
        Products
      </NavLink>

      {/* {Auth.user ? (
        <NavLink style={NavLinkActive} to={"profile"}>
          Profile
        </NavLink>
      ) : (
        <NavLink style={NavLinkActive} to={"login"}>
          Login
        </NavLink>
      )} */}
      <NavLink style={NavLinkActive} to={"profile"}>
        Profile
      </NavLink>
    </div>
  );
};
export default Navbar;
