import React from "react";
import PostsList from "./components/PostsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm";
import EditForm from "./components/editForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AddForm />
              <PostsList />
            </>
          }
        ></Route>
        <Route exact path="/edit/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
};

export default App;
