import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import { ListGroup } from "react-bootstrap";

function Book() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://6319e9358e51a64d2bf03db3.mockapi.io/book")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBooks(res);
      });
  }, []);

  const foramtedBook = Books.map((bk) => {
    const mystyle = {
      backgroundColor: "#fed8b1",
      padding: "10px",
      width: "24em",
      borderRadius: "0.6em",
      margin: "1em",
      overflow: "hidden",
      cursor: "pointer",
      boxShadow:
        "0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03)",
      transition: "all ease 200ms",
      marginLeft: "auto",
      marginRight: "auto"
    };
    return (
      <>
        <div class="card col-md-3" style={mystyle}>
          <Helmet>
            <style>
              {
                'body { background-image: url("https://wallpaperaccess.com/full/124378.jpg"); background-position:center;background-size:cover;background-repeat:no-repeat;}'
              }
            </style>
          </Helmet>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to={"../book/" + bk.Bookid}
          >
            <img class="card-img-top" src={bk.BookImage} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Name: {bk.BookTitle}</h5>
              <h4 class="card-text">Price: {bk.BookPrice}</h4>
              <h4 class="card-text">Book Author: {bk.BookAuthor}</h4>
            </div>
          </Link>
        </div>
      </>
    );
  });

  return <div class="row">{foramtedBook}</div>;
}

export default Book;
