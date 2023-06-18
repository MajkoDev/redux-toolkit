import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Counter from "../01-counter/Counter";

// import AddPostForm from "../02-post-simple/AddPostForm";
// import PostsList from "../02-post-simple/PostsList";

import RootLayout from "../03-post-intermediate/RootLayout";
import PostsList from "../03-post-intermediate/PostsList";
import SinglePostPage from "../03-post-intermediate/SinglePostPage";

import AddPostForm from "../03-post-intermediate/AddPostForm";
import EditPostForm from "../03-post-intermediate/EditPostForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PostsList />} />
      <Route path="posts/:id" element={<SinglePostPage />} />

      <Route path="add" element={<AddPostForm />} />
      <Route path="edit" element={<EditPostForm />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
