import "./App.css";
// import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Nomatch } from "./components/Nomatch";
import { Products } from "./components/Products";
import Featured from "./components/Featured";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { Admin } from "./components/Admin";
import { UserDetails } from "./components/UserDetails";
import { lazy, Suspense } from "react";
import Profile from "./components/Profile.js";
import { AuthProvider } from "./components/context/AuthContext.js";
import Login from "./components/context/Login.js";
import ProductedRoute from "./components/context/ProductedRoute.js";
const LazyAbout = lazy(() =>
  import(/*webpackChunkName:"about"*/ "./components/About.js")
);
function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<p>...loading</p>}>
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="/products" element={<Products />}>
          {/* ------index */}
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<Nomatch />} />
        {/* user */}
        <Route path="/users" element={<Users />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route
          path="profile"
          element={
            <ProductedRoute>
              <Profile />
            </ProductedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
