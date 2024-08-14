import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const Auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const handleClick = () => {
    if (!user) return;
    Auth.Login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <div>Login</div>
      <label>User</label>
      <input onChange={(e) => setUser(e.target.value)} value={user} />
      <button onClick={handleClick}>Login</button>
    </>
  );
};
export default Login;
