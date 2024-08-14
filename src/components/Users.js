import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("filter") === "active";
  return (
    <>
      <div>Users</div>
      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active user
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUser ? <h3>Active users</h3> : <h3>All users</h3>}
    </>
  );
};
