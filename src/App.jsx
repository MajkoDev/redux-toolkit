import Counter from "../01-counter/Counter";

// import AddPostForm from "../02-post-simple/AddPostForm";
// import PostsList from "../02-post-simple/PostsList";

import AddPostForm from "../03-post-intermediate/AddPostForm";
import PostsList from "../03-post-intermediate/PostsList";

function App() {
  return (
    <div className="App">
      <PostsList />
      <AddPostForm />
    </div>
  );
}

export default App;
