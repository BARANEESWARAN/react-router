import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate("/about", { replace: true });
  };
  return <button onClick={handleRoute}> go toAbout</button>;
};
export default Home;
