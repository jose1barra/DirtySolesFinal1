//import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetails } from "./pages/ProductDetails";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import BottomNav from "./components/BottomNav";
import "./App.css";

const App = () => {
  //filter helps with giving out specific number of items
  const {user} = useAuthContext(); //to see user in context
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/:sneakerId" element={<Navigate to="/products/:sneakerId" replace={true}/>}> 
          </Route> */}
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:sneakerId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/account" element={user ? <Account/> : <Navigate to="/login"/>}>
          </Route>
          <Route path="/login" element={!user ? <Login/> : <Navigate to="/account"/>}>
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      <BottomNav />
    </>
  );
};

export default App;
