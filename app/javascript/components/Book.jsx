import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Book = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ category: "" });

  useEffect(() => {
    const url = `/api/v2/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setBook(response))
      .catch(() => navigate("/books"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteBook = () => {
    const url = `/api/v2/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/books"))
      .catch((error) => console.log(error.message));
  };

  const categoryList = () => {
    let categoryList = "No category available";
    if (book.category.length > 0) {
      categoryList = book.category
        .split(",")
        .map((category, index) => (
          <li key={index} className="list-group-item">
            {category}
          </li>
        ));
    }

    return categoryList;
  };

  const bookName = addHtmlEntities(book.name);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {book.name}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-8">
            <strong className="mb-2">Name: </strong>
            {book.name}<br/>
            <strong className="mb-2 mt-2">Author: </strong>
              {book.author}<br/>
            <strong className="mb-2 mt-2">Price: </strong>
              {book.price}<br/>
            <strong className="mb-2 mt-2">Category: </strong> 
              {book.category}
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteBook}
            >
              Delete Book
            </button>
          </div>
        </div>
        <Link to="/books" className="btn btn-info mt-3">
          Back to books
        </Link>
      </div>
    </div>
  );
};

export default Book;