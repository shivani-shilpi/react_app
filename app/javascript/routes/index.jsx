import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Recipes from "../components/Recipes";
import Recipe from "../components/Recipe";
import NewRecipe from "../components/NewRecipe";
import Books from "../components/Books";
import Book from "../components/Book";
import NewBook from "../components/NewBook";
import Welcome from "../components/Welcome";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/recipe" element={<NewRecipe />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/book" element={<NewBook />} />
      <Route path="/" element={<Welcome/>}/>
    </Routes>
  </Router>
);