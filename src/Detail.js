import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function BookDetail() {
  let params = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    fetch("https://6319e9358e51a64d2bf03db3.mockapi.io/book/" + params.Bookid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBook(res);
      });
  }, []);

  return (
    <>
      <Helmet>
        <style>
          {
            'body { background-image: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9vayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");background-position:center;background-size:cover;background-repeat:no-repeat; }'
          }
        </style>
      </Helmet>
      <table border="2" class="detail">
        <tr>
          <td id="6">Id</td>
          <td>:</td>
          <td>{book.Bookid}</td>
        </tr>

        <tr>
          <td id="1">Title</td>
          <td>:</td>
          <td>{book.BookTitle}</td>
        </tr>

        <tr>
          <td id="2">Image</td>
          <td>:</td>
          <td>
            <img src={book.BookImage} alt="asdf" />
          </td>
        </tr>

        <tr>
          <td id="3">Pages</td>
          <td>:</td>
          <td>{book.BookNoofPages}</td>
        </tr>

        <tr>
          <td id="4">Description</td>
          <td>:</td>
          <td>{book.BookDescription}</td>
        </tr>

        <tr>
          <td id="5">Author</td>
          <td>:</td>
          <td>{book.BookAuthor}</td>
        </tr>

        <tr>
          <td id="7">Price</td>
          <td>:</td>
          <td>{book.BookPrice}</td>
        </tr>
        <tr>
          <td>
            <Link to={"../book"}>
              <button class="buttonB">Back</button>
            </Link>
          </td>
          <td>
            <button
              class="buttonB"
              onClick={() => {
                fetch(
                  "https://6319e9358e51a64d2bf03db3.mockapi.io/book/" +
                    params.Bookid,
                  {
                    method: "DELETE"
                  }
                ).then((res) => {
                  navigate("/book");
                });
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              class="buttonB"
              onClick={() => {
                navigate("/book/edit/" + params.Bookid);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </>
  );
}
export default BookDetail;
