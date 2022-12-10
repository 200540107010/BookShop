import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Books from "./Books";
import BookDetail from "./Detail";
import BooksAdd from "./BooksAdd";
import Home from "./Home";
import Layout from "./Layout";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/book" element={<Books />}></Route>
        <Route path="/book/:Bookid" element={<BookDetail />}></Route>
        <Route path="/book/add" element={<BooksAdd />}></Route>
        <Route path="/book/edit/:Bookid" element={<BooksAdd />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
