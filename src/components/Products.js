import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <p>products</p>
      <input type="search" placeholder="search" />
      <br />
      <Link to={"featured"}>Featured</Link>
      <Link to={"new"}>New</Link>
      <Outlet />
    </div>
  );
};
