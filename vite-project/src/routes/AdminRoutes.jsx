import React from "react";
import { Routes, Route } from "react-router-dom";
// import Dashboard from "../pages/admin/Dashboard";
// import Books from "../pages/admin/Books";
// import BookDetail from "../pages/admin/BookDetail";
// import AddBook from "../pages/admin/AddBook";
// import EditBook from "../pages/admin/EditBook";
// import AdminNavbar from "../components/AdminNavbar";
// import AdminFooter from "../components/AdminFooter";

const AdminRoutes = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
      </Routes>
      <AdminFooter />
    </>
  );
};

export default AdminRoutes;
