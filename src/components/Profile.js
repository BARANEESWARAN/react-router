import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const Auth = useAuth();

  const handleLogout = () => {
    Auth.Logout();
    navigate("/");
  };
  return (
    <>
      <div>Profile</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Profile;
