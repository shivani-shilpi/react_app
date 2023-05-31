import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewBook = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v2/books/create";

    if (name.length == 0 || author.length == 0 || price.length == 0 || category.length == 0)
      return;

    const body = {
      name,
      author,
      price,
      category: stripHtmlEntities(category),
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate(`/book/${response.id}`))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new book to our awesome book collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="bookName">Book name</label>
              <input
                type="text"
                name="name"
                id="bookName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookAuthor">Author</label>
              <input
                type="text"
                name="author"
                id="bookAtuthor"
                className="form-control"
                required
                onChange={(event) => onChange(event, setAuthor)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookPrice">Price</label>
              <input
                type="text"
                name="price"
                id="bookPrice"
                className="form-control"
                required
                onChange={(event) => onChange(event, setPrice)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bookCategory">Category</label>
              <input
                type="text"
                name="category"
                id="bookCategory"
                className="form-control"
                required
                onChange={(event) => onChange(event, setCategory)}
              />
            </div>
            <button type="submit" className="btn custom-button mt-3">
              Create Book
            </button>
            <Link to="/books" className="btn btn-link mt-3">
              Back to books
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewBook;