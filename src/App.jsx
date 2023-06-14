import Counter from "../01-counter/Counter";

// import AddPostForm from "../02-post-simple/AddPostForm";
// import PostsList from "../02-post-simple/PostsList";

import AddPostForm from "../03-post-intermediate/AddPostForm";
import PostsList from "../03-post-intermediate/PostsList";
import SinglePostPage from "../03-post-intermediate/SinglePostPage";
import Navbar from "../03-post-intermediate/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PostsList /> 
              <AddPostForm />
            </>
          }
        />
        
      </Routes>
    </>
  );
}

export default App;
