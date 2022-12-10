import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

function BasicExample() {
  let myStyle = {
    color: "green",
    fontSize: "30px",
    textDecoration: "none"
  };

  const mystyle2 = {
    color: " #753a88",
    fontSize: "20px"
  };
  return (
    <Navbar className="nav">
      <Nav defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="">
            {""}
            <Link style={myStyle} to="./">
              Books Management
            </Link>{" "}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="../" style={mystyle2}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="../book" style={mystyle2}>
            Books List
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="../book/add" style={mystyle2}>
            Add New Book
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default BasicExample;
