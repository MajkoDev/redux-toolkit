import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Counter from "../01-counter/Counter";

// import AddPostForm from "../02-post-simple/AddPostForm";
// import PostsList from "../02-post-simple/PostsList";

import AddPostForm from "../03-post-intermediate/AddPostForm";
import PostsList from "../03-post-intermediate/PostsList";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <PostsList />
              <AddPostForm />
            </React.Fragment>
          )}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
