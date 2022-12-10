import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function BooksAdd() {
  const nevigate = useNavigate();
  const [data, setdata] = useState({});
  const params = useParams();

  useEffect(() => {
    if (params.Bookid > 0) {
      fetch("https://62da4aad9eedb699636a73fe.mockapi.io/book/" + params.Bookid)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setdata(res);
        });
    }
  }, []);

  return (
    <>
      <Helmet>
        <style>
          {
            'body { background-image: url("https://t3.ftcdn.net/jpg/03/58/79/66/360_F_358796655_1Zoe4oyLOoE7lL4izOvy8DvCP0xypYgg.jpg");background-position:center;background-size:cover;background-repeat:no-repeat; }'
          }
        </style>
      </Helmet>
      <table>
        <tr>
          <td>Enter Book image</td>
          <td>:</td>
          <td>
            <input
              value={data.BookImage}
              type="text"
              onChange={(e) => {
                setdata({ ...data, BookImage: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Book name</td>
          <td>:</td>
          <td>
            <input
              value={data.BookTitle}
              type="text"
              onChange={(e) => {
                setdata({ ...data, BookTitle: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter number of pages</td>
          <td>:</td>
          <td>
            <input
              value={data.BookNoofPages}
              type="text"
              onChange={(e) => {
                setdata({ ...data, BookNoofPages: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Book Description</td>
          <td>:</td>
          <td>
            <input
              value={data.BookDescription}
              type="text"
              onChange={(e) => {
                setdata({ ...data, BookDescription: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Book's Author</td>
          <td>:</td>
          <td>
            <input
              value={data.BookAuthor}
              type="text"
              onChange={(e) => {
                setdata({ ...data, BookAuthor: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Book Price</td>
          <td>:</td>
          <td>
            <input
              type="text"
              value={data.BookPrice}
              onChange={(e) => {
                setdata({ ...data, BookPrice: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              class="buttonB"
              onClick={() => {
                if (params.Bookid > 0) {
                  fetch(
                    "https://6319e9358e51a64d2bf03db3.mockapi.io/book/" +
                      params.Bookid,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-type": "application/json"
                      }
                    }
                  ).then(() => {
                    nevigate("/book");
                  });
                } else {
                  fetch("https://6319e9358e51a64d2bf03db3.mockapi.io/book/", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json"
                    }
                  }).then(() => {
                    nevigate("/book");
                  });
                }
              }}
            >
              {params.Bookid > 0 && "Edit "}
              {!params.Bookid > 0 && "Add "}
              Book
            </button>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
