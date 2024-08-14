import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProductedRoute = ({ children }) => {
  const location = useLocation();
  const Auth = useAuth();
  console.log(Auth.user);
  if (!Auth.user) {
    return <Navigate to={"/login"} state={{ path: location.pathname }} />;
  }
  return children;
};
export default ProductedRoute;
