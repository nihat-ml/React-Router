import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import Books from "../pages/user/Books";
// import BookDetail from "../pages/user/BookDetail";
// import Favorites from "../pages/user/Favorites";
// import Basket from "../pages/user/Basket";
// import UserNavbar from "../components/UserNavbar";
// import UserFooter from "../components/UserFooter";

const UserRoutes = () => {
  return (
    <>
      {/* <UserNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        {/* <Route path="/books/:id" element={<BookDetail />} /> */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
        {/* <Route path="/basket" element={<Basket />} /> */}
      </Routes>
      {/* <UserFooter /> */}
    </>
  );
};

export default UserRoutes;
