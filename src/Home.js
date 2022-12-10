import { Helmet } from "react-helmet";
function Home() {
  const mystyle = {
    color: "white",
    padding: "40px",
    fontFamily: "fantasy",
    textAlign: "center"
  };

  const title = {
    backgroundImage: "linear-gradient(#4568dc, #b06ab3)",
    textDecoration: "underline overline"
  };
  return (
    <>
      <div style={mystyle}>
        <Helmet>
          <style>
            {
              'body { background-image: url("https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg");background-position:center;background-size:cover;background-repeat:no-repeat; }'
            }
          </style>
        </Helmet>
        <h1 id="title" style={title}>
          Books Management
        </h1>
        <br />
        <br />
        <br />
        <h2
          style={{
            backgroundImage: "linear-gradient(#EDE574, #E1F5C4)",
            fontFamily: "cursive",
            color: "#dd3e54"
          }}
        >
          Here you can find all the details related to books.
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
