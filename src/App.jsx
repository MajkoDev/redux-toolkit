import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddPostForm from "../posts/AddPostForm";
import PostsList from "../posts/PostsList";
import SinglePostPage from "../posts/SinglePostPage";

import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddPostForm />
              <PostsList />
            </>
          }
        />

        <Route path="/posts/:postId" component={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
